//Teclado apertado:

function tecladoapertado(event){
	console.log("Teclado apertado! " + event.keyCode);

	if(event.keyCode == 13){
		console.log('Você apertou o enter!');
	}
}

//Teclado apertado - Boulean
//function tecladoapertado(event){
//	console.log('Teclado apertado!' + event.shiftKey);
//
//	if(event.KeyCode == 13){
//		console.log('Você apertou o enter!');
//	}
//}

//Soltou o teclado:
function soltouoteclado(event){
	console.log('Soltou o teclado!');
}

//Apertou o teclado
function apertounotelcado(event){
	console.log('Você apertou o teclado!')
}
