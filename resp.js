burger = document.querySelector(".burger");
header = document.querySelector(".header");
navList = document.querySelector(".nav-list");
// navList.style.display = "none";
header.style.borderBottomRightRadius = "0px";

burger.addEventListener("click", () => {
  header.classList.toggle("header-resp");
  navList.classList.toggle("v-class-resp");
  navList.classList.toggle("hidden");

  if (header.style.borderBottomRightRadius == "0px") {
    header.style.borderBottomRightRadius = "40px";
  } else {
    header.style.borderBottomRightRadius = "0px";
  }
});
