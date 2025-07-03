const masterPieceSwiper = new Swiper('.master-piece-wrapper', {
    loop: true,
    spaceBetween: 24,
    breakpoints : {
        0 : {
            slidesPerView : 1
        },
        768 : {
            slidesPerView : 2
        },
        1024 : {
            slidesPerView : 3.5
        }
    }
    
})