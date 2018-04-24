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
        overlay = $('.overlay');

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
        overlay = $('.overlay'),
        close = $('.modal_close');

    link.on('click', function(){
        modal.fadeIn();
        overlay.fadeIn();
        return false;
    })

    close.add(overlay).on('click', function(){
        modal.fadeOut();
        overlay.fadeOut();
    })
})

// Модальное окно 2

$(function(){
    var link = $('.modal_2_link'),
        modal = $('.modal_window_2'),
        overlay = $('.overlay'),
        close = $('.modal_close');

    link.on('click', function(){
        modal.fadeIn();
        overlay.fadeIn();
        return false;
    })
    close.add(overlay).on('click', function(){
        modal.fadeOut();
        overlay.fadeOut();
    })
})

// Модальное окно 3

$(function(){
    var modal = $('.modal_window_3'),
        input = modal.find('.modal_input'),
        sendBtn = modal.find('.send_modal'),
        overlay = $('.overlay'),
        close = $('.modal_window_3 .modal_close'),

    close.add(overlay).on('click', function(){
        modal.fadeOut();
        overlay.fadeOut();
    })

    input.on('input', function(){
        var value = $(this).val();
        if (value.length > 3) {
            sendBtn.removeAttr('disabled');
        } else {
            sendBtn.attr('disabled', 'disabled');
        }
    })
})

// Список документов для скачки

$(function(){
    var link = $('#show_documents'),
        ul = $('.documents_list');

    link.on('click', function(){
        ul.slideToggle();
        return false;
    })
})

// Опрос 

$(function(){
    var link = $('.start_test'),
        overlay =$('.overlay'),
        modal = $('.test_modal'),
        email_modal = $('.modal_window_3'),
        next = $('.next_question'),
        question_block = $('.question_block'),
        question = $('.question'),
        check = question.find('input'),
        counter = $('.counter').find('.this'),
        count = 0;

    link.on('click', function(){
        modal.fadeIn();
        overlay.fadeIn();
        return false;
    })

    next.on('click', function(){
        
        if (count < question.length - 1 ) {
            count++;
            counter.text(count + 1);
            question.removeClass('active');
            question.eq(count).addClass('active');
        } else {
            email_modal.fadeIn();
            modal.fadeOut();

        }
        next.attr('disabled', 'disabled');
        return false;
    })

    check.on('change', function(){
        next.removeAttr("disabled")
    })
})