$(document).ready(function () {
	// ==================== back 2 top ====================
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
	// ==================== ads ====================
	$('.qc-header .btn-close').on('click', function () {
		// $('.qc-header').remove();
		$('.qc-header').hide('slow', function () {
			$('.qc-header').remove();
		});
	})
	// ==================== header ====================
	$('header .mobile-hamburger').on('click', function () {
		$('header .mobile-hamburger').toggleClass('active')
		$('header .mobile-navbar').toggleClass('active')
	})
	$('header .btn-dropdown').on('click', function () {
		$(this).siblings('.sub-nav').toggleClass('active')
	})
	var moveNavbar = new MappingListener({
		selector: '.navbar-header .main-nav',
		mobileWrapper: '.mobile-nav',
		mobileMethod: 'appendTo',
		desktopWrapper: '.navbar-header .col-12',
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
	$('header .cart').on('click', function () {
		$('header .cart-popup').slideToggle()
	})
	$(window).on('resize', function () {
		if ($(window).width() < 993) {
			$('.bottom-header .col').removeClass('d-flex')
		}
	})
});