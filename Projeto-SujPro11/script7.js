

class pessoa{
	constructor(){
		this.nome = '',
		this.sobrenome = ''
	}

	nomePessoa(primeironome){
		this.nome = primeironome;
		console.log('Meu nome é: ' + this.nome);

	}
	segundonome(segundonome){
		this.sobrenome = segundonome;
		console.log('Meu sobrenome é: ' + this.sobrenome);
	}

	nomecompleto(){
		let nomecompleto = this.nome + ' ' + this.sobrenome;
		console.log(nomecompleto);
	}
};

let pessoa1 = new pessoa();

pessoa1.nomePessoa('Rafael');
pessoa1.segundonome('Iglesias');
pessoa1.nomecompleto();