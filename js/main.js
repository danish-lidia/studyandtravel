//@prepros-append jq-start.js
//@prepros-append sliders.js
//@prepros-append responsive.js
//@prepros-append forms.js
//@prepros-append script.js
//@prepros-append map.js
//@prepros-append jq-end.js

$(document).ready(function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");
		var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
	function isIE() {
		ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
		return is_ie; 
	}
	if(isIE()){
		$('body').addClass('ie');
	}
	if(isMobile.any()){
		$('body').addClass('touch');
	}
//$(window).load(function() {
	//SLIDERS
	if($('.direction-body-slider').length>0){
		$('.direction-body-slider').slick({
			autoplay: true,
			//infinite: false,
			dots: true,
			arrows: false,
			accessibility:false,
			slidesToShow:4,
			slidesToScroll: 3,
			autoplaySpeed: 3000,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			nextArrow:'<button type="button" class="slick-next"></button>',
			prevArrow:'<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 1292,
				settings: {
					slidesToShow:3,
					slidesToScroll: 1,
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow:2,
					slidesToScroll: 1,
				}
			},{
				breakpoint: 767,
				settings: {
					slidesToShow:1,
					slidesToScroll: 1,
				}
			}]
		});
	}

	if($('.popular-school-body-slider').length>0){
		$('.popular-school-body-slider').slick({
			autoplay: true,
			//infinite: false,
			dots: true,
			arrows: false,
			accessibility:false,
			slidesToShow:1,
			slidesToScroll: 1,
			autoplaySpeed: 3000,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			nextArrow:'<button type="button" class="slick-next"></button>',
			prevArrow:'<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 1292,
				settings: {
					slidesToShow:3,
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow:2,
				}
			},{
				breakpoint: 767,
				settings: {
					slidesToShow:1,
				}
			}]
		});
	}

	if($('.holidays-slider').length>0){
		$('.holidays-slider').slick({
			autoplay: true,
			//infinite: false,
			dots: true,
			arrows: false,
			accessibility:false,
			slidesToShow:2,
			slidesToScroll: 2,
			autoplaySpeed: 3000,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			nextArrow:'<button type="button" class="slick-next"></button>',
			prevArrow:'<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 1292,
				settings: {
					slidesToShow:1,
					slidesToScroll: 1,
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow:1,
					slidesToScroll: 1,
				}
			},{
				breakpoint: 767,
				settings: {
					slidesToShow:1,
					slidesToScroll: 1,
				}
			}]
		});
	}

	if($('.visa-body-slider').length>0){
		$('.visa-body-slider').slick({
			autoplay: true,
			//infinite: false,
			dots: false,
			arrows: false,
			accessibility:false,
			slidesToShow:4,
			slidesToScroll: 1,
			autoplaySpeed: 3000,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			nextArrow:'<button type="button" class="slick-next"></button>',
			prevArrow:'<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 1292,
				settings: {
					slidesToShow:3,
					slidesToScroll: 1,
					dots: true,
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow:2,
					slidesToScroll: 2,
					dots: true,
				}
			},{
				breakpoint: 576,
				settings: {
					slidesToShow:1,
					slidesToScroll: 1,
					dots: true,
				}
			}]
		});
	}


	if($('.newsmodule-slider').length>0){
		$('.newsmodule-slider').slick({
			//autoplay: true,
			//infinite: false,
			fade:true,
			dots: false,
			arrows: false,
			accessibility:false,
			slidesToShow:1,
			autoplaySpeed: 3000,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			nextArrow:'<button type="button" class="slick-next fa fa-angle-right"></button>',
			prevArrow:'<button type="button" class="slick-prev fa fa-angle-left"></button>',
			responsive: [{
				breakpoint: 768,
				settings: {	}
			}]
		});
		//Опция
		$('.newsmodule-slider').get(0).slick.options.slidesToShow

		$('.newsmodule-items-item').click(function(event) {
			$('.newsmodule-items-item').removeClass('active');
			$(this).addClass('active');
			$('.newsmodule-slider').slick('goTo',$(this).index());
		});
		$('.newsmodule-navigator-info span').eq(1).html($('.newsmodule-items-item').length);
		
		$('.newsmodule-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.newsmodule-navigator-info span').eq(0).html(currentSlide+1);
		});
		$('.newsmodule-slider').on('afterChange', function(event, slick, currentSlide){
			$('.newsmodule-navigator-info span').eq(0).html(currentSlide+1);
		});
		$('.newsmodule-navigator__arrow.fa-angle-left').click(function(event) {
			$('.newsmodule-slider').slick('slickPrev');
		});
		$('.newsmodule-navigator__arrow.fa-angle-right').click(function(event) {
			$('.newsmodule-slider').slick('slickNext');
		});
	}
