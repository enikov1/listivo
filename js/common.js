$(document).ready(function () {

	$('.list_button').find('button').on('click', function() {
		let _this = $(this),
			_tab_id = _this.attr('data-tabs'),
			_nav_id = _this.attr('data-slider-nav');

		_this.addClass('active').siblings().removeClass('active');

		$(_tab_id).addClass('active').siblings().removeClass('active');
		$(_nav_id).addClass('active').siblings().removeClass('active');

	});

	// swiper

	const featured_slider1 = new Swiper('#featured_slider', {
		slidesPerView: 4,
		spaceBetween: 28,
		observer: true,
		observeParents: true,
		onSlideChangeStart:function() {

		},
		navigation: {
			nextEl: document.querySelector('#featured_slider_nav1 .slider_arrows-right'),
			prevEl: document.querySelector('#featured_slider_nav1 .slider_arrows-left'),
		},
	});

	const featured_slider2 = new Swiper('#featured_slider2', {
		slidesPerView: 4,
		spaceBetween: 28,
		observer: true,
		observeParents: true,

		navigation: {
			nextEl: document.querySelector('#featured_slider_nav2 .slider_arrows-right'),
			prevEl: document.querySelector('#featured_slider_nav2 .slider_arrows-left'),
		},
	});

	const featured_slider3 = new Swiper('#featured_slider3', {
		slidesPerView: 4,
		spaceBetween: 28,
		observer: true,
		observeParents: true,

		navigation: {
			nextEl: document.querySelector('#featured_slider_nav3 .slider_arrows-right'),
			prevEl: document.querySelector('#featured_slider_nav3 .slider_arrows-left'),
		},
	});

	const featured_slider4 = new Swiper('#featured_slider4', {
		slidesPerView: 4,
		spaceBetween: 28,
		observer: true,
		observeParents: true,

		navigation: {
			nextEl: document.querySelector('#featured_slider_nav4 .slider_arrows-right'),
			prevEl: document.querySelector('#featured_slider_nav4 .slider_arrows-left'),
		},
	});

	const featured_slider5 = new Swiper('#featured_slider5', {
		slidesPerView: 4,
		spaceBetween: 28,
		observer: true,
		observeParents: true,

		navigation: {
			nextEl: document.querySelector('#featured_slider_nav5 .slider_arrows-right'),
			prevEl: document.querySelector('#featured_slider_nav5 .slider_arrows-left'),
		},
	});


	const reviews_slider = new Swiper('#slider_reviews', {
		slidesPerView: 3,
		spaceBetween: 30,
		// loop: true,
		observer: true,
		observeParents: true,
		// centeredSlides: true,
		// centeredSlidesBounds: true,
		pagination: {
			el: '#slider_reviews .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: document.querySelector('.reviews .slider_arrows-right'),
			prevEl: document.querySelector('.reviews .slider_arrows-left'),
		},
	});
	
});