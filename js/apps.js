const menuBtn = document.querySelector(".menu");
const navMenu = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("clicked");
  navMenu.classList.toggle("clicked");
})