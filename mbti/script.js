// ===== MBTI Test - Kurdish 5-Point Scale =====

const scaleOptions = [
  { label: "تەواو سەرەوە", value: 2 },
  { label: "سەرەوە",       value: 1 },
  { label: "بێلایەن",      value: 0 },
  { label: "خوارەوە",      value: -1 },
  { label: "تەواو خوارەوە", value: -2 }
];

let currentQuestion = 0;
let answers = [];
let started = false;

const app = document.getElementById("app");

// ========== SCREENS ==========

function showWelcome() {
  started = false;
  app.innerHTML = `
    <div class="fade-in">
      <div class="welcome-title">تاقیکردنەوەی MBTI</div>
      <div class="welcome-subtitle">
        بە ٣٢ پرسیار کەسایەتی خۆت بدۆزەوە<br>
        وەڵام بدەوە بەپێی ئەوەی کە چەند بەهێزی هەست دەکەیت
      </div>
      <button class="start-btn" onclick="startTest()">دەستپێکردن</button>
    </div>
  `;
}

function startTest() {
  started = true;
  currentQuestion = 0;
  answers = new Array(questions.length).fill(null);
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  app.innerHTML = `
    <div class="fade-in">
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progress}%"></div>
      </div>
      <div class="question-counter">پرسیار ${currentQuestion + 1} لە ${questions.length}</div>
      <div id="question-text">${q.text}</div>
      <div id="scale-container"></div>
      <div class="navigation">
        <button class="nav-btn" id="prev-btn" onclick="goPrev()">پێشتر</button>
        <button class="nav-btn" id="next-btn" onclick="goNext()" disabled>دواتر</button>
      </div>
    </div>
  `;

  renderScale();
  updateNavButtons();
}

function renderScale() {
  const container = document.getElementById("scale-container");
  container.innerHTML = "";

  scaleOptions.forEach((opt) => {
    const btn = document.createElement("div");
    btn.className = "scale-btn";
    btn.textContent = opt.label;

    if (answers[currentQuestion] === opt.value) {
      btn.classList.add("selected");
    }

    btn.addEventListener("click", () => {
      selectAnswer(opt.value);
    });

    container.appendChild(btn);
  });
}

function selectAnswer(value) {
  answers[currentQuestion] = value;

  // Update visual
  document.querySelectorAll(".scale-btn").forEach((btn, idx) => {
    btn.classList.toggle("selected", scaleOptions[idx].value === value);
  });

  updateNavButtons();

  // Auto-advance after brief delay
  setTimeout(() => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion();
    } else {
      finishTest();
    }
  }, 350);
}

function updateNavButtons() {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (prevBtn) prevBtn.disabled = currentQuestion === 0;
  if (nextBtn) nextBtn.disabled = answers[currentQuestion] === null;
}

function goPrev() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

function goNext() {
  if (answers[currentQuestion] === null) return;

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    finishTest();
  }
}

function finishTest() {
  const type = calculateMBTI();
  window.location.href = `result.html?type=${type}`;
}

// ========== MBTI CALCULATION ==========

function calculateMBTI() {
  let ei = 0, sn = 0, tf = 0, jp = 0;

  questions.forEach((q, i) => {
    const ans = answers[i];
    if (ans === null) return;

    if (q.dimension === "EI") {
      ei += (q.direction === "E") ? ans : -ans;
    } else if (q.dimension === "SN") {
      sn += (q.direction === "S") ? ans : -ans;
    } else if (q.dimension === "TF") {
      tf += (q.direction === "T") ? ans : -ans;
    } else if (q.dimension === "JP") {
      jp += (q.direction === "J") ? ans : -ans;
    }
  });

  let type = "";
  type += ei >= 0 ? "E" : "I";
  type += sn >= 0 ? "S" : "N";
  type += tf >= 0 ? "T" : "F";
  type += jp >= 0 ? "J" : "P";

  return type;
}

// ========== INIT ==========
showWelcome();