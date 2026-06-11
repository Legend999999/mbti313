document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menu = document.getElementById("menuToggle");
  const dropdown = document.getElementById("dropdownMenu");

  if (!menu || !dropdown) {
    console.error("Menu not found");
    return;
  }

  function openMenu() {
    dropdown.style.display = "block";
    dropdown.getBoundingClientRect(); // force reflow so transition fires
    menu.classList.add("active");
  }

  function closeMenu() {
    menu.classList.remove("active");
    dropdown.addEventListener("transitionend", function handler() {
      if (!menu.classList.contains("active")) {
        dropdown.style.display = "none";
      }
      dropdown.removeEventListener("transitionend", handler);
    });
  }

  function toggleMenu() {
    if (menu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  menu.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking outside — but NOT when clicking a dropdown item
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && menu.classList.contains("active")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("active")) {
      closeMenu();
    }
    if ((e.key === "Enter" || e.key === " ") && document.activeElement === menu) {
      e.preventDefault();
      toggleMenu();
    }
  });
});