let menuOpen = document.querySelector(".menu-toggle");
let menuWrapper = document.querySelector(".menu");

menuOpen.addEventListener("click", function () {
  menuOpen.classList.toggle("bx-x");
  menuWrapper.classList.toggle("active");
});
