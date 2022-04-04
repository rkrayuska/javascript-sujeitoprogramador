// Switch

document.write("<br> Escolha seu pedido: <br>");
document.write("<br> 0 - Sorvete / 1 - Suco <br>");
document.write("<br> 2 - Coca Cola / 3 - Água Gelada <br>");
document.write("<br><br>");

function pedir(){
	x = prompt("O que deseja pedir?");

	switch(Number(x)){
		case 0:
			alert("Você pediu um sorvete!");
			break;
		case 1:
			alert("Você pediu um suco!");
			break;
		case 2:
			alert("Você pediu uma coca cola");
			break;
		case 3:
			alert("Você pediu uma água gelada!");
			break;
		default:
			alert("Ops... não temos essa opção!");
			break;
}
}

//Nesse caso, pode transformar o x em numero desse jeito, ou era só colocar "" em cada número dos cases, dessa forma, iriam virar string.