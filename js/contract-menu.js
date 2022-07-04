// всплывающее меню "Контрактное производство"
const linkMenu = document.querySelector("#contract-menu");
const menu = document.querySelector(".contract-menu");
const body = document.body;

linkMenu.addEventListener("mousemove", function(e){
    e.stopPropagation();
    menu.classList.add("active");
})
linkMenu.addEventListener("mouseout", function(e){
    e.stopPropagation();
    menu.classList.remove("active");
})
window.addEventListener("click", function(){
    if (menu.classList.contains('active')){
        menu.classList.toggle("active");
    }
})
menu.addEventListener('click', function(event){
    event.stopImmediatePropagation();
})




