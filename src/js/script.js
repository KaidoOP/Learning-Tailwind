const htmlElement = document.querySelector("html");
const darkModeBtn = document.querySelector(".darkmode-btn");
const lightModeBtn = document.querySelector(".lightmode-btn");

if (htmlElement.classList.contains("dark")) {
  darkModeBtn.classList.add("hidden");
} else {
  lightModeBtn.classList.add("hidden");
}
darkModeBtn.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");

  darkModeBtn.classList.add("hidden");
  lightModeBtn.classList.remove("hidden");
});

lightModeBtn.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");
  lightModeBtn.classList.add("hidden");
  darkModeBtn.classList.remove("hidden");
});