//});
//Adaptive functions
$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header() {
		var w=$(window).outerWidth();
		var headerMenu=$('.header-menu-inside');
		var headerMiddleMenu=$('.header-middle-menu');
		var headerCountry=$('.header-top-country');
		var headerLanguage=$('.header-top-language');
		var headerLogin=$('.header-top-login');
		var catalogSort=$('.catalog-page-right-title-form')

	if(w<993){
		if(!catalogSort.hasClass('done')){
			catalogSort.addClass('done').prependTo('.catalog-page-right-filter-mob-sort__block');
		}
		if (!$('.school-page-reviews-comment-social__link').hasClass('done')){
			$('.school-page-reviews-comment-social__link').addClass('done').prependTo('.school-page-reviews-comment-title__mark')
		}
	}else{
		if(catalogSort.hasClass('done')){
			catalogSort.removeClass('done').prependTo('.cell_catalog-page-right-title_sort');
		}
		if($('.school-page-reviews-comment-social__link').hasClass('done')){
			$('.school-page-reviews-comment-social__link').removeClass('done').appendTo('.school-page-reviews-comment-social')
			}
	}
	if(w<767){
		if(!headerMiddleMenu.hasClass('done')){
			headerMiddleMenu.addClass('done').prependTo(headerMenu);
			headerCountry.appendTo('.header-menu-inside-table>.cell_country')
			headerLanguage.appendTo('.header-menu-inside-table>.cell_language')
			headerLogin.appendTo('.header-menu-inside')
		}
		

		if(!$('.popular-school-body-slider').hasClass('slick-initialized')){
						$('.popular-school-body-slider').slick(); 
						$('.popular-school-body-slider').slick('setPosition');
					}

		if ($('.catalog-page-right-title-view__type').length>0) {
			$('.tabs').find('.tab__navitem').removeClass('active')
			$('.tabs').find('.tab__navitem').eq(1).addClass('active')
			$('.tabs').find('.tab__item').removeClass('active')
			$('.tabs').find('.tab__item').eq(1).addClass('active')
		}
	}else{
		if(headerMiddleMenu.hasClass('done')){
			headerMiddleMenu.removeClass('done').appendTo('.header-middle>.container');
			headerCountry.appendTo('.header-top-table>.cell_country')
			headerLanguage.appendTo('.header-top-table>.cell_language')
			headerLogin.appendTo('.header-top-table>.cell_login')
		}
		

		if($('.popular-school-body-slider').hasClass('slick-initialized')){
					$('.popular-school-body-slider').parent().find('.slick-slider').slick('unslick'); 
				}

	}
}
function adaptive_function() {
	adaptive_header();
}
	adaptive_function();
