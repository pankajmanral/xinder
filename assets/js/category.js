const categorySwiper = new Swiper('.category-card-wrapper',{
    loop : true,
    spaceBetween : 24,
    breakpoints : {
        0 : {
            slidesPerView : 1.4
        },
        525 : {
            slidesPerView : 2.5
        },
        768 : {
            slidesPerView : 3
        },
        1024 : {
            slidesPerView : 5
        }
    }
})