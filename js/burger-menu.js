
const navButton = document.querySelector("#nav-icon1");
const mobileNav = document.querySelector(".mobile-menu");
const logo = document.querySelector(".header-logo");
const logoMob = document.querySelector(".header-logo_mob");
const tel = document.querySelector ('.tel-transform');



// Клик по кнопке
navButton.addEventListener("click", function(event){
    event.stopPropagation();
    toggleMobileNav();
    toggleLogo();
})

// // Клик по окну за пределами навигации
window.addEventListener("click", function(){
    if(body.classList.contains('scroll')){
        toggleMobileNav();
        toggleLogo();
    }
})
// Останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener('click', function(event){
    event.stopImmediatePropagation();
})



function toggleMobileNav(){
    body.classList.toggle("scroll");
    navButton.classList.toggle("open");
    logo.classList.toggle("hidden");
    mobileNav.classList.toggle("mobile-nav-active");
    tel.classList.toggle("hidden");
}

function toggleLogo() {
    if (navButton.classList.contains("open")){
        logoMob.classList.remove("hidden");
    } else {
        logoMob.classList.add("hidden");
    }
}