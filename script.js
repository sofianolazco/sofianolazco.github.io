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
let currentLang = "es";

langToggle.addEventListener("click", () => {
  const elements = document.querySelectorAll("[data-es]");

  currentLang = currentLang === "es" ? "en" : "es";

  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });

  langToggle.textContent = currentLang === "es" ? "🇬🇧 EN" : "🇪🇸 ES";
});
