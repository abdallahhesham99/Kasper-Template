const toggleButton = document.querySelector(".toggle__menu");
const navMenu = document.querySelector(".nav__links");

toggleButton.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});
// =====================================================================
// ======================== Home section ===============================
const swiper = new Swiper(".swiper", {
  loop: false,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
