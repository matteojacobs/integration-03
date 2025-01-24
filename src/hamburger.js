

// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
hamburger.classList.remove("no-js")
const navList = document.querySelector(".hero__navigation--list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger--active");
  navList.classList.toggle("hero__navigation--list--active");
});

// Close menu when clicking outside on mobile
document.addEventListener("click", (e) => {
  if (window.innerWidth > 48 * 16) return;
  if (!e.target.closest(".hero__navigation")) {
    hamburger.classList.remove("hamburger--active");
    navList.classList.remove("hero__navigation--list--active");
  }
});

// Close menu when resizing to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 48 * 16) {
    hamburger.classList.remove("hamburger--active");
    navList.classList.remove("hero__navigation--list--active");
  }
});