//FORMS
function forms(){
	//SELECT
	if($('select').length>0){
		function selectscrolloptions(){
				var scs=100;
				var mss=50;
			if(isMobile.any()){
				scs=10;
				mss=1;
			}
			var opt={
				cursorcolor:"#2078e5",
				cursorwidth: "3px",
				background: "",
				autohidemode:false,
				bouncescroll:false,
				cursorborderradius: "0px",
				scrollspeed:scs,
				mousescrollstep:mss,
				directionlockdeadzone:0,
				cursorborder: "0px solid #fff",
			};
			return opt;
		}

		function select(){
			$.each($('select'), function(index, val) {
					var ind=index;
				$(this).hide();
				if($(this).parent('.select-block').length==0){
					$(this).wrap("<div class='select-block "+$(this).attr('class')+"-select-block'></div>");
				}else{
					$(this).parent('.select-block').find('.select').remove();
				}
					var milti='';
					var check='';
					var sblock=$(this).parent('.select-block');
					var soptions="<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";
				if($(this).attr('multiple')=='multiple'){
					milti='multiple';
					check='check';
				}
				$.each($(this).find('option'), function(index, val) {
					if($(this).attr('value')!=''){
						soptions=soptions+"<div data-value='"+$(this).attr('value')+"' class='select-options__value_"+ind+" select-options__value value_"+$(this).val()+" "+$(this).attr('class')+" "+check+"'>"+$(this).html()+"</div>";
					}
				});
					soptions=soptions+"</div></div></div>";
				if($(this).attr('data-type')=='search'){
						sblock.append("<div data-type='search' class='select_"+ind+" select"+" "+$(this).attr('class')+"__select "+milti+"'>"+
												"<div class='select-title'>"+
													"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
													"<input data-value='"+$(this).find('option[selected="selected"]').html()+"' class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"' />"+
												"</div>"+
												soptions+
											"</div>");
						$('.select_'+ind).find('input.select-title__value').jcOnPageFilter({
							parentSectionClass:'select-options_'+ind,
							parentLookupClass:'select-options__value_'+ind,
							childBlockClass:'select-options__value_'+ind
						});
				}else{
					sblock.append("<div class='select_"+ind+" select"+" "+$(this).attr('class')+"__select "+milti+"'>"+
											"<div class='select-title'>"+
												"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
												"<div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'>"+$(this).find('option[selected="selected"]').html()+"</div>"+
											"</div>"+
											soptions+
										"</div>");
				}
				if($(this).find('option[selected="selected"]').val()!=''){
					sblock.find('.select').addClass('focus');
				}
				if($(this).attr('data-req')=='on'){
					$(this).addClass('req');
				}
				$(".select_"+ind+" .select-options-scroll").niceScroll('.select-options-list',selectscrolloptions());
			});
		}
			select();

		$('body').on('keyup','input.select-title__value',function() {
			$('.select').not($(this).parents('.select')).removeClass('active').find('.select-options').slideUp(50);
			$(this).parents('.select').addClass('active');
			$(this).parents('.select').find('.select-options').slideDown(50,function() {
				$(this).find(".select-options-scroll").getNiceScroll().resize();
			});
			$(this).parents('.select-block').find('select').val('');
		});
		$('body').on('click','.select',function(){
			if(!$(this).hasClass('disabled')){
				$('.select').not(this).removeClass('active').find('.select-options').slideUp(50);
				$(this).toggleClass('active');
				$(this).find('.select-options').slideToggle(50,function() {
					$(this).find(".select-options-scroll").getNiceScroll().resize();
				});

				//	var input=$(this).parent().find('select');
				//removeError(input);

				if($(this).attr('data-type')=='search'){
					if(!$(this).hasClass('active')){
						searchselectreset();
					}
					$(this).find('.select-options__value').show();
				}
			}
		});
		$('body').on('click','.select-options__value',function() {
			if($(this).parents('.select').hasClass('multiple')){
				if($(this).hasClass('active')){
					if($(this).parents('.select').find('.select-title__value span').length>0){
						$(this).parents('.select').find('.select-title__value').append('<span data-value="'+$(this).data('value')+'">, '+$(this).html()+'</span>');
					}else{
						$(this).parents('.select').find('.select-title__value').data('label',$(this).parents('.select').find('.select-title__value').html());
						$(this).parents('.select').find('.select-title__value').html('<span data-value="'+$(this).data('value')+'">'+$(this).html()+'</span>');
					}
					$(this).parents('.select-block').find('select').find('option').eq($(this).index()+1).prop('selected', true);
					$(this).parents('.select').addClass('focus');
				}else{
					$(this).parents('.select').find('.select-title__value').find('span[data-value="'+$(this).data('value')+'"]').remove();
					if($(this).parents('.select').find('.select-title__value span').length==0){
						$(this).parents('.select').find('.select-title__value').html($(this).parents('.select').find('.select-title__value').data('label'));
						$(this).parents('.select').removeClass('focus');
					}
					$(this).parents('.select-block').find('select').find('option').eq($(this).index()+1).prop('selected', false);
				}
				return false;
			}

			if($(this).parents('.select').attr('data-type')=='search'){
				$(this).parents('.select').find('.select-title__value').val($(this).html());
				$(this).parents('.select').find('.select-title__value').attr('data-value',$(this).html());
			}else{
				$(this).parents('.select').find('.select-title__value').attr('class','select-title__value value_'+$(this).data('value'));
				$(this).parents('.select').find('.select-title__value').html($(this).html());

			}

				$(this).parents('.select-block').find('select').find('option').removeAttr("selected");
			if($.trim($(this).data('value'))!=''){
				$(this).parents('.select-block').find('select').val($(this).data('value'));
				$(this).parents('.select-block').find('select').find('option[value="'+$(this).data('value')+'"]').attr('selected','selected');
			}else{
				$(this).parents('.select-block').find('select').val($(this).html());
				$(this).parents('.select-block').find('select').find('option[value="'+$(this).html()+'"]').attr('selected','selected');
			}


			if($(this).parents('.select-block').find('select').val()!=''){
				$(this).parents('.select-block').find('.select').addClass('focus');
			}else{
				$(this).parents('.select-block').find('.select').removeClass('focus');
			}
			if(!$(this).parents('.select').data('tags')!=""){
				if($(this).parents('.form-tags').find('.form-tags__item[data-value="'+$(this).data('value')+'"]').length==0){
					$(this).parents('.form-tags').find('.form-tags-items').append('<a data-value="'+$(this).data('value')+'" href="" class="form-tags__item">'+$(this).html()+'<span class="fa fa-times"></span></a>');
				}
			}
			$(this).parents('.select-block').find('select').change();

			if($(this).parents('.select-block').find('select').data('update')=='on'){
				select();
			}
		});
		$(document).on('click touchstart',function(e) {
			if (!$(e.target).is(".select *") && !$(e.target).is(".select")) {
				$('.select').removeClass('active');
				$('.select-options').slideUp(50,function() {});
				searchselectreset();
			};
		});
	}

	//FIELDS
	$('input,textarea').focus(function(){
		if($(this).val() == $(this).attr('data-value')){
				$(this).addClass('focus');
				$(this).parent().addClass('focus');
			if($(this).attr('data-type')=='pass'){
				$(this).attr('type','password');
			};
			$(this).val('');
		};
		removeError($(this));
	});
	$('input[data-value], textarea[data-value]').each(function() {
		if (this.value == '' || this.value == $(this).attr('data-value')) {
			this.value = $(this).attr('data-value');
			if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
				$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
			}
		}
		if(this.value!=$(this).attr('data-value') && this.value!=''){
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
				$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
			}
		}

		$(this).click(function() {
			if (this.value == $(this).attr('data-value')) {
				if($(this).attr('data-type')=='pass'){
					$(this).attr('type','password');
				};
				this.value = '';
			};
		});
		$(this).blur(function() {
			if (this.value == '') {
				this.value = $(this).attr('data-value');
					$(this).removeClass('focus');
					$(this).parent().removeClass('focus');
				if($(this).attr('data-type')=='pass'){
					$(this).attr('type','text');
				};
			};
		});
	});
	$('.form-input__viewpass').click(function(event) {
		if($(this).hasClass('active')){
			$(this).parent().find('input').attr('type','password');
		}else{
			$(this).parent().find('input').attr('type','text');
		}
		$(this).toggleClass('active');
	});

	//$('textarea').autogrow({vertical: true, horizontal: false});
	

	//MASKS//
	//'+7(999) 999 9999'
	//'+38(999) 999 9999'
	//'+375(99)999-99-99'
	//'a{3,1000}' только буквы минимум 3
	//'9{3,1000}' только цифры минимум 3
	$.each($('input.phone'), function(index, val) {
		$(this).focus(function(){
			$(this).inputmask('+7(999) 999 9999',{clearIncomplete: true,clearMaskOnLostFocus: true,
				"onincomplete": function(){maskclear($(this));}
			});
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
		});
	});
	$('input.phone').focusout(function(event) {
		maskclear($(this));
	});

	var options = {};
		options.autoUpdateInput = true;
		options.autoApply = true;
		options.inline=true,
		options.alwaysOpen=true,
		//options.singleDatePicker = true;
		options.locale = {
			direction: $('#rtl').is(':checked')?'rtl':'ltr',
			format: 'DD/MM/YYYY',
			separator:'                  ',
			applyLabel:'Применить',
			cancelLabel:'Отмена',
			fromLabel:'с',
			toLabel:'по',
			customRangeLabel: 'Custom',
			daysOfWeek: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			firstDay: 1
		};

	$('input.date').daterangepicker(options,function(start,end,label){
		$('#datafrom').val(start.format('DD/MM/YYYY'));
		$('#datato').val(end.format('DD/MM/YYYY'));
		$('input.date').parent().addClass('active');
	});

