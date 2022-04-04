
//Função entrar

function entrar(){

	var area = document.getElementById('area');
	var texto = prompt('Digite seu nome:');

	if(texto == '' || texto == null ){
		alert('Digite seu nome novamente!');
		area.innerHTML = 'Bem vindo...';
	}else{
		area.innerHTML = 'Bem vindo, ' + texto;
	}

}

function entrar2(nome){
	var area = document.getElementById('area2');
	var texto = prompt('Digite seu sobrenome:');
	area.innerHTML = nome + " " + texto;
}

function idade(nome){
	var idade = document.getElementById('idade');
	var texto = prompt('Qual a sua idade?');

	if(texto=='' || texto== null){
		alert('Preciso que você digite sua idade novamente! por favor!');
		idade.innerHTML = 'Bem vindo, ...';
	}else{
		idade.innerHTML = nome + ", " + texto;
	}
	 
}

function entrar3(){
	var area = document.getElementById('area3');
	var nome = prompt('Qual é seu nome?')
	var sobrenome = prompt('Qual é seu sobrenome?');
	var idade = prompt('Qual a sua idade?');
	var nomecompleto = `${nome} ${sobrenome}`;

	if(nome, sobrenome, idade == "" || nome, sobrenome, idade == null){
		alert('Por favor, preencha o campo!');
		area3.innerHTML = 'Bem vindo(a)';
	}else {
		area3.innerHTML = 'Bem vindo(a),' + " " + nomecompleto + ", " + `${idade} anos.`
	}
}

function batualizar(){
	var batt = document.getElementById('attbutton');

	window.location.href=window.location.href;
	teste.innerHTML = "Atualizado!";

}