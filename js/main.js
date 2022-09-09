// ======================== Change navbar color on scroll ==============
window.addEventListener("scroll", changeBgColor);
function changeBgColor() {
  const navbar = document.getElementById("navbar");
  let scrollValue = window.scrollY;
  if (scrollValue < 150) {
    navbar.classList.remove("bg-colo__onscroll");
  } else {
    navbar.classList.add("bg-colo__onscroll");
  }
}
// =====================================================================
// ======================== open nav menu ==============================
const toggleButton = document.querySelector(".toggle__menu");
const navMenu = document.querySelector(".nav__links");

toggleButton.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});
// =====================================================================
// ======================== change navs color on scroll ================
const sections = document.querySelectorAll("section");
let allNavLink = document.querySelectorAll(".nav__link a");
console.log(allNavLink);
window.addEventListener("scroll", activeLink);
function activeLink() {
  let scrollPosition = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * "0.25" &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * "0.25"
    ) {
      let currentId = section.attributes.id.value;
      removeAllActiveClass();
      addActiveClass(currentId);
    }
  });
}

let removeAllActiveClass = function () {
  allNavLink.forEach((el) => {
    el.classList.remove("active");
  });
};

let addActiveClass = function (id) {
  console.log(id);
  let selector = `.nav__link a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};
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
// ======================== Portfolio section ==========================
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
