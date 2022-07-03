const navButton2 = document.querySelector("#nav-icon2");
const mobileNav = document.querySelector(".mobile-menu");
const logo = document.querySelector(".header-logo");
const logoMob = document.querySelector(".header-logo_mob");
const tel = document.querySelector ('.tel-transform');


navButton2.addEventListener("click", function(event){
    event.stopPropagation();
    toggleMobileNav();
})

function toggleMobileNav(){
    body.classList.toggle("scroll");
    navButton2.classList.toggle("open");
    mobileNav.classList.toggle("mobile-nav-active");
    tel.classList.toggle("hidden");
}