jQuery(function($){
	$.datepicker.regional['ru'] = {clearText: 'Очистить', clearStatus: '',
		closeText: 'Закрыть', closeStatus: '',
		prevText: '',  prevStatus: '',
		nextText: '', nextStatus: '',
		currentText: 'Сегодня', currentStatus: '',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
		'Июл','Авг','Сен','Окт','Ноя','Дек'],
		monthStatus: '', yearStatus: '',
		weekHeader: 'Не', weekStatus: '',
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		dayStatus: 'DD', dateStatus: 'D, M d',
		dateFormat: 'dd.mm.yy', firstDay: 1, 
		initStatus: '', isRTL: false};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
});

	$('input.dateone').datepicker({
		dateFormat : "dd/mm/yy",
		onSelect:function(event){
			if($(this).val()!=$(this).attr('data-value') && $(this).val()!=''){
				$(this).addClass('focus');
				$(this).parent().addClass('focus');
				if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
					$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
				}
			}
		}
	});
	$('input.dateone').focus(function(){
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
	});
	$('input.dateone').focusout(function(event) {
		if($(this).val()!=$(this).attr('data-value') && $(this).val()!=''){
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
				$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
			}
		}
	});

	// $('input.dateone').datepicker({
	// 	dateFormat : "dd/mm/yy",
	// 	onSelect:function(event){
	// 		if($(this).val()!=$(this).attr('data-value') && $(this).val()!=''){
	// 			$(this).addClass('focus');
	// 			$(this).parent().addClass('focus');
	// 			if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
	// 				$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
	// 			}
	// 		}
	// 	}
	// });
	

	//CHECK
	$.each($('.check'), function(index, val) {
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});
	$('.check').click(function(event) {
		if(!$(this).hasClass('disable')){
				var target = $(event.target);
			if (!target.is("a")){
				if ($(this).hasClass('active')) {
					$(this).removeClass('active')
				}else{
					if ($(this).hasClass('check_booking')) {
						/*var eq=$(this).index();
						console.log(eq);
						$.each($(this).parents('.options').find('.booking-common-block-transfer-price'), function(index, val) {
							 $(this).children('.check_booking').eq(eq).removeClass('active')
						});*/
						//$(this).parents('.options').find('.check_booking').eq(eq).removeClass('active')
							if( $(this).find("input").prop("checked") ) {
								var chb = $(this);
								$(".booking-common-block-schedule-table_transfer").find(".option").removeClass("active");
								chb.parents(".booking-common-block-schedule-table_transfer").find(".option").addClass("active").find("input").prop("checked", true);
							}
						}
					$(this).addClass('active')
				}
				

				//$(this).toggleClass('active');

				if($(this).hasClass('active')){
					$(this).find('input').prop('checked', true);
				}else{
					$(this).find('input').prop('checked', false);
				}
			}
		}
	});
	//OPTION
	$.each($('.option.active'), function(index, val) {
		$(this).find('input').prop('checked', true);
	});
	$('.option').click(function(event) {
		if(!$(this).hasClass('disable')){
			if($(this).hasClass('active') && $(this).hasClass('order') ){
				$(this).toggleClass('orderactive');
			}
				$(this).parents('.options').find('.option').removeClass('active');
				$(this).toggleClass('active');
				$(this).children('input').prop('checked', true);
		}
	});

	$.each($('.option_1.active'), function(index, val) {
		$(this).find('input').prop('checked', true);
	});
	$('.option_1').click(function(event) {
		if(!$(this).hasClass('disable')){
			if($(this).hasClass('active') && $(this).hasClass('order') ){
				$(this).toggleClass('orderactive');
			}
				$(this).parents('.options_1').find('.option_1').removeClass('active');
				$(this).toggleClass('active');
				$(this).children('input').prop('checked', true);
		}
	});


	//RATING
	$('.rating.edit .star').hover(function() {
			var block=$(this).parents('.rating');
		block.find('.rating__activeline').css({width:'0%'});
			var ind=$(this).index()+1;
			var linew=ind/block.find('.star').length*100;
		setrating(block,linew);
	},function() {
			var block=$(this).parents('.rating');
		block.find('.star').removeClass('active');
			var ind=block.find('input').val();
			var linew=ind/block.find('.star').length*100;
		setrating(block,linew);
	});
	$('.rating.edit .star').click(function(event) {
			var block=$(this).parents('.rating');
			var re=$(this).index()+1;
			block.find('input').val(re);
			var linew=re/block.find('.star').length*100;
		setrating(block,linew);
	});
	$.each($('.rating'), function(index, val) {
			var ind=$(this).find('input').val();
			var linew=ind/$(this).parent().find('.star').length*100;
		setrating($(this),linew);
	});
	function setrating(th,val) {
		th.find('.rating__activeline').css({width:val+'%'});
	}
