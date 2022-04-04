// 1 - Criar balão.
// 2 - Estourar o balão.
// 3 - Carregar o jogo.

var total = 0;

function criarbalao(){

	var balao = document.createElement("div");
	balao.setAttribute("class", "balao");

	var x = Math.floor(Math.random() * 600);
	var y = Math.floor(Math.random() * 400);

	balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
	//<div class="balao" style="left:30px; top:60px"></div> - É isso que significa a linha de cima.
	balao.setAttribute("onclick", "estourar(this)");

	document.body.appendChild(balao);
}

function estourar(objeto){
	document.body.removeChild(objeto);

	total++;
	//total = total + 1;
	var score = document.getElementById("total");
	score.innerHTML = "Balões Estourados: " + total;
}

function carregarjogo(criar){
	setInterval(criarbalao, 1000);

}