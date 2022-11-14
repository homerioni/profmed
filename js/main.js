'use strict'

$(document).ready(function () {

    // Mask
    $('.mask-phone').mask('+7 (999) 999-99-99');

    // Modal
    $('.modal .close').click(function () {
        $('body').removeClass('lock');
        $(this).parents('.modal').fadeOut();
    });
    $('.form-btn').click(function () {
        $(this).parents('.modal').find('input[required]').each(function () {
            if ($(this).val()) {
                $(this).parent().removeClass('error').addClass('ok');
            } else {
                if ($(this).hasClass('mask-phone')) {
                    $(this).attr('placeholder', '+7 (495) 641-64-64').parent().addClass('error').removeClass('ok');
                } else {
                    $(this).parent().addClass('error').removeClass('ok');
                }
            }
        });
        let complete = true;
        $(this).parents('.modal').find('input[required]').each(function () {
            if (!$(this).parent().hasClass('ok')) {
                complete = false;
            }
        });
        if (complete) {
            $(this).parents('.modal').find('.form').hide();
            $(this).parents('.modal').find('.complete').fadeIn();
        }
    });
    $('.modal input[required]').change(function () {
        if ($(this).val()) {
            $(this).parent().removeClass('error').addClass('ok');
        } else {
            if ($(this).hasClass('mask-phone')) {
                $(this).attr('placeholder', '+7 (495) 641-64-64').parent().addClass('error').removeClass('ok');
            } else {
                $(this).parent().addClass('error').removeClass('ok');
            }
        }
    });

    // Modal request
    $('.popup-request').click(function () {
        $('body').addClass('lock');
        $('.modal-request').css('display', 'flex').hide().fadeIn();
    });
    $('.modal-request .close').click(function () {
        setTimeout(() => {
            $('.modal-request input').val('');
            $('.modal-request__form').show();
            $('.modal-request__complete').hide();
            $('.modal-request .mask-phone').attr('placeholder', 'Номер телефона');
            $('.modal-request .modal-request__label input[required]').parent().removeClass('error').removeClass('ok');
        }, 300);
    });

    // Modal help
    $('.popup-help').click(function () {
        $('body').addClass('lock');
        $('.modal-help').css('display', 'flex').hide().fadeIn();
    });
    $('.modal-help .close').click(function () {
        setTimeout(() => {
            $('.modal-help input').val('');
            $('.modal-help__form').show();
            $('.modal-help__complete').hide();
            $('.modal-help .mask-phone').attr('placeholder', 'Номер телефона');
            $('.modal-help .modal-help__label input[required]').parent().removeClass('error').removeClass('ok');
        }, 300);
    });

    // Modal new review
    $('.add-review').click(function () {
        $('body').addClass('lock');
        $('.modal-new-review').css('display', 'flex').hide().fadeIn();
    });
    $('.modal-new-review .close').click(function () {
        setTimeout(() => {
            $('.modal-new-review input').val('');
            $('.modal-new-review__form').show();
            $('.modal-new-review__complete').hide();
            $('.modal-new-review .modal-new-review__label input[required]').parent().removeClass('error').removeClass('ok');
        }, 300);
    });
    $('.modal-new-review__rating svg').click(function () {
        $(this).parent().find('svg').removeClass('active');
        $(this).parent().find('svg:nth-child(-n +'+ ($(this).index() + 1) +')').addClass('active');
        $('.modal-new-review__rating-input').val($(this).index() + 1);
    });

    // Modal licenses
    $('.licenses__item').click(function () {
        licenses_modal_slider.slideTo($(this).index() + 1);
        $('body').addClass('lock');
        $('.modal-licenses').css('display', 'flex').hide().fadeIn();
    });

    // Header
    $('.header__menu-item').children('.sub-list').click(function (e) {
        if ($(window).width() <= 768) {
            e.preventDefault();
            if ($(this).parent().hasClass('active')) {
                setTimeout(() => $(this).parent().css('z-index', '0'), 200);
            } else {
                $(this).parent().css('z-index', '1');
            }
            let subList = $(this).parent().children('.header__menu-sub-list');
            if (subList.height() < $('.header__menu-list').height()) {
                subList.css('height', $('.header__menu-list').height());
            }
            $(this).parent().toggleClass('active')
                .children('.header__menu-sub-list').slideToggle(200);
            $('.header__contacts.mobile').fadeToggle(200);
            $(this).parent().css('transform', 'translateY(calc(-' + $(this).parent().position().top + 'px)');
        }
    });
    $('.header__menu-sub-list .sub-list').click(function (e) {
        e.preventDefault();
        if ($(this).parent().hasClass('active')) {
            setTimeout(() => $(this).parent().css('z-index', '0'), 200);
        } else {
            $(this).parent().css('z-index', '1');
        }
        let subList = $(this).parent().children('.header__menu-sub-list');
        if (subList.height() < $(this).parents('.header__menu-sub-list').height()) {
            subList.css('height', $(this).parents('.header__menu-sub-list').height());
        }
        $(this).parent().toggleClass('active')
            .children('.header__menu-sub-list').slideToggle(200);
        if ($(this).parent().hasClass('active')) {
            $(this).parent().css('transform', 'translateY(calc(-' + $(this).parent().position().top + 'px - 100%)');
        } else {
            $(this).parent().css('transform', 'translateY(0)');
        }
    });
    $('.header__burger-btn').click(function () {
        $('body').toggleClass('lock');
        $(this).toggleClass('active');
        $('.header__menu').slideToggle();
        $('.header__menu-item, .header__menu-sub-item').css('z-index', '0')
            .css('transform', 'translateY(0)').removeClass('active');
        $('.header__menu-sub-list').slideUp(0);
        $('.header__contacts.mobile').fadeIn(0);
    });

    // Footer
    $('.footer__list-title a').click(function (e) {
        e.preventDefault();
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active').next().slideUp();
        } else {
            $('.footer__list-title.active').removeClass('active').next().slideUp();
            $(this).parent().addClass('active').next().slideDown();
        }
    });

    // Prices
    $('.prices__item-title-block').click(function () {
        $(this).toggleClass('active')
            .parent().find('.prices__item-content').slideToggle();
    });

    // Reviews
    $('.reviews__rating').each(function () {
        $(this).find('svg:nth-child(-n + '+ $(this).parents('.reviews__item').attr('rating') +')').addClass('active');
    });
    $('.reviews__item:not(.modal-reviews .reviews__item)').click(function () {
        reviews_modal_slider.slideTo($(this).attr('number'));
        $('body').addClass('lock');
        $('.modal-reviews').css('display', 'flex').hide().fadeIn();
    });

    // Map
    $('.map__form .button').click(function () {
        $('.map__label input[required]').each(function () {
            if ($(this).val()) {
                $(this).parent().removeClass('error').addClass('ok');
            } else {
                if ($(this).hasClass('mask-phone')) {
                    $(this).attr('placeholder', '+7 (495) 641-64-64').parent().addClass('error').removeClass('ok');
                } else {
                    $(this).parent().addClass('error').removeClass('ok');
                }
            }
        });
    });
    $('.map__label input[required]').change(function () {
        if ($(this).val()) {
            $(this).parent().removeClass('error').addClass('ok');
        } else {
            if ($(this).hasClass('mask-phone')) {
                $(this).attr('placeholder', '+7 (495) 641-64-64').parent().addClass('error').removeClass('ok');
            } else {
                $(this).parent().addClass('error').removeClass('ok');
            }
        }
    });

    // Min-clear
    let mc_index = $('.min-clear__item').length;
    $('.min-clear__item').each(function () {
        $(this).css('z-index', mc_index);
        mc_index--;
    });

    // Program
    $('.program__item-title-block').click(function () {
        $(this).toggleClass('active')
            .parent().find('.program__item-content').slideToggle();
    });
    $('.program__list-item-title-box').click(function () {
        if ($(window).width() <= 768) {
            $(this).toggleClass('active')
                .parent().find('.program__sub-list').slideToggle()
        }
    });

    // Hot keys
    let $hot_keys = $('.hot-keys'),
        $footer = $('.footer');
    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = $footer.offset().top

        if (scroll > offset) {
            $hot_keys.addClass('hide');
        } else {
            $hot_keys.removeClass('hide');
        }
    });

});