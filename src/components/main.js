$(document).ready(function () {
	//#region
	// back 2 top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.btn-back2top').fadeIn();
		} else {
			$('.btn-back2top').fadeOut();
		}
	});
	$('.btn-back2top').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});

	// ads
	$('.qc-header .btn-close').on('click', function () {
		// $('.qc-header').remove();
		$('.qc-header').hide('slow', function () {
			$('.qc-header').remove();
		});
	})

	// header
	$('header .mobile-hamburger').on('click', function () {
		$('header .mobile-hamburger').toggleClass('active')
		$('header .mobile-navbar').toggleClass('active')
	})
	var moveNavbar = new MappingListener({
		selector: '.menu-container .main-nav',
		mobileWrapper: '.mobile-nav',
		mobileMethod: 'appendTo',
		desktopWrapper: '.navbar-nav .col-12',
		desktopMethod: 'appendTo',
		breakpoint: 993,
	}).watch()
	var moveLogo = new MappingListener({
		selector: '.bottom-header .logo-wrap .logo',
		mobileWrapper: '.mobile-logo',
		mobileMethod: 'appendTo',
		desktopWrapper: '.bottom-header .logo-wrap',
		desktopMethod: 'appendTo',
		breakpoint: 993,
	}).watch()
	var moveCart = new MappingListener({
		selector: '.bottom-header .cart-wrap .cart',
		mobileWrapper: '.mobile-cart',
		mobileMethod: 'appendTo',
		desktopWrapper: '.bottom-header .cart-wrap',
		desktopMethod: 'appendTo',
		breakpoint: 993,
	}).watch()
	$('header .cart img').on('click', function () {
		$('header .cart-popup').slideToggle()
	})
	$(window).on('resize', function () {
		if ($(window).width() < 993) {
			$('.bottom-header .col').removeClass('d-flex')
		}
	})

	// collapse mobile nav
	$('header .mobile-navbar .main-nav li').each(function () {
		$(this).find('.btn-dropdown').on('click', function () {
			$(this).parents().find('.nav-content').slideToggle()
		})
	})

	// collapse menu container
	$('.menu-container .navbar-nav .btn-dropdown').on('click', function () {
		$('.menu-container .navbar-menu').slideToggle()
	})

	// product detail 
	var productDetailGalleryThumbs = new Swiper('.product-detail .gallery-thumbs .swiper-container', {
		slidesPerView: 3,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		slideToClickedSlide: true,
		direction: 'vertical',
		speed: 1500,
		breakpoints: {
			767: {
				slidesPerView: 4,
				direction: 'horizontal',
			}
		}
	});
	var productDetailGalleryMain = new Swiper('.product-detail .gallery-main .swiper-container', {
		spaceBetween: 15,
		slideToClickedSlide: true,
		speed: 1500,
		navigation: {
			nextEl: '.product-detail .btn-next',
			prevEl: '.product-detail .btn-prev'
		},
		thumbs: {
			swiper: productDetailGalleryThumbs
		},
	});

	// product similar
	var productSimilar = new Swiper('.product-similar .swiper-container', {
		slidesPerView: 5,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		speed: 1500,
		breakpoints: {
			992: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 3,
			},
			576: {
				slidesPerView: 2,
			}
		},
		navigation: {
			nextEl: '.product-similar .btn-prev',
			prevEl: '.product-similar .btn-next'
		},
		pagination: {
			el: '.product-similar .pagination',
			clickable: true,
			bulletClass: 'pagination-item',
			bulletActiveClass: 'active'
		},
	});
	//#endregion

	// product detail full content
	$('.product-full-content .content-tabs .item a').on('click', function (e) {
		$('.product-full-content .content-tabs .item').removeClass('active')
		e.preventDefault()
		const target = $(this).attr('href')
		const position = $(target).offset().top - $('.product-full-content .content-tabs').outerHeight()
		$('html, body').animate({
			scrollTop: position
		}, 1000)
		$(this).parent().addClass('active')
	})
	$('.product-detail-page #mo-ta').each(function () {
		if ($('.product-detail-page #mo-ta').outerHeight() > 500) {
			$('.product-detail-page #mo-ta').css({
				'height': '500px'
			})
			$(this).parents('.content-tabs').siblings('.readmore').show()
		}
		if ($('.product-detail-page #mo-ta').outerHeight() < 500) {
			$('.content-container .readmore').hide()
		}
	})
	$('.content-container .btn-readmore').on('click', function () {
		$('.product-detail-page #mo-ta').css({
			'height': 'auto'
		})
		$(this).hide()
	})

	// readmore comment
	$('.product-rating .main-content .readmore').on('click', function () {
		$(this).siblings('.content-wrap').removeClass('limited')
		$(this).hide()
	})
});