const languageButtons = document.querySelectorAll("[data-set-language]");

function setLanguage(language) {
  document.documentElement.lang = language;
  document.title = language === "ja" ? "室谷 優 | Product Engineer" : "Yu Murotani | Product Engineer";

  languageButtons.forEach((button) => {
    const isActive = button.dataset.setLanguage === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("portfolio-language", language);
  } catch {
    // The language switch still works when storage is unavailable.
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.setLanguage));
});

let savedLanguage;
try {
  savedLanguage = localStorage.getItem("portfolio-language");
} catch {
  savedLanguage = null;
}

if (savedLanguage === "en") {
  setLanguage("en");
}

document.querySelector("#current-year").textContent = new Date().getFullYear();
