// Configure com o DDD + número, somente dígitos. Exemplo de formato: 5511999999999.
// Deixe vazio até ter um número autorizado para receber as solicitações.
const WHATSAPP_NUMBER = "";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  navLinks.classList.toggle("open", open);
});
document.querySelectorAll(".nav-link, .nav-cta").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    productCards.forEach(card => {
      const types = card.dataset.types.split(" ");
      card.classList.toggle("is-hidden", filter !== "todos" && !types.includes(filter));
    });
  });
});

const modal = document.getElementById("quote-modal");
const productSelect = document.getElementById("modal-product");
const form = document.getElementById("quote-form");
const feedback = document.getElementById("form-feedback");
document.querySelectorAll(".quote-link").forEach(button => {
  button.addEventListener("click", () => {
    productSelect.value = button.dataset.product;
    feedback.textContent = "";
    modal.showModal();
  });
});
document.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", event => {
  if (event.target === modal) modal.close();
});
form.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = [
    "Olá! Gostaria de solicitar um orçamento.",
    `Nome: ${data.get("nome")}`,
    `Peça: ${data.get("produto")}`,
    `Serviço: ${data.get("servico")}`,
    `Detalhes: ${data.get("descricao")}`
  ].join("\n");

  if (!WHATSAPP_NUMBER) {
    feedback.textContent = "Solicitação preenchida. Para enviar, configure o número de WhatsApp em script.js.";
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  feedback.textContent = "Sua solicitação foi preparada no WhatsApp. Confira a mensagem e toque em enviar por lá.";
});

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  revealElements.forEach(el => observer.observe(el));
} else {
  revealElements.forEach(el => el.classList.add("is-visible"));
}

const topButton = document.getElementById("back-to-top");
const updateTopButton = () => topButton.classList.toggle("visible", window.scrollY > 600);
window.addEventListener("scroll", updateTopButton, { passive: true });
updateTopButton();
topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Realça a seção atualmente visível na navegação.
const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(section => sectionObserver.observe(section));
}
