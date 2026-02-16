// 🌙 Toggle modo oscuro
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkToggle.textContent = "☀️";
  } else {
    darkToggle.textContent = "🌙";
  }
});


// ✨ Animación al hacer scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});


// 🌍 Cambio de idioma
const langToggle = document.getElementById("langToggle");
const cvButton = document.getElementById("cvButton");

let currentLang = "es";

// 👉 Función para aplicar idioma
function applyLanguage(lang) {
  const elements = document.querySelectorAll("[data-es]");

  elements.forEach(el => {
    const translation = el.getAttribute(`data-${lang}`);
    if (translation) {
      el.textContent = translation;
    }
  });

  // 👉 Cambiar archivo del CV según idioma
  if (lang === "es") {
    cvButton.href = "CV_Sofia_Nolazco_ES.pdf";
  } else {
    cvButton.href = "CV_Sofia_Nolazco_EN.pdf";
  }
}


// 👉 Cargar español automáticamente al entrar
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage("es");
  langToggle.textContent = "🇬🇧 EN";
});


// 👉 Toggle de idioma al hacer click
langToggle.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";

  applyLanguage(currentLang);

  langToggle.textContent = currentLang === "es" ? "🇬🇧 EN" : "🇪🇸 ES";
});


