// Año automático en el pie de página
document.getElementById("year").textContent = new Date().getFullYear();

// Pequeño efecto al entrar en pantalla.
const revealItems = document.querySelectorAll(
  ".feature-card, .gallery-card, .step, .section-heading"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});
