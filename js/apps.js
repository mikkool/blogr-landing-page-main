const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("clicked");
  console.log("clicked")
})