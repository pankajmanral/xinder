// const beincredibleSwiper = new Swiper('.beincredible-swiper',{
//     effect : 'coverflow',
//     slidesPerView : 3,
//     speed : 500,
//     loop : true,
//     spaceBetween : 24,
//     coverflowEffect : {
//         rotate : 0,
//         stretch : 0,
//         depth : 100,
//         modifier : 0.5
//     }
// })

const swiper = new Swiper('.beincredible-swiper', {
    loop: true,
    speed: 500,
    slidesPerView: 3,
    spaceBetween: 24,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})