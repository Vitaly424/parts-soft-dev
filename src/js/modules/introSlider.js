import { Swiper } from 'swiper';
import {
    Navigation,
    Pagination,
    EffectFade,
    Autoplay,
    EffectCreative,
    EffectFlip,
    EffectCards,
    EffectCoverflow,
} from 'swiper/modules';

export const introSlider = () => {
    const swiper = new Swiper('.js-special-offers-slider', {
        modules: [
            Navigation,
            EffectFade,
            EffectFlip,
            EffectCards,
            Autoplay,
            EffectCreative,
            EffectCoverflow,
        ],
        spaceBetween: 20,
        navigation: {
            nextEl: ".js-button-next",
            prevEl: ".js-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            1339: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                freeMode: false,
            },
        },
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 1339) {
            swiper.update()
        }
    })
};


// document.addEventListener('DOMContentLoaded', () => {
//     const quarterSwiper = new Swiper('.js-quarter-slider', {
//         navigation: {
//             prevEl: ".js-button-prev",
//             nextEl: ".js-button-next",
//         },
//         spaceBetween: 24,
//         slidesPerView: 3,
//         watchOverflow: true,
//         loop: true,
//         zoom: {
//             maxRatio: 5,
//             minRatio: 1
//         },
//         breakpoints: {
//             320: {
//                 slidesPerView: 1,
//             },
//             768: {
//                 slidesPerView: 2,
//             },
//             1260: {
//                 slidesPerView: 3,
//             }
//         },
//     })
// });