//RATING-SMALL
	$('.rating-small.edit .star').hover(function() {
			var block=$(this).parents('.rating-small');
		block.find('.rating-small__activeline').css({width:'0%'});
			var ind=$(this).index()+1;
			var linew=ind/block.find('.star').length*100;
		setratingsm(block,linew);
	},function() {
			var block=$(this).parents('.rating-small');
		block.find('.star').removeClass('active');
			var ind=block.find('input').val();
			var linew=ind/block.find('.star').length*100;
		setratingsm(block,linew);
	});
	$('.rating-small.edit .star').click(function(event) {
			var block=$(this).parents('.rating-small');
			var re=$(this).index()+1;
			block.find('input').val(re);
			var linew=re/block.find('.star').length*100;
		setratingsm(block,linew);
	});
	$.each($('.rating-small'), function(index, val) {
			var ind=$(this).find('input').val();
			var linew=ind/$(this).parent().find('.star').length*100;
		setratingsm($(this),linew);
	});
	function setratingsm(th,val) {
		th.find('.rating-small__activeline').css({width:val+'%'});
	}
	//QUANTITY
	$('.quantity__btn').click(function(event) {
			var n=parseInt($(this).parent().find('.quantity__input').val());
		if($(this).hasClass('dwn')){
			n=n-1;
			if(n<1){n=1;}
		}else{
			n=n+1;
		}
			$(this).parent().find('.quantity__input').val(n);
		return false;
	});
	//RANGE
	if($("#range" ).length>0){
		$("#range" ).slider({
			range: true,
			min: 0,
			max: 5000,
			values: [0, 5000],
			slide: function( event, ui ){
				$('#rangefrom').val(ui.values[0]);
				$('#rangeto').val(ui.values[1]);
				$(this).find('.ui-slider-handle').eq(0).html('<span>'+ui.values[0]+'</span>');
				$(this).find('.ui-slider-handle').eq(1).html('<span>'+ui.values[1]+'</span>');
			},
			change: function( event, ui ){
				if(ui.values[0]!=$( "#range" ).slider( "option","min") || ui.values[1]!=$( "#range" ).slider( "option","max")){
					$('#range').addClass('act');
				}else{
					$('#range').removeClass('act');
				}
			}
		});
		$('#rangefrom').val($( "#range" ).slider( "values", 0 ));
		$('#rangeto').val($( "#range" ).slider( "values", 1 ));

		$("#range" ).find('.ui-slider-handle').eq(0).html('<span>'+$( "#range" ).slider( "option","min")+'</span>');
		$("#range" ).find('.ui-slider-handle').eq(1).html('<span>'+$( "#range" ).slider( "option","max")+'</span>');
		
		$( "#rangefrom" ).bind("change", function(){
			if($(this).val()*1>$( "#range" ).slider( "option","max")*1){
				$(this).val($( "#range" ).slider( "option","max"));
			}
			if($(this).val()*1<$( "#range" ).slider( "option","min")*1){
				$(this).val($( "#range" ).slider( "option","min"));
			}
			$("#range" ).slider( "values",0,$(this).val());
		});
		$( "#rangeto" ).bind("change", function(){
			if($(this).val()*1>$( "#range" ).slider( "option","max")*1){
				$(this).val($( "#range" ).slider( "option","max"));
			}
			if($(this).val()*1<$( "#range" ).slider( "option","min")*1){
				$(this).val($( "#range" ).slider( "option","min"));
			}
			$("#range" ).slider( "values",1,$(this).val());
		});
		$("#range" ).find('.ui-slider-handle').eq(0).addClass('left');
		$("#range" ).find('.ui-slider-handle').eq(1).addClass('right');
	}
}
$(window).load(function() {
	forms();
});

