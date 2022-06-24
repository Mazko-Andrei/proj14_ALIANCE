const popupBtn = document.querySelectorAll(".bg-header__phone_btnMob, .bg-header__phone_btn, .schemeOfWork-card__link");
const submitBtn = document.querySelector(".btn_submit");
const popup1 = document.querySelector("#popup1");
const popup2 = document.querySelector("#popup2");
const closeBtn = document.querySelector(".popup-close");
const closeBtn2 = document.querySelector(".popup-close2");
const popupSubmit = document.querySelector("#popup-submit");


popupBtn.forEach(function(item){
    item.addEventListener("click", function(event){
        event.stopPropagation();
        popup1.style = `
        opacity: 1;
        visibility: visible;
        `;
        body.classList.remove("scroll");
        body.classList.add("no-scroll");
    })
});

closeBtn.addEventListener("click", function(){
    popup1.style = `
        opacity: 0;
        visibility: hidden;
        `;
        body.classList.remove("no-scroll");
});
closeBtn2.addEventListener("click", function(){
    popup2.style = `
        opacity: 0;
        visibility: hidden;
        `;
    body.classList.remove("no-scroll");
});

popupSubmit.addEventListener("click", function(){
    popup1.style = `
    opacity: 0;
    visibility: hidden;
    `;
    popup2.style = `
    opacity: 1;
    visibility: visible;
    `;
});

submitBtn.addEventListener("click", function(){
    popup2.style = `
    opacity: 1;
    visibility: visible;
    `;
});
