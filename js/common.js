$(document).ready(function () {

	$('.list_button').find('button').on('click', function() {
		let _this = $(this),
			_tab_id = _this.attr('data-tabs'),
			_nav_id = _this.attr('data-slider-nav');

		_this.addClass('active').siblings().removeClass('active');

		$(_tab_id).addClass('active').siblings().removeClass('active');
		$(_nav_id).addClass('active').siblings().removeClass('active');

	});

	// fields

	$('select.listivo_field:not(.listivo_select_count)').customSelect();

	$('select.listivo_select_count').customSelect({
		countOn: true
	});
	

	// $('#listivo_price').inputNumber({
	// 	allowMaxNumber: 100,
	// });

	$('.listivo_pay_item input[type="radio"]').on('change', function() {
		let _this = $(this);
		_this.closest('.listivo_pay_item').addClass('listivo_active').siblings().removeClass('listivo_active');
	});

	// accordion

	$('.listivo_accordion_item button').on('click', function() {
		let _this = $(this);

		_this.parent().toggleClass('accordion_active');
	});

	// tooltip

	$('.listivo_tooltip').tooltipster({
		theme: 'tooltipster-borderless',
		side: 'bottom',
		functionPosition: function(instance, helper, position){
          position.coord.top += 0;
          position.coord.left += 24;
          return position;
      }
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
		spaceBetween: 35,
		// loop: true,
		observer: true,
		observeParents: true,
		// centeredSlides: true,
		// centeredSlidesBounds: true,

		breakpoints: {
			2280: {
				slidesPerView: 4,
			},
			2720: {
				slidesPerView: 5,
			}
		},

		pagination: {
			el: '#slider_reviews .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: document.querySelector('.listivo_reviews .slider_arrows-right'),
			prevEl: document.querySelector('.listivo_reviews .slider_arrows-left'),
		},
	});

	const slider_article_main = new Swiper('#slider_article_main', {
		slidesPerView: 1,
		spaceBetween: 35,
		observer: true,
		observeParents: true,
		loop: true,

		pagination: {
			el: '#slider_article_main .swiper-pagination',
			type: 'custom',
			clickable: true,
			renderCustom: function (swiper, current, total) {
				return '<i class="fal fa-camera"></i>&nbsp;&nbsp;' + current + ' / ' + total;
			}
		},
		navigation: {
			nextEl: document.querySelector('#slider_article_main .slider_arrows-right'),
			prevEl: document.querySelector('#slider_article_main .slider_arrows-left'),
		},
	});

	const slider_article_main_full = new Swiper('#slider_article_main_full', {
		slidesPerView: 3,
		// autoHeight: true,
		spaceBetween: 0,
		observer: true,
		observeParents: true,
		resizeObserver: true,
		slidesPerGroup: 1,
		loop: true,
		
		// centerInsufficientSlides: true,
		centeredSlides: true,
		centeredSlidesBounds: true,

		navigation: {
			nextEl: document.querySelector('#slider_article_main_full .slider_arrows-right'),
			prevEl: document.querySelector('#slider_article_main_full .slider_arrows-left'),
		},
	});

	

	const more_from_user = new Swiper('#more_from_user', {
		slidesPerView: 4,
		spaceBetween: 28,
		observer: true,
		observeParents: true,

		navigation: {
			nextEl: document.querySelector('#more_from_user_nav .slider_arrows-right'),
			prevEl: document.querySelector('#more_from_user_nav .slider_arrows-left'),
		},
	});

	const related_article = new Swiper('#related_article', {
		slidesPerView: 4,
		spaceBetween: 28,
		observer: true,
		observeParents: true,

		navigation: {
			nextEl: document.querySelector('#related_article_nav .slider_arrows-right'),
			prevEl: document.querySelector('#related_article_nav .slider_arrows-left'),
		},
	});
	
});