function cadastroPessoa(info){
	let novosDados = {
		...info,
		cargo: 'Programador',
		status: 1,
		codigo: '65448754'
	};

	return novosDados;
}

console.log(cadastroPessoa({nome: 'Rafael', sobrenome:'Iglesias', anoInicio: 2045}));

