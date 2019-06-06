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
		desktopWrapper: '.menu-container .navbar-nav .col-12',
		desktopMethod: 'appendTo',
		breakpoint: 993,
	}).watch()
	var moveNavbarItem = new MappingListener({
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
	// $('header .mobile-navbar .main-nav li').each(function () {
	// 	$(this).find('.btn-dropdown').on('click', function () {
	// 		$(this).parents().find('.nav-content').slideToggle()
	// 	})
	})

	// collapse menu container
	$('.main-nav li:nth-child(2) .btn-dropdown').on('click', function () {
		$('.menu-container .navbar-menu-no-image').slideToggle()
		$('.menu-container .navbar-menu').slideUp()
	})
	// collapse menu container
	$('.main-nav li:nth-child(3) .btn-dropdown').on('click', function () {
		$('.menu-container .navbar-menu').slideToggle()
		$('.menu-container .navbar-menu-no-image').slideUp()
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
	// increment decrement product-quantity
	$('.product-quantity .increment').on('click', function () {
		var value = $(this).siblings('.number').attr('value');
		++value;
		if (value < 99) {
			$(this).siblings('.number').attr('value', value);
			$('.product-quantity .decrement').removeAttr('style')
		} else {
			$(this).css({
				'background': '#F3F4F6',
				'color': '#A4A9AC'
			})
		}
	})
	$('.product-quantity .decrement').on('click', function () {
		var value = $(this).siblings('.number').attr('value');
		--value;
		if (value > 0) {
			$(this).siblings('.number').attr('value', value);
			$('.product-quantity .increment').removeAttr('style')
		} else {
			$(this).css({
				'background': '#F3F4F6',
				'color': '#A4A9AC'
			})
		}
	})
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
	// readmore mo-ta, thong-so
	$('.product-detail-page #mo-ta').each(function () {
		if ($('.product-detail-page #mo-ta').outerHeight() > 500) {
			$('.product-detail-page #mo-ta').css({
				'height': '500px'
			})
			$(this).siblings('.readmore-mo-ta').show()
		}
		if ($('.product-detail-page #mo-ta').outerHeight() < 500) {
			$(this).siblings('.readmore-mo-ta').hide()
		}
	})
	$('.content-container .readmore-mo-ta .btn-readmore').on('click', function () {
		$('.product-detail-page #mo-ta').css({
			'height': 'auto'
		})
		$(this).hide()
	})
	if ($(window).width() < 768) {
		$('.product-detail-page #thong-so').each(function () {
			if ($(this).outerHeight() > 400) {
				$(this).css({
					'height': '400px'
				})
				$(this).siblings('.readmore-thong-so').show()
			}
			if ($(this).outerHeight() < 400) {
				$(this).siblings('.readmore-thong-so').hide()
			}
		})
	}
	$('.content-container .readmore-thong-so .btn-readmore').on('click', function () {
		$('.product-detail-page #thong-so').css({
			'height': 'auto'
		})
		$(this).hide()
	})
	// readmore comment
	if ($('.product-rating .main-content .content-wrap').height() < 55) {
		$('.product-rating .main-content .readmore').hide()
	} else {
		$('.product-rating .main-content .readmore').show()
	}
	$('.product-rating .main-content .readmore').on('click', function () {
		$(this).siblings('.content-wrap').css({
			'height': 'auto'
		})
		$(this).hide()
	})
	//slide-home
	let slideLichSuBottom = new Swiper('.home-slider .bottom-swiper', {
		slidesPerView: 6,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		slideToClickedSlide: true,
		speed: 2000,
		breakpoints: {
			992: {
				slidesPerView: 5,
			},
			768: {
				slidesPerView: 4,
			},
			576: {
				slidesPerView: 3,
			}
		},

	});
	let slideLichSuTop = new Swiper('.home-slider .top-swiper', {
		slidesPerView: 1,
		spaceBetween: 15,
		slideToClickedSlide: true,
		speed: 2000,
		thumbs: {
			swiper: slideLichSuBottom
		},
		pagination: {
			el: '.top-swiper .swiper-pagination',
			type: 'progressbar',
		},
	});
	// home tab 2
	$('.home-tab button').on('click', function () {
		$('.home-tab button').removeClass('active')
		$(this).addClass('active')
		var current = $(this).attr('tab');
		console.log(current);
		$('.product-container .product-item').hide()
		$('.product-container .product-item[tab=' + current + ']').fadeIn()
	})
	//Dang nhap dang ki
	$('.formDN-title a').on('click', function () {
		$('.formDN-title a').removeClass('active')
		$(this).addClass('active')
		var current = $(this).attr('tab');
		console.log(current);
		$('.formDN-content .DN').hide()
		$('.formDN-content .DN[tab=' + current + ']').fadeIn()
	})
	//tao tai khoan success
	$('.btn-TTK ').on('click', function () {
		$('.TTK-cont').addClass('none')
		$('.formDNTC').addClass('show')
		$('.formDN-title').addClass('none')
	})
	//radio-checked
	$('input.radio').on('click', function () {
		var current = $(this).attr('tab');
		console.log(current);
		$('.form-deli').hide()
		$('.form-deli[tab=' + current + ']').fadeIn()
	})
});