// common/security.js
(() => {
  "use strict";

  // Block right click
  document.addEventListener("contextmenu", e => {
    e.preventDefault();
  });

  // Block inspect shortcuts
  document.addEventListener("keydown", e => {
    const key = e.key.toLowerCase();

    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["i", "j", "c", "k"].includes(key)) ||
      (e.ctrlKey && ["u", "s", "p"].includes(key))
    ) {
      e.preventDefault();
      return false;
    }
  });

  // Stop dragging/copying
  document.addEventListener("dragstart", e => e.preventDefault());

  // Basic iframe protection
  if (window.top !== window.self) {
    window.top.location = window.self.location;
  }

  // Console warning
  console.clear();
  console.log("%cSTOP!", "color:red;font-size:45px;font-weight:bold;");
  console.log("%cMBTI313 website is protected.", "font-size:18px;");
})();