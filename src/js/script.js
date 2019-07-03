/*import { get } from "https*/

/* jQuery anchor link 
$(function () {
	$('a[href^="#"]').on('click', function (event) {
		var href = $(this).attr('href'),
			target = $(href == '#' || href == '' ? 'html' : href),
			position = target.offset().top;
		$('body, html').animate({scrollTop: position}, 250, 'swing');
		event.preventDefault();
	});
});

/* Check for device type 
var detectDeviceType = function detectDeviceType() {
	return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
	);
};

/* Check if element is visible 
var elementIsVisibleInViewport = function elementIsVisibleInViewport(el) {
	var partiallyVisible = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	var _el$getBoundingClient = el.getBoundingClientRect();
	
	var top = _el$getBoundingClient.top;
	var left = _el$getBoundingClient.left;
	var bottom = _el$getBoundingClient.bottom;
	var right = _el$getBoundingClient.right;
	var _window = window;
	var innerHeight = _window.innerHeight;
	var innerWidth = _window.innerWidth;
	
	return partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

/* Example of GSAP Timeline lite */
$(document).ready(function () {
	$('.flip').on('click', function(){
		var flip = $(this)
		if ( flip.hasClass('turn') ) {
			flip.removeClass('turn');
		} else {
			$('.flip').removeClass('turn');
			flip.addClass('turn');
		}
		
	});

	$('.button').on('click', function(){
		$(this).addClass('hide');
		$('.placeHolder').addClass('hide');
		$('.card--1').addClass('shuffle--1');
		$('.card--2').addClass('shuffle--2');
		$('.card--3').addClass('shuffle--3');
		$('.card').removeClass('hide');
		$('.flip').removeClass('hide');
		$('.frame').removeClass('hide');
	});
});