$(document).ready(function () {
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
	if ($(window).width() < 993) {
		var position = $(window).scrollTop();
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();
			if (scroll < position) {
				console.log('scrollDown');
				$('header .bottom-header').slideDown(400)
			} else {
				console.log('scrollUp');
				$('header .bottom-header').slideUp(400)
			}
			position = scroll;
		});
	}

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

	// product detail page
	var galleryThumbs = new Swiper('.product-detail .gallery-thumbs', {
		slidesPerView: 3,
		loop: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		slideToClickedSlide: true,
		direction: 'vertical',
		speed: 1900,
		breakpoints: {}
	});
	var galleryMain = new Swiper('.product-detail .gallery-main', {
		spaceBetween: 15,
		slideToClickedSlide: true,
		loop: true,
		speed: 1900,
		thumbs: {
			swiper: galleryThumbs
		},
	});

	// fixed header/menu
	$('main').css({
		'padding-top': $('header').outerHeight() + 'px'
	})
});