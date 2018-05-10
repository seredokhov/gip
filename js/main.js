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
                items:1
            },
            1200:{
                items:1
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



// Модальное окно опроса

$(function(){
    var link = $('.start_test'),
        overlay =$('.overlay'),
        test_modal = $('.test_modal'),
        next = $('.next_question'),
        prev = $('.prev_question'),
        question_block = $('.question_block'),
        question = $('.question'),
        advice = $('.advice'),   
        check = question.find('input'),
        email_modal = $('.modal_window_3'),
        input = email_modal.find('.modal_input'),
        sendBtn = email_modal.find('.send_modal'),
        test_close = $('.close_btn'),
        email_close = $('.modal_window_3 .modal_close'),
        counter = $('.counter').find('.this'),
        count;

    // По нажатию на ссылку открываем модальное окно теста и обновляем его,
    // если оно уже было открыто ранее
    link.on('click', function(){

        // Активация прокрутки, на случай слишком длинных вопросов
        test_modal.css({'overflow': 'auto'});

        // сброс счетчика и нажатых радиокнопок
        count = 0;
        counter.text(count + 1);
        check.removeAttr("checked");

        // сброс активного вопроса
        next_question();

        // Display по умолчанию
        test_modal.fadeIn();
        email_modal.fadeOut();
        question_block.fadeIn();
        overlay.fadeIn();

        return false;
    })

    // Активация кнопки "далее"
    check.on('change', function(){
        next.removeAttr("disabled");
    })

    // Кнопка "далее"
    next.on('click', function(){

        var currentQuestionCheck;
        next.attr('disabled', 'disabled');
        
        if (count < question.length - 1 ) {
            count++;
            counter.text(count + 1);

            currentQuestionCheck = question.eq(count).find('input');
            currentQuestionCheck.each(function(){
                if( $(this).prop('checked') ) {
                    next.removeAttr("disabled");
                }
            });

            next_question();

        } else {
            question_block.fadeOut(100, function(){

                test_modal.css({'overflow': 'visible'});
                email_modal.fadeIn(100);

            });
        }

        return false;
    })

    // Кнопка "назад"
    prev.on('click', function(){
        if (count > 0) {
            count--;
            counter.text(count + 1);
            next_question();
            next.removeAttr("disabled");
        }
    })

    // Активация следующего вопроса по count
    function next_question() {        
        question.removeClass('active');
        question.eq(count).addClass('active');
        advice.removeClass('active');
        advice.eq(count).addClass('active');
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


/* Анимации */
if($(document).width() > 1200) {
    $(function($) {
        $.fn.animated = function(inEffect) {
            $(this).each(function() {
                var ths = $(this);
                ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
                    if (dir === "down") {
                        ths.addClass(inEffect).css("opacity", "1");
                        setTimeout(function(){                        
                            ths.addClass('ready');
                            ths.on('mouseover', function(){
                                $(this).find('.second_text').stop().fadeIn(150);
                            });
                            ths.on('mouseout', function(){
                                $(this).find('.second_text').stop().fadeOut(150);
                            })
                        }, 1000);
                    };
                }, {
                    offset: "90%"
                });

            });    
        };
    });


    $(function(){    
            $(".point_1").animated("fadeInRight");
            $(".point_2").animated("fadeInLeft");
            $(".point_3").animated("fadeInRight");
            $(".point_4").animated("fadeInDown");
            $(".point_5").animated("fadeInLeft");
            $(".point_6").animated("fadeInRight");
            $(".point_7").animated("fadeInUp");    
    });
}

/*  Инициализация маски */
$(function($){
    $("input[name='phone']").mask("+9(999) 999-9999");
});