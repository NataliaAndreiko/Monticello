let swiper = new Swiper(".start-page__swiper", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    },
    loop: true,
});

var swiper2 = new Swiper(".news__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: true,
});
