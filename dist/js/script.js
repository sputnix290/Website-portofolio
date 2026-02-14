const hamburger = document.getElementById("menu");
const navbarList = document.getElementById("navbar-list-js");

hamburger.addEventListener("click", () => {
  navbarList.classList.toggle("navbar-list");
});
