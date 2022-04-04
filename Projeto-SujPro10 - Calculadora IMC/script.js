/*
Abaixo de 17 - Muito abaixo do peso
Entre 17 e 18,49 - Abaixo do peso
Entre 18,5 e 24,99 - Peso normal
Entre 25 e 29,99 - Acima do peso
*/

/* Fórmula do IMC:
peso/(altura*altura):
*/

var peso
var altura
var imc
var resultado

function calcular(){

	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;
	var imc = peso/(altura*altura);

	if(imc < 17){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<br> Seu resultado foi: '+ imc.toFixed(2) + '<h3>Cuidado! Você está muito abaixo do peso!</h3>';
		document.getElementById('peso').value='';
		document.getElementById('altura').value='';
		return false;
	}else if(imc > 17 && imc < 18.49){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<br> Seu resultado foi: '+ imc.toFixed(2) + '<h3>Cuidado! Você está abaixo do peso!</h3>';
		document.getElementById('peso').value='';
		document.getElementById('altura').value='';
		return false;
	}else if(imc > 18.5 && imc < 24.99){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<br> Seu resultado foi: '+ imc.toFixed(2) + '<h3>Muito bem! seu peso está normal!</h3>';
		document.getElementById('peso').value='';
		document.getElementById('altura').value='';
		return false;
	}else if(imc > 25 && imc < 50){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<br> Seu resultado foi: '+ imc.toFixed(2) + '<h3>Cuidado! Você está acima do peso!</h3>';
		document.getElementById('peso').value='';
		document.getElementById('altura').value='';
		return false;
	}else{
		return false;
	}
}