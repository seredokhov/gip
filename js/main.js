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



// Опрос 

$(function(){
    var link = $('.start_test'),
        overlay =$('.overlay'),
        test_modal = $('.test_modal'),
        next = $('.next_question'),
        question_block = $('.question_block'),
        question = $('.question'),     
        check = question.find('input'),
        email_modal = $('.modal_window_3'),
        input = email_modal.find('.modal_input'),
        sendBtn = email_modal.find('.send_modal'),
        counter = $('.counter').find('.this'),
        count,
        test_close = $('.close_btn'),
        email_close = $('.modal_window_3 .modal_close');;

    // По нажатию на ссылку открываем модальное окно и обновляем его,
    // если оно уже было открыто ранее
    link.on('click', function(){

        count = 0;
        counter.text(count + 1);
        check.removeAttr("checked");

        next_question();       

        test_modal.fadeIn();
        email_modal.fadeOut();
        question_block.fadeIn();
        overlay.fadeIn();

        return false;
    })

    next.on('click', function(){
        
        if (count < question.length - 1 ) {
            count++;
            counter.text(count + 1);
            next_question();
        } else {
            email_modal.fadeIn();
            question_block.fadeOut();

        }
        next.attr('disabled', 'disabled');
        return false;
    })

    // Активация кнопки "далее"
    check.on('change', function(){
        next.removeAttr("disabled")
    })

    // Следующий вопрос
    function next_question() {        
        question.removeClass('active');
        question.eq(count).addClass('active');
    }

    // Валидация формы ввода, чтобы не отправить пустое поле
    input.on('input', function(){
        var value = $(this).val();
        if (value.length > 3) {
            sendBtn.removeAttr('disabled');
        } else {
            sendBtn.attr('disabled', 'disabled');
        }
    })

    // Закрытие модального окна по нажатию на разные элементы
    test_close.add(overlay).add(email_close).on('click', function(){
        test_modal.fadeOut();
        overlay.fadeOut();        
        return false;
    })
})

// Выпадающий Список документов для скачки

$(function(){
    var link = $('#show_documents'),
        ul = $('.documents_list');

    link.on('click', function(){
        ul.slideToggle();
        return false;
    })
})


// Выпадающий Список доп опций

$(function(){
    var link = $('.more_options_link'),
        ul = $('.more_option_list');

    link.on('click', function(){
        ul.fadeToggle(100);
        return false;
    })
})