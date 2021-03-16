$(document).ready(function () {
	//variabili oggetti dom
	var nome = $("#nome");
	var cognome = $("#cognome");
	var eta = $("#eta");
	var button = $("#submit");
	var output = $(".output");

	//creo oggetto
	var studente = {
		nome: "Lorenzo",
		cognome: "Bernini",
		eta: "34"
	};
	//stampo tutte le proprietà dell'oggetto studente:
	console.log("Stampo utente creato: ");
	for (var studenteKey in studente) {
		console.log(studenteKey, ":", studente[studenteKey]);
	}
	//creo array classe e lo popolo con vari studenti:
	console.log("---------------");
	var classe = [];
	classe.push(studente);
	//console.log("Stampo array: ", classe);
	var sep = "</td><td>";
	output.append("<thead><th>Numero</th><th>Nome</th><th>Cognome</th><th>Età</th></thead>");
	output.append("<tr><td>" + 1 + sep + classe[0].nome + sep + classe[0].cognome + sep + classe[0].eta + "</td></tr>");
	//al click inserisco nuovo utente in array come oggetto
	button.click(function () {
		//prendo le value degli input
		var newNome = nome.val();
		var newCognome = cognome.val();
		var newEta = eta.val();
		//creo oggetto studente
		var studente = {
			nome: newNome,
			cognome: newCognome,
			eta: newEta
		}
		//push dentro array classe
		classe.push(studente);
		console.log("Stampo array aggiornato: ", classe);
		//stampo ogni elemento array e oggetto
		$('#lista').show();
		$('.output').show();

		var ultimo = classe.length - 1;
		output.append("<tr><td>" + (ultimo+1) + sep + classe[ultimo].nome + sep + classe[ultimo].cognome + sep + classe[ultimo].eta + "</td></tr>");


	})

});