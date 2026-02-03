const themeToggle = document.getElementById("toggleTheme");
const body = document.body;
const swatches = document.querySelectorAll(".swatch");

const savedTheme = localStorage.getItem("quizsphere-theme");
if (savedTheme === "light") {
  body.classList.add("light");
}

function toggleTheme() {
  body.classList.toggle("light");
  localStorage.setItem(
    "quizsphere-theme",
    body.classList.contains("light") ? "light" : "dark"
  );
}

themeToggle?.addEventListener("click", toggleTheme);

swatches.forEach((swatch) => {
  const color = swatch.dataset.color;
  swatch.style.background = color;

  swatch.addEventListener("click", () => {
    document.documentElement.style.setProperty("--primary", color);
  });
});
