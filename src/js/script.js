var minus = document.querySelector('.resta');
var sum = document.querySelector('.suma');
var input = document.querySelector('.input');
var minimum = parseInt(input.dataset.min);
var maximum = parseInt(input.dataset.max);

var isNumber = function(str) {
	var pattern = /^\d+$/;
	return pattern.test(str);
};

var operar = function (e, operate) {
	input = e.currentTarget.closest('.contador').querySelector('.input');
	var currentValue = parseInt(input.value);
	if (operate === 'resta' && currentValue > minimum) input.value = currentValue - 1;
	if (operate === 'suma' && currentValue < maximum) input.value = currentValue + 1;
};

$(document).ready(function () {
	minus.addEventListener('click', function (e) {
		operar(e, 'resta');
		console.log(e);
	});

	sum.addEventListener('click', function (e) {
		operar(e, 'suma');
	});

	input.addEventListener('keyup', function (e) {
		if (!isNumber(e.currentTarget.value.toString())) {
			e.currentTarget.value = 0;
		}

		if (e.which == 38) {
			operar(e, 'suma');
		}
		if (e.which == 40) {
			operar(e, 'resta');
		}
	});
});
