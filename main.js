// Menu button toggle functionality
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const groomingButton = document.getElementById('grooming-modal-btn');
const groomingCard = document.getElementById('grooming-modal');
const closeModal = document.getElementById("close-modal");

groomingButton.addEventListener("click", (event) => {
  event.preventDefault();
  groomingCard.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  groomingCard.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === groomingCard) {
    groomingCard.style.display = "none";
  }
});

const faq = document.querySelector(".faq__grid");

faq.addEventListener("click", (e) => {
  const target = e.target;
  const faqCard = target.closest(".faq__card");

  if (
    faqCard &&
    (target.classList.contains("sample") ||
      target.classList.contains("faq__header") ||
      target.classList.contains("ri-arrow-down-s-fill"))
  ) {
    const isActive = faqCard.classList.contains("active");

    Array.from(faq.children).forEach((item) => {
      item.classList.remove("active");
    });
    if (!isActive) {
      faqCard.classList.add("active");
    }
  }
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .header__flex", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".faq__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".article__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
