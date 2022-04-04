function validar(){

	var valor = document.getElementById("numero").value;
	var nomeValor = document.getElementById("nome").value;

	if(valor.length > 2){
		alert("Digite 2 números ou menos!");
		return false;
		document.formulario.numero.focus();
	}else if(nomeValor.length < 3){
		alert("Digite um nome maior!");
		return false;
		document.formulario.nome.focus();
	}else{
		alert("Formulário enviado com sucesso!");
		return true;
	}
}