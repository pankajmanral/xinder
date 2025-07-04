document.addEventListener("DOMContentLoaded", () => {

    // category swiper 

    const categorySwiper = new Swiper('.category-card-wrapper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 24,
        breakpoints: {
            0: {
                slidesPerView: 1.4
            },
            525: {
                slidesPerView: 2.5
            },
            768: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 5
            }
        }
    })


    // master piece swiper 

    const masterPieceSwiper = new Swiper('.master-piece-wrapper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 24,
        breakpoints: {
            0: {
                slidesPerView: 1.5
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3.5
            }
        }

    })


    // testimonial swiper 

    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        loop: true,
        grabCursor: true,
        slidesPerView: 1,
        speed: 800,
        // autoplay: {
        //     delay: 1500
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
        // breakpoints: {
        //     0: {
        //         autoplay: {
        //             enabled: true,
        //             disableOnInteraction: false
        //         }
        //     },
        //     991: {
        //         autoplay: {
        //             enabled: false
        //         },
        //         navigation: {
        //             nextEl: '.swiper-button-next',
        //             prevEl: '.swiper-button-prev',
        //         },
        //     }
        // }

    });


    // be incredible swiper

    const beincredibleSwiper = new Swiper('.beincredible-swiper', {
        loop: true,
        grabCursor: true,
        speed: 800,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                centeredSlides: false,
                slidesPerView: 1.2,
                spaceBetween: 24
            },
            991: {
                centeredSlides: true,
                slidesPerView: 3,
            }
        }
    })

});