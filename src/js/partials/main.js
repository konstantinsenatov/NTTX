const header__tel__order = document.querySelector('.header__tel--order');
const header__popap__order = document.querySelector('.header__popap-order');
const header__popap__back = document.querySelector('.header__popap-back');
const order__popap__header__close = document.querySelector('.order-popap-header__close');

header__tel__order.addEventListener("click", function(e) {
	header__popap__back.classList.add('active');
	header__popap__order.classList.add('active')
});
order__popap__header__close.addEventListener("click", function(e) {
	header__popap__back.classList.remove('active');
	header__popap__order.classList.remove('active')
});
header__popap__back.addEventListener("click", function(e) {
	header__popap__back.classList.remove('active');
	header__popap__order.classList.remove('active')
});



const mobile_header_menu = document.querySelector('.mobile-header-menu');
const header_burger = document.querySelector('.header__burger');
const mobile_header_menu_close = document.querySelector('.mobile-header-menu__close');

header_burger.addEventListener("click", function(e) {
	mobile_header_menu.classList.add('active');
});

mobile_header_menu_close.addEventListener("click", function(e) {
	mobile_header_menu.classList.remove('active');
});




let scrollpos_header__fixed = window.scrollY

const header__fixed = document.querySelector(".header__fixed")
const scrollChange_header__fixed = 200

const add_class_on_scroll_header__fixed = () => header__fixed.classList.add("active")
const remove_class_on_scroll_header__fixed = () => header__fixed.classList.remove("active")

window.addEventListener('scroll', function() { 
	scrollpos_header__fixed = window.scrollY;

	if (scrollpos_header__fixed >= scrollChange_header__fixed) { add_class_on_scroll_header__fixed() }
	else { remove_class_on_scroll_header__fixed() }
})

let scrollpos = window.scrollY

const header_mobile = document.querySelector(".header")
const scrollChange = 1

const add_class_on_scroll = () => header_mobile.classList.add("active")
const remove_class_on_scroll = () => header_mobile.classList.remove("active")

window.addEventListener('scroll', function() { 
	scrollpos = window.scrollY;

	if (scrollpos >= scrollChange) { add_class_on_scroll() }
	else { remove_class_on_scroll() }
})





let scrollpos_header_min = window.scrollY

const header__top = document.querySelector(".header__top")
const scrollChange_header__top = 100

const add_class_on_scroll_header__top = () => header__top.classList.add("active")
const remove_class_on_scroll_header__top = () => header__top.classList.remove("active")

window.addEventListener('scroll', function() { 
	scrollpos_header_min = window.scrollY;

	if (scrollpos_header_min >= scrollChange_header__top) { add_class_on_scroll_header__top() }
	else { remove_class_on_scroll_header__top() }
})






function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
function mobile_header_spoiler(el) {
	var text = el.parentNode.querySelector(".mobile-header-menu__list-inner"); 

	if (!hasClass(text, 'active')) {
		text.classList.add('active');
	} else {
		text.classList.remove('active');
	}
}



const mobile_header_menu__item = document.querySelector('.mobile-header-menu__item');
mobile_header_menu__item.addEventListener("click", function(e) {
	mobile_header_menu__item.classList.toggle('active');
});



const top_footer__title_first = document.querySelector('.top-footer__title-first');
const top_footer__list_first = document.querySelector('.top-footer__list-first');

top_footer__title_first.addEventListener("click", function(e) {
	top_footer__title_first.classList.toggle('active');
	top_footer__list_first.classList.toggle('active');
});

const top_footer__title_second = document.querySelector('.top-footer__title-second');
const top_footer__list_second = document.querySelector('.top-footer__list-second');

top_footer__title_second.addEventListener("click", function(e) {
	top_footer__title_second.classList.toggle('active');
	top_footer__list_second.classList.toggle('active');
});

const top_footer__title_third = document.querySelector('.top-footer__title-third');
const top_footer__list_third = document.querySelector('.top-footer__list-third');

top_footer__title_third.addEventListener("click", function(e) {
	top_footer__title_third.classList.toggle('active');
	top_footer__list_third.classList.toggle('active');
});


	const header_input1 = document.querySelector('.order-popap-header__form--input1');
	const header_span1 = document.querySelector('.order-popap-header__form--input-placeholder1');
	
	header_input1.onfocus = function () {
		header_input1.classList.add('border');
		header_span1.classList.add('focus');
	}
	header_input1.onblur = function () {
		if (header_input1.value == "") {
			header_input1.classList.remove('border');
			header_span1.classList.remove('focus');
			header_input1.classList.add('border-r');
		}
	}


	const header_input2 = document.querySelector('.order-popap-header__form--input2');
	const header_span2 = document.querySelector('.order-popap-header__form--input-placeholder2');
	
	header_input2.onfocus = function () {
		header_input2.classList.add('border');
		header_span2.classList.add('focus');
		header_input2.classList.remove('border-r');
	}
	header_input2.onblur = function () {
		if (header_input2.value == "") {
			header_input2.classList.remove('border');
			header_span2.classList.remove('focus');
			header_input2.classList.add('border-r');
		}
	}


	const input1 = document.querySelector('.form-general__input--inner1');
	const span1 = document.querySelector('.form-general__input--inner-placeholder1');
	
	input1.onfocus = function () {
		span1.classList.add('focus');
	}
	input1.onblur = function () {
		if (input1.value == "") {
			span1.classList.remove('focus');
		}
	}


	const input2 = document.querySelector('.form-general__input--inner2');
	const span2 = document.querySelector('.form-general__input--inner-placeholder2');
	
	input2.onfocus = function () {
		span2.classList.add('focus');
	}
	input2.onblur = function () {
		if (input2.value == "") {
			span2.classList.remove('focus');
		}
	}


	const input3 = document.querySelector('.form-general__input--inner3');
	const span3 = document.querySelector('.form-general__input--inner-placeholder3');
	
	input3.onfocus = function () {
		span3.classList.add('focus');
	}
	input3.onblur = function () {
		if (input3.value == "") {
			span3.classList.remove('focus');
		}
	}


	const textArea = document.querySelector('.form-general__input-massage--inner');
	const span4 = document.querySelector('.form-general__input--inner-placeholder4');
	
	textArea.onfocus = function () {
		span4.classList.add('focus');
	}
	textArea.onblur = function () {
		if (textArea.value == "") {
			span4.classList.remove('focus');
		}
	}




