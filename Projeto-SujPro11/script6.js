class List{
	constructor(){
		this.data = [];
	}

	add(data){
		this.data.push(data);
		console.log(this.data);
	}
}



class ListaTarefas extends List{
/*	constructor(){
		this.tarefas = [];
	}

	addTarefa(){
		this.tarefas.push("Nova Tarefa");
		console.log(this.tarefas);
	}   */
};

const minhasTarefas = new ListaTarefas();

document.getElementById('novo').onclick = function(){
	minhasTarefas.add("Minha Tarefa");
}
