// =====sideNav
var sideNav = document.querySelector(".navbar"),
    OpenMenuBtn = document.querySelector(".navbar .bx-menu img"),
    CloseMenuBtn = document.querySelector(".nav-links .bx-x img"),
    Navlinks = document.querySelector(".nav-links"),
    BodyEvent = document.querySelector("body");


OpenMenuBtn.addEventListener("click", ()=>{
    Navlinks.style.left = "0"; 
});
CloseMenuBtn.addEventListener("click", ()=>{
    Navlinks.style.left = "-100%";

});

// BodyEvent.addEventListener("click" , e =>{
//     let clickedElm = e.target;
//     if(!clickedElm.classList.contains("bx-x") && !clickedElm.classList.contains("links")){
//         Navlinks.style.left = "-100%";
//     }
// });