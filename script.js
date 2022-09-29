// =====sideNav
var sideNav = document.querySelector(".navbar");
var menuOpenBtn = document.querySelector(".navbar .bx-menu img");
var CloseOpenBtn = document.querySelector(".nav-links .bx-x img");
var Navlinks = document.querySelector(".nav-links");


menuOpenBtn.addEventListener("click", ()=>{
    Navlinks.style.left = "0";
});
CloseOpenBtn.addEventListener("click", ()=>{
    Navlinks.style.left = "-100%";
});