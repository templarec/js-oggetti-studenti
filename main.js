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

	})

});