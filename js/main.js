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
// =====================================================================
// ======================== Portfolio section ===============================
const tabs = document.querySelectorAll(".tabs li");
const tabsArr = Array.from(tabs);

const divsContent = document.querySelectorAll(".portfolio__content > div");
const divsContentArr = Array.from(divsContent);

//loop on all tabs buttons
tabsArr.forEach((ele) => {
  //when click on any button
  ele.addEventListener("click", function (e) {
    //remove all active class from all buttons
    tabsArr.forEach((ele) => {
      ele.classList.remove("active");
    });
    //add active class to current target button
    e.currentTarget.classList.add("active");

    //loop on all divs to make all divs content hidden
    divsContentArr.forEach((div) => {
      div.style.display = "none";
    });

    //get current target dataset and make it display block
    document.querySelector(e.currentTarget.dataset.content).style.display =
      "block";
  });
});
// =====================================================================
