var navMain = document.querySelector(".main-nav");
console.log(navMain);
var navToggle = document.querySelector(".main-nav__toggle");
console.log(navMain);

navMain.classList.remove("main-nav--nojs");

if (navMain.classList.contains("main-nav--opened")) {
  navMain.classList.add("main-nav--closed");
  navMain.classList.remove("main-nav--opened");
}
console.log(navMain);

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    console.log(navMain);
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    console.log(navMain);
  }
});
