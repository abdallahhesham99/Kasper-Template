const toggleButton = document.querySelector(".toggle__menu");
const navMenu = document.querySelector(".nav__links");

toggleButton.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});
