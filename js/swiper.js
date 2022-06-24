
const slideMainBg = document.querySelectorAll(".slide-main_bg");

if(slideMainBg.length>0){
new Swiper('.slide-main_bg', {
    freeMode: true,
    simulateTouch: false,
    navigation: {
        nextEl: '.main-bg-arrow_right',
        prevEl: '.main-bg-arrow_left'
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        425: {
            slidesPerView: 1.4,
        },
        600: {
            slidesPerView: 2,
        },
        860: {
            slidesPerView: 3,
        },
        1250: {
            slidesPerView: 4,
        }
    },
});
};

const slideSchemeOfWork = document.querySelectorAll(".slide-schemeOfWork");
if(slideSchemeOfWork.length>0){
new Swiper('.slide-schemeOfWork', {
    freeMode: true,
    simulateTouch: false,      

    navigation: {
        nextEl: '.schemeOfWork-card_right',
        prevEl: '.schemeOfWork-card_left'
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        425: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 23,
        },
        1024: {
            slidesPerView: 3,
        }
    },
});
};

const blogContainer = document.querySelectorAll(".blog-container");
if(blogContainer.length>0){
new Swiper('.blog-container', {
    slidesPerView: 1.9,
    freeMode: true,
    simulateTouch: false,      

    navigation: {
        nextEl: '.blog-arrow_right',
        prevEl: '.blog-arrow_left',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        425: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        }
    },
});
};

const aboutResearchContainer = document.querySelectorAll(".about-research-container");
if(aboutResearchContainer.length>0){
new Swiper('.about-research-container', {
    initialSlide: 1,
    effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
    
    navigation: {
        nextEl: '.blog-arrow_right',
        prevEl: '.blog-arrow_left',
    },
});
};

const blogSlider = document.querySelectorAll(".blog-slider_container");
console.log(blogSlider);
if(blogSlider.length>0){
new Swiper('.blog-slider_container', {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    simulateTouch: false,     
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        1024: {
            slidesPerView: 2,
        }
    },
    navigation: {
        nextEl: '.blog-arrow_right',
        prevEl: '.blog-arrow_left',
    },
});
};