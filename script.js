const toggleBtn = document.getElementById("dark-mode-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});


toggleBtn.textContent = "🌙";
