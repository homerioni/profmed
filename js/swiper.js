// Пересчет rem в px для swiper
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/375) * (0.1 * $(window).width()) * rem;
    }
}

const intro_slider = new Swiper('.intro__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: rem(34),

    pagination: {
        el: '.intro .slider-nav__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
    },

    navigation: {
        nextEl: '.intro .next',
        prevEl: '.intro .prev',
    },

    autoplay: {
        delay: 7000,
    },
});

const advantages_slider = new Swiper('.advantages__slider', {
    direction: 'horizontal',

    breakpoints: {
        0: {
            slidesPerView: 1.3,
            spaceBetween: rem(2),
            loop: true,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: rem(2.4),

            grid: {
                rows: 2,
            },
        },
    },

    pagination: {
        el: '.advantages .slider-nav__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
    },

    navigation: {
        nextEl: '.advantages .next',
        prevEl: '.advantages .prev',
    },

    autoplay: {
        delay: 7000,
    },
});

const video_slider = new Swiper('.video__slider', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1.3,
            spaceBetween: rem(2),
        },
        769: {
            slidesPerView: 3,
            spaceBetween: rem(2.4),
        },
    },

    pagination: {
        el: '.video .slider-nav__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
    },

    navigation: {
        nextEl: '.video .next',
        prevEl: '.video .prev',
    },
});

const team_slider = new Swiper('.team__slider:not(.team__slider--page)', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1.3,
            spaceBetween: rem(2),
        },
        769: {
            slidesPerView: 4,
            spaceBetween: rem(2.4),
        },
    },

    pagination: {
        el: '.team .slider-nav__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
    },

    navigation: {
        nextEl: '.team .next',
        prevEl: '.team .prev',
    },
});

const team_page_slider = new Swiper('.team__slider--page', {
    direction: 'horizontal',

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: rem(2),

            grid: {
                rows: 5,
            },
        },
        769: {
            slidesPerView: 3,
            spaceBetween: rem(2.4),

            grid: {
                rows: 3,
            },
        },
    },

    pagination: {
        el: '.team .slider-nav__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
    },

    navigation: {
        nextEl: '.team .next',
        prevEl: '.team .prev',
    },
});

const rooms_slider = new Swiper('.rooms__slider', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1.3,
            spaceBetween: rem(2),
        },
        769: {
            slidesPerView: 2,
            spaceBetween: rem(2.4),
        },
    },

    pagination: {
        el: '.rooms .slider-nav__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
    },

    navigation: {
        nextEl: '.rooms .next',
        prevEl: '.rooms .prev',
    },
});

const history_slider = new Swiper('.history__slider', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1.3,
            spaceBetween: rem(2),
        },
        769: {
            slidesPerView: 2,
            spaceBetween: rem(2.4),
        },
    },

    pagination: {
        el: '.history .slider-nav__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
    },

    navigation: {
        nextEl: '.history .next',
        prevEl: '.history .prev',
    },
});

$('.reviews__slider, .reviews__cards').each(function () {
    let i = 1;

    $(this).find('.reviews__item').each(function () {
        $(this).attr('number', i);
        i++;
    });
});
const reviews_desk_slider = new Swiper('.reviews__slider.desktop', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: rem(2.4),

    pagination: {
        el: '.reviews__slider-nav .slider-nav__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
    },

    navigation: {
        nextEl: '.reviews__slider-nav .next',
        prevEl: '.reviews__slider-nav .prev',
    },
});

const reviews_mob_slider = new Swiper('.reviews__slider.mobile', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: rem(2),

    grid: {
        rows: 2,
    },
});

const reviews_modal_slider = new Swiper('.modal-reviews__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: rem(2.4),

    pagination: {
        el: '.modal-reviews .slider-nav__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
    },

    navigation: {
        nextEl: '.modal-reviews .next',
        prevEl: '.modal-reviews .prev',
    },
});

const licenses_modal_slider = new Swiper('.modal-licenses__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: rem(2.4),

    pagination: {
        el: '.modal-licenses .slider-nav__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
    },

    navigation: {
        nextEl: '.modal-licenses .next',
        prevEl: '.modal-licenses .prev',
    },
});