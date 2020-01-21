var nombre = document.getElementById("nombre");
var botones = document.querySelectorAll(".aceptar");
var texto;
var valor;

var changeValue = function (e) {
	valor = e.currentTarget.closest('.form').querySelector('input').value;
	texto = e.currentTarget.closest('.form').querySelector('span');

	if (valor!==""){
		texto.innerHTML = valor;
	}
	else{
		alert("ingrese el texto!!!!!");
	}
};

botones.forEach(function (boton) {
	boton.addEventListener("click", changeValue);
});

