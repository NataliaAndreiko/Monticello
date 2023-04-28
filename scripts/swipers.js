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