//VALIDATE FORMS
$('form button[type=submit]').click(function(){
		var er=0;
		var form=$(this).parents('form');
		var ms=form.data('ms');
	$.each(form.find('.req'), function(index, val) {
		er+=formValidate($(this));
	});
	if(er==0){
		removeFormError(form);
		/*
			var messagehtml='';
		if(form.hasClass('editprofile')){
			var messagehtml='';
		}
		formLoad();
		*/

		//ОПТРАВКА ФОРМЫ
		/*
		function showResponse(html){
			if(!form.hasClass('nomessage')){
				showMessage(messagehtml);
			}
			if(!form.hasClass('noclear')){
				clearForm(form);
			}
		}
		var options={
			success:showResponse
		};
			form.ajaxForm(options);
		

		setTimeout(function(){
			if(!form.hasClass('nomessage')){
				//showMessage(messagehtml);
				showMessageByClass(ms);
			}
			if(!form.hasClass('noclear')){
				clearForm(form);
			}
		},0);

		return false;
		*/
	}else{
		return false;
	}
});
function formValidate(input){
		var er=0;
		var form=input.parents('form');
	if(input.attr('name')=='email' || input.hasClass('email')){
		if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.val()))){
				er++;
			addError(input);
		}else{
			removeError(input);
		}
	}else{
		if(input.val()=='' || input.val()==input.attr('data-value')){
			er++;
			addError(input);
		}else{
			removeError(input);
		}
	}
	if(input.attr('type')=='checkbox'){
		if(input.prop('checked') == true){
			input.removeClass('err').parent().removeClass('err');
		}else{
			er++;
			input.addClass('err').parent().addClass('err');
		}
	}
	if(input.hasClass('name')){
		if(!(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(input.val()))){
				er++;
			addError(input);
		}
	}
	if(input.hasClass('pass-2')){
		if(form.find('.pass-1').val()!=form.find('.pass-2').val()){
			addError(input);
		}else{
			removeError(input);
		}
	}
		return er;
}
function formLoad(){
	$('.popup').hide();
	$('.popup-message-body').hide();
	$('.popup-message .popup-body').append('<div class="popup-loading"><div class="popup-loading__title">Идет загрузка...</div><div class="popup-loading__icon"></div></div>');
	$('.popup-message').addClass('active').fadeIn(300);
}
function showMessageByClass(ms){
	$('.popup').hide();
	$('.popup-message.'+ms).addClass('active').fadeIn(300);
}
function showMessage(html){
	$('.popup-loading').remove();
	$('.popup-message-body').show().html(html);
}
function clearForm(form){
	$.each(form.find('.input'), function(index, val) {
			$(this).removeClass('focus').val($(this).data('value'));
			$(this).parent().removeClass('focus');
		if($(this).hasClass('phone')){
			maskclear($(this));
		}
	});
}
function addError(input){
		input.addClass('err');
		input.parent().addClass('err');
		input.parent().find('.form__error').remove();
	if(input.hasClass('email')){
			var error='';
		if(input.val()=='' || input.val()==input.attr('data-value')){
			error=input.data('error');
		}else{
			error=input.data('error-2');
		}
		if(error!=null){
			input.parent().append('<div class="form__error">'+error+'</div>');
		}
	}else{
		if(input.data('error')!=null && input.parent().find('.form__error').length==0){
			input.parent().append('<div class="form__error">'+input.data('error')+'</div>');
		}
	}
	if(input.parents('.select-block').length>0){
		input.parents('.select-block').parent().addClass('err');
		input.parents('.select-block').find('.select').addClass('err');
	}
}
function addErrorByName(form,input__name,error_text){
		var input=form.find('[name="'+input__name+'"]');
	input.attr('data-error',error_text);
	addError(input);
}
function addFormError(form, error_text){
	form.find('.form__generalerror').show().html(error_text);
}
function removeFormError(form){
	form.find('.form__generalerror').hide().html('');
}
function removeError(input){
	input.removeClass('err');
	input.parent().removeClass('err');
	input.parent().find('.form__error').remove();

	if(input.parents('.select-block').length>0){
		input.parents('.select-block').parent().removeClass('err');
		input.parents('.select-block').find('.select').removeClass('err').removeClass('active');
		//input.parents('.select-block').find('.select-options').hide();
	}
}
function removeFormErrors(form){
	form.find('.err').removeClass('err');
	form.find('.form__error').remove();
}
function maskclear(n){
	if(n.val()==""){
		n.inputmask('remove');
		n.val(n.attr('data-value'));
		n.removeClass('focus');
		n.parent().removeClass('focus');
	}
}
function searchselectreset() {
	$.each($('.select[data-type="search"]'), function(index, val){
			var block=$(this).parent();
			var select=$(this).parent().find('select');
		if($(this).find('.select-options__value:visible').length==1){
			$(this).addClass('focus');
			$(this).parents('.select-block').find('select').val($('.select-options__value:visible').data('value'));
			$(this).find('.select-title__value').val($('.select-options__value:visible').html());
			$(this).find('.select-title__value').attr('data-value',$('.select-options__value:visible').html());
		}else if(select.val()==''){
			$(this).removeClass('focus');
			block.find('input.select-title__value').val(select.find('option[selected="selected"]').html());
			block.find('input.select-title__value').attr('data-value',select.find('option[selected="selected"]').html());
		}
	});
}
if(isMobile.any()){	$('.header-top-country-list>li>a').click(function(event) {		if ($(this).parents('.header-top-country-list').hasClass('active')) {			$(this).parents('.header-top-country-list').removeClass('active')		}else{			$(this).parents('.header-top-country-list').addClass('active')		}		return false;	});	$('.header-top-language-list>li>a').click(function(event) {		if ($(this).parents('.header-top-language-list').hasClass('active')) {			$(this).parents('.header-top-language-list').removeClass('active')		}else{			$(this).parents('.header-top-language-list').addClass('active')		}		return false;	});	}else{// ****** PC		$('.header-top-country-list>li').hover(function() {			$(this).parents('.header-top-country-list').addClass('active')		}, function() {			$(this).parents('.header-top-country-list').removeClass('active')		});		$('.header-top-language-list>li').hover(function() {			$(this).parents('.header-top-language-list').addClass('active')		}, function() {			$(this).parents('.header-top-language-list').removeClass('active')		});	}$(window).load(function() {	if ($('.catalog-page-header-list-active').length>0) {		var ind=Number($('.catalog-page-header-list-active').html());		$('.header-middle-menu>li').eq(ind-1).addClass('active')	}	if ($('.catalog-page-mob-top__bg').length>0) {		$('.header-menu__icon').addClass('black')	}});//Клик вне области$(document).on('click touchstart',function(e) {	if (!$(e.target).is(".header-top-country-list>li *")) {		$('.header-top-country-list').removeClass('active');	};	if (!$(e.target).is(".header-top-language-list>li *")) {		$('.header-top-language-list').removeClass('active');	};});$('.catalog-page-right-filter-mob__switch').click(function(event) {	if ($(this).hasClass('active')) {		$(this).removeClass('active')		$(this).parents('.catalog-page-right-filter-mob').find('.catalog-page-right-filter-mob-sort-checked').slideUp(200)	}else{		$(this).addClass('active')		$(this).parents('.wrapper').find('.catalog-page-left').addClass('active')		$(this).parents('.catalog-page-right-filter-mob').find('.catalog-page-right-filter-mob-sort-checked').slideDown(200)	}});$('.filter__close').click(function(event) {	$(this).parents('.catalog-page-left').removeClass('active')});if ($('.school-page-description-list__more').length>0) {	$('.school-page-description-list__more').click(function(event) {		if ($(this).hasClass('active')) {			$(this).removeClass('active');			$(this).parents('.school-page-description').children('.school-page-description__text').removeClass('active').css({				height:112,			});	}else{		$(this).addClass('active')		$(this).parents('.school-page-description').children('.school-page-description__text').addClass('active').css({			height: ($(this).parents('.school-page-description').find('.school-page-description__text__inside').outerHeight()),		})	}	});}	if( $('.option_booking_zero').length ) {		$('.option_booking_zero').click(function(event) {			$(this).parents('.options').find('.check_booking').removeClass('active')		});	}		// $('.check_booking').click(function(event) {	// 	var eq=$(this).index();	// 	$(this).parents('.options').find('.check_booking').eq(eq).removeClass('active')	// 	if (!$(this).hasClass('active')) {				// 	}	// });	if( $('.booking-common-block-residence-inside').length ) {		$('.booking-common-block-residence-inside input').on("change", function(event) {			if( $(this).prop( "checked" ) ) {				$('.booking-common-block-residence-inside').removeClass('active').find(".booking-common-block-residence-inside-specifications-options").slideUp(300);				$(this).parents('.booking-common-block-residence-inside').addClass("active").find('.booking-common-block-residence-inside-specifications-options').slideDown(300);			}				});	}if ($('.booking-common-block__more').length>0) {	$('.booking-common-block__more').click(function(event) {		if ($(this).hasClass('active')) {			$(this).removeClass('active');			$(this).parents('.booking-common-block').children('.booking-common-block__text').removeClass('active').css({				height:28,			});	}else{		$(this).addClass('active')		$(this).parents('.booking-common-block').children('.booking-common-block__text').addClass('active').css({			height: ($(this).parents('.booking-common-block').find('.booking-common-block__text__inside').outerHeight()),		})	}	});}if ($('.booking-common-block-residence__more').length>0) {	$('.booking-common-block-residence__more').click(function(event) {		if ($(this).hasClass('active')) {			$(this).removeClass('active');			$(this).parents('.booking-common-block-residence-inside').find('.booking-common-block-residence-inside-specifications').slideUp(300)	}else{		$(this).addClass('active')		$(this).parents('.booking-common-block-residence-inside').find('.booking-common-block-residence-inside-specifications').slideDown(300);	}	});}if ($('.booking-common-block-residence__text').length>0) {	$('.booking-common-block-residence__text').click(function(event) {		$(this).parents('.options').find('.booking-common-block-residence-inside').removeClass('active')		$(this).parents('.booking-common-block-residence-inside').addClass('active')	});}if ($('.booking-calc-title-mob__btn').length>0) {	$('.booking-calc-title-mob__btn').click(function(event) {		if ($(this).hasClass('active')) {			$(this).removeClass('active');			$(this).parents('.booking-calc-fix').find('.booking-calc-body').slideUp(300)	}else{		$(this).addClass('active')		$(this).parents('.booking-calc-fix').find('.booking-calc-body').slideDown(300);	}	});}if ($('.daterangepicker').length>0) {	$('.daterangepicker').addClass('asdfasdasdasdasd')	$('.daterangepicker').find('.prev').parent().children('th').eq(2).addClass('test')}//school-galleryif( $('.js-open-school-gallery').length ) {	$("a[rel=school-gallery]").fancybox( {		'padding'			: 0,		'transitionIn'		: 'none',		'transitionOut'		: 'none',		'type'              : 'image',		'changeFade'        : 0,		'titlePosition' 	: 'over'	});	$('.js-open-school-gallery').on('click',function(e){        e.preventDefault();        $.fancybox.open($('a[rel=school-gallery]'));    });}//booking galleriesif( $('.booking-gallery-link').length ) {	$("a.booking-gallery-link").fancybox({		'transitionIn'		: 'none',		'transitionOut'		: 'none',		'titlePosition' 	: 'over',		'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {		    return '<span id="fancybox-title-over">' +  (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';		}	});}//contact usif( $('.js-contact-us').length ) {	$('.js-contact-us').fancybox();}	$(window).load(function() {	if(location.hash){			var hsh=location.hash.replace('#','');		if($('.popup-'+hsh).length>0){			popupOpen(hsh);		}else if($('div.'+hsh).length>0){			$('body,html').animate({scrollTop:$('div.'+hsh).offset().top,},500, function(){});		}	}	$('.wrapper').addClass('loaded');});	var act="click";if(isMobile.iOS()){	var act="touchstart";}$('.header-menu__icon').click(function(event) {	$(this).toggleClass('active');	$('.header-menu').toggleClass('active');	$('body').toggleClass('lock');});//ZOOM$(window).load(function() {	if($('.gallery').length>0){		baguetteBox.run('.gallery', {			// Custom options		});	}});//POPUP$('.pl').click(function(event) {		var pl=$(this).attr('href').replace('#','');	popupOpen(pl);	return false;});function popupOpen(pl){		var v=$('a[href="#'+pl+'"]').data('vid');	$('.popup').removeClass('active').hide();	$('body').addClass('lock');	history.pushState('', '', '#'+pl);	if(v!=''){		$('.popup-'+pl+' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/'+v+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');	}	$('.popup-'+pl).fadeIn(300).delay(300).addClass('active');}function openPopupById(popup_id){	$('#'+popup_id).fadeIn(300).delay(300).addClass('active');}function popupClose(){	$('.popup').removeClass('active').fadeOut(300);	if(!$('.header-menu').hasClass('active')){		$('body').removeClass('lock');	}	$('.popup-video__value').html('');	history.pushState('', '', window.location.href.split('#')[0]);}$('.popup').click(function(e) {	if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {		popupClose();		return false;	}});function ibg(){	$.each($('.ibg'), function(index, val) {		if($(this).find('img').length>0){			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');		}	});}$(window).load(function() {	ibg();});	//Клик вне области$(document).on('click touchstart',function(e) {	if (!$(e.target).is(".select *")) {		$('.select').removeClass('active');	};});//UP$(window).scroll(function() {		var w=$(window).width();		var h=$(window).height();			var ww=$(window).outerWidth();			var wh=$(document).outerHeight();			var footerHei=$('footer').height();			if ($('.booking-calc').length>0) {				var bph=$('.booking-calc').offset().top;				var headerHei=$('header').height();				var blockH=$('.booking-calc-fix').height();				var fh=$('.booking-calc').offset().top;				var fl=$('.booking-calc').offset().left;			}			if ($('.basket-formalization-body-right').length>0) {							}	if($(window).scrollTop()>(fh)){		$('.booking-calc-fix').addClass('fix')		$('.booking-calc-fix').css({						top:10,						left:fl					});		if ($(window).scrollTop()>(wh-blockH-footerHei-30)) {			$('.booking-calc-fix').css({						top:(wh-blockH-footerHei-30)-$(window).scrollTop(),						left:fl					});		}	}else{		$('.booking-calc-fix').removeClass('fix').css({			top:0,			left:0		})	}	if($(window).scrollTop()>50){		$('#up').fadeIn(300);	}else{		$('#up').fadeOut(300);	}});$('#up').click(function(event) {	$('body,html').animate({scrollTop:0},300);});$('body').on('click','.tab__navitem',function(event) {			var eq=$(this).index();		if($(this).hasClass('parent')){			var eq=$(this).parent().index();		}	if(!$(this).hasClass('active')){			$(this).closest('.tabs').find('.tab__navitem').removeClass('active');			$(this).addClass('active');			$(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');		if($(this).closest('.tabs').find('.slick-slider').length>0){			$(this).closest('.tabs').find('.slick-slider').slick('setPosition');		}	}});$.each($('.spoller.active'), function(index, val) {	$(this).next().show();});$('body').on('click','.spoller',function(event) {	if($(this).hasClass('mob') && !isMobile.any()){		return false;	}	if($(this).hasClass('closeall') && !$(this).hasClass('active')){		$.each($(this).closest('.spollers').find('.spoller'), function(index, val) {			$(this).removeClass('active');			$(this).next().slideUp(300);		});	}	$(this).toggleClass('active').next().slideToggle(300,function(index, val) {			if($(this).parent().find('.slick-slider').length>0){				$(this).parent().find('.slick-slider').slick('setPosition');			}	});});$(window).load(function() {	function scrolloptions(){			var scs=100;			var mss=50;			var bns=false;		if(isMobile.any()){			scs=10;			mss=1;			bns=true;		}		var opt={			cursorcolor:"#fff",			cursorwidth: "4px",			background: "",			autohidemode:true,			cursoropacitymax: 0.4,			bouncescroll:bns,			cursorborderradius: "0px",			scrollspeed:scs,			mousescrollstep:mss,			directionlockdeadzone:0,			cursorborder: "0px solid #fff",		};		return opt;	}	function scroll(){		$('.scroll-body').niceScroll('.scroll-list',scrolloptions());	}	if(navigator.appVersion.indexOf("Mac")!=-1){	}else{		if($('.scroll-body').length>0){scroll();}	}});if($('.t,.tip').length>0){	$(window).load(function() {		tip();	});}function tip(){	$('.t,.tip').webuiPopover({		placement:'top',		trigger:'hover',		backdrop: false,		//selector:true,		animation:'fade',		dismissible: true,		padding:false,		//hideEmpty: true		onShow: function($element) {},		onHide: function($element) {},	}).on('show.webui.popover hide.webui.popover', function(e){		$(this).toggleClass('active');	});}
function map(n){
	google.maps.Map.prototype.setCenterWithOffset= function(latlng, offsetX, offsetY) {
		var map = this;
		var ov = new google.maps.OverlayView(); 
		ov.onAdd = function() { 
			var proj = this.getProjection(); 
			var aPoint = proj.fromLatLngToContainerPixel(latlng);
			aPoint.x = aPoint.x+offsetX;
			aPoint.y = aPoint.y+offsetY;
			map.panTo(proj.fromContainerPixelToLatLng(aPoint));
			//map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
		}
		ov.draw = function() {};
		ov.setMap(this);
	};
	var markers = new Array();
	var infowindow = new google.maps.InfoWindow({
		//pixelOffset: new google.maps.Size(-230,250)
	});
	var locations = [
		[new google.maps.LatLng(53.819055,27.8813694)],
	]
	var options = {
		zoom: 10,
		panControl:false,
		mapTypeControl:false,
		center: locations[0][0],
		styles:[{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}],
		scrollwheel:false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}; 
	var map = new google.maps.Map(document.getElementById('map'), options);
	var icon={
		url:'img/icons/map.svg',
		scaledSize: new google.maps.Size(40, 55),
		anchor: new google.maps.Point(20, 55)
	}
	for (var i = 0; i < locations.length; i++) {
		var marker = new google.maps.Marker({
			icon:icon,
			position: locations[i][0],
			map: map,
		});
		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				for (var m = 0; m < markers.length; m++) {
					markers[m].setIcon(icon);
				}
					var cnt=i+1;
				//infowindow.setContent($('.contacts-map-item_'+cnt).html());
				//infowindow.open(map, marker);
				marker.setIcon(icon);
				map.setCenterWithOffset(marker.getPosition(),0,0);
				// setTimeout(function(){
				// 	baloonstyle();
				// },10);
			}
		})(marker, i));
		markers.push(marker);
	}

	if(n){
			var nc=n-1;
		setTimeout(function(){
			google.maps.event.trigger(markers[nc], 'click');
		},500);
	}
}
// function baloonstyle(){
// 	$('.gm-style-iw').parent().addClass('baloon');
// 	$('.gm-style-iw').prev().addClass('baloon-style');
// 	$('.gm-style-iw').next().addClass('baloon-close');
// 	$('.gm-style-iw').addClass('baloon-content');
// }
$(window).load(function() {
	if($("#map").length>0){
		map(1);
	}
});


/* YA
function map(n){
	ymaps.ready(init);
	function init(){ 
		// Создание карты.
		var myMap = new ymaps.Map("map", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			controls: [],
			center: [43.585525,39.723062],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 10
		});
		
		myPlacemar = new ymaps.Placemark([43.585525,39.723062],{
			id:'2'
		},{
			// Опции.
			hasBalloon:false,
			hideIconOnBalloonOpen:false,
			// Необходимо указать данный тип макета.
			iconLayout: 'default#imageWithContent',
			// Своё изображение иконки метки.
			iconImageHref: 'img/icons/map.svg',
			// Размеры метки.
			iconImageSize: [40, 40],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-20, -20],
			// Смещение слоя с содержимым относительно слоя с картинкой.
			iconContentOffset: [0,0],
		});
		myMap.geoObjects.add(myPlacemar);

		myMap.behaviors.disable('scrollZoom');
	}
}
*/
});
