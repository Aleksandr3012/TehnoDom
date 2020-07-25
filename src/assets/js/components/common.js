$(function () {

	$(document).ready(function () {

		var link = $('.menu-link');
		var link_active = $('.menu-link_active');
		var menu = $('.menu');
		var nav_link = $('.menu a');

		link.click(function () {
			link.toggleClass('menu-link_active');
			menu.toggleClass('menu_active');
		});
		nav_link.click(function () {
			link.toggleClass('menu-link_active');
			menu.toggleClass('menu_active');
		});

	});

	// Маска 
	$("input[type='tel']").attr("pattern","[+]7[ (][0-9]{3}[) ][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

	// Переносим данные из html кнопки в html форму
	var link = $('button[data-popup="true"]'), // при клике на кнопку с data-popup="true"
		formHeaderName = $('.form-header-name'),
		formButtonName = $('.form-button-name');

	link.on('click', function () {
		formHeaderName.text($(this).attr('data-header-name')),
			formButtonName.text($(this).attr('data-button-name'));

	});

	// Переносим данные из html кнопки в html форму
	var link = $('a[data-popup="true"]'), // при клике на кнопку с data-popup="true"
		formHeaderName = $('.form-header-name'),
		formButtonName = $('.form-button-name');

	link.on('click', function () {
		formHeaderName.text($(this).attr('data-header-name')),
			formButtonName.text($(this).attr('data-button-name'));

	});

	// запускаем модалочку
	$('body').on('click', '.js-modal-btn', function (e) {
		e.preventDefault();

		var that = $(this);
		var href = that.attr('href');

		var formTitle = that.attr('data-form-title');


		$('input[name="whatever"]').val(formTitle);


		$('input[type=text]').focus();

		$.fancybox.open({
			src: href,
			type: 'inline',

			opts: {
				margin: [44, 0],
				beforeShow: function () {

				},
				afterClose: function () {

				},

				baseClass: ''
			}

		});


	}); // запуск модалки закончен

	$('#js-main-slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		adaptiveHeight: true,
		arrows: true,
		prevArrow: '<img class="main-slider__arrows main-slider__arrow-left" src="../assets/i/left-arrow.svg" >',
		nextArrow: '<img class="main-slider__arrows main-slider__arrow-right" src="../assets/i/right-arrow.svg" >'
	});

	// Плавный скролл от меню к блокам с учетом фиксации меню
	$("#js-top-menu").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id = $(this).attr('href'),
			navH = $('#js-nav-container').innerHeight(),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		top = top - navH;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top }, 1500);

	});
	// Плавный скролл от мобильного меню к блокам с учетом фиксации меню
	$("#js-mobile-menu").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id = $(this).attr('href'),
			navH = $('#js-header').innerHeight(),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		top = top - navH;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top }, 0);
		//$('body,html').scrollTop().top;
	});

	// Fixed menu when scroll
	var headerH = $('#js-header').height(),
		headerS = $('#main-slider').height(),
		navH = $('#js-nav-container').innerHeight(),
		headerSumm = headerS + headerH,
		headerSumm = headerSumm - navH;


	$(document).on("scroll", function () {
		var documentScroll = $(this).scrollTop();
		if (documentScroll > headerSumm) {
			$('#js-nav-container').addClass('nav-fixed');
			$('#js-header').css("marginTop", navH);
		} else {
			$('#js-nav-container').removeClass('nav-fixed');
			$('#js-header').removeAttr('style');
		}
	});
	//console.log(headerSumm);

	// Слайдер топ товаров
	$('#top-season__slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		arrows: true,
		prevArrow: '<img class="top-season__arrows top-season__arrow-left" src="../assets/i/left-arrow.svg" >',
		nextArrow: '<img class="top-season__arrows top-season__arrow-right" src="../assets/i/right-arrow.svg" >',
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	// Слайдер с кровлей так же покупают
	$('#upsale__slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		arrows: true,
		prevArrow: '<img class="upsale__arrows upsale__arrow-left" src="../assets/i/left-arrow.svg" >',
		nextArrow: '<img class="upsale__arrows upsale__arrow-right" src="../assets/i/right-arrow.svg" >',
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	// Отзывы 
	$('.reviews__slider-wrapper').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		slidesToShow: 1,
		arrows: true,
		//cssEase: 'linear',
		prevArrow: '<img class="reviews-arrows reviews-arrows__left-arrow" src="../assets/i/rev-left-arrow.svg">',
		nextArrow: '<img class="reviews-arrows reviews-arrows__right-arrow" src="../assets/i/rev-right-arrow.svg">'
	});


	// сертификаты 
	$('.sertificate__slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		arrows: true,
		prevArrow: '<img class="sertificate__arrows sertificate__arrow-left" src="../assets/i/left-arrow.svg">',
		nextArrow: '<img class="sertificate__arrows sertificate__arrow-right" src="../assets/i/right-arrow.svg">',
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	// Галерея
	$('.gallery-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 8000
	});


	// Мобильное меню


	// Страница Каталог
	// Стили сохранили, как в топ товаров 
	$('#gibkaya__slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		arrows: true,
		prevArrow: '<img class="top-season__arrows top-season__arrow-left" src="../assets/i/left-arrow.svg" >',
		nextArrow: '<img class="top-season__arrows top-season__arrow-right" src="../assets/i/right-arrow.svg" >',
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('#metallocher__slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		arrows: true,
		prevArrow: '<img class="top-season__arrows top-season__arrow-left" src="../assets/i/left-arrow.svg" >',
		nextArrow: '<img class="top-season__arrows top-season__arrow-right" src="../assets/i/right-arrow.svg" >',
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});



	$('#onduvilla__slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		arrows: true,
		prevArrow: '<img class="top-season__arrows top-season__arrow-left" src="../assets/i/left-arrow.svg" >',
		nextArrow: '<img class="top-season__arrows top-season__arrow-right" src="../assets/i/right-arrow.svg" >',
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('#ondulin__slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		arrows: true,
		prevArrow: '<img class="top-season__arrows top-season__arrow-left" src="../assets/i/left-arrow.svg" >',
		nextArrow: '<img class="top-season__arrows top-season__arrow-right" src="../assets/i/right-arrow.svg" >',
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('.accardionButton-js').click(function(){
		$(this).toggleClass('active').parents('.catalogItem__content').find('.accardionToggleBlock-js').slideToggle();
	});
	var slickPrev = '<button class="slick-arrow slick-prev"><svg class="icon-prev"><use xlink:href="sprites/sprite.svg#icon-prev"></use></svg></button>',
			slickNext = '<button class="slick-arrow slick-next"><svg class="icon-next"><use xlink:href="sprites/sprite.svg#icon-next"></use></svg></button>';

	
	$('.slick-catalog-js').slick({
		infinite: true,
		speed: 300,
		autoplaySpeed: 6000,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev-cat"></button>',
		nextArrow: '<button type="button" class="slick-next-cat"></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
		customPaging: function(slider, i) {
				return '<img class="res-i" src="' + slider.$slides.eq(i).find('.slick-catalog__slick-slide').data('thumb') + '" alt=""/>';
		}
	});

	$('#braas__slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		arrows: true,
		prevArrow: '<img class="top-season__arrows top-season__arrow-left" src="../assets/i/left-arrow.svg" >',
		nextArrow: '<img class="top-season__arrows top-season__arrow-right" src="../assets/i/right-arrow.svg" >',
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('#luxard__slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		arrows: true,
		prevArrow: '<img class="top-season__arrows top-season__arrow-left" src="../assets/i/left-arrow.svg" >',
		nextArrow: '<img class="top-season__arrows top-season__arrow-right" src="../assets/i/right-arrow.svg" >',
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('#ploskaya__slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		arrows: true,
		prevArrow: '<img class="top-season__arrows top-season__arrow-left" src="../assets/i/left-arrow.svg" >',
		nextArrow: '<img class="top-season__arrows top-season__arrow-right" src="../assets/i/right-arrow.svg" >',
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('#komplektacii__slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		arrows: true,
		prevArrow: '<img class="top-season__arrows top-season__arrow-left" src="../assets/i/left-arrow.svg" >',
		nextArrow: '<img class="top-season__arrows top-season__arrow-right" src="../assets/i/right-arrow.svg" >',
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	/* Плавный скролл наверх
	================================================*/
	var top_show = 200; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
	var delay = 1000; // Задержка прокрутки
	$(window).scroll(function () { // При прокрутке попадаем в эту функцию
		/* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
		if ($(this).scrollTop() > top_show) $('#scroll-to-top').fadeIn();
		else $('#scroll-to-top').fadeOut();
	});
	$('#scroll-to-top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
		/* Плавная прокрутка наверх */
		$('body, html').animate({
			scrollTop: 0
		}, delay);
	});



});
