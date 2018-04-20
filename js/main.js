// Инициализация слайдера

$(function(){

    var owl = $('.owl-carousel'),
        next = $('.slide_controls').find('a.next'),
        prev = $('.slide_controls').find('a.prev');

    owl.owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1200:{
                items:3
            }
        }
    })

    prev.on('click', function(){
        owl.trigger('prev.owl.carousel');
        return false
    })

    next.on('click', function(){
        owl.trigger('next.owl.carousel');
        return false
    })
})


// Мобильное меню

$(function(){
    var link = $('.menu_link'),
        menu = $('.menu_block'),
        overlay = $('.overlay'),
        close = $('.modal_close');

    link.on('click', function(){
        menu.addClass('open');
        overlay.fadeIn();
        return false;
    })
    overlay.add(menu.find('a')).on('click', function(){
        overlay.fadeOut();
        menu.removeClass('open');
    })
})

// Модальное окно

$(function(){
    var link = $('.modal_link'),
        modal = $('.modal_window'),
        overlay = $('.overlay');

    link.on('click', function(){
        modal.fadeIn();
        overlay.fadeIn();
        return false;
    })
    overlay.add(close).on('click', function(){
        modal.fadeOut();
        overlay.fadeOut();
    })
})