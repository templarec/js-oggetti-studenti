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
	console.log("---------------");
	//creo array classe e lo popolo con vari studenti:
	var classe = [];
	classe.push(studente);
	//console.log("Stampo array: ", classe);
	var sep = "</td><td>";
	//stampo in tabella il primo nome in array creato dal codice sopra
	output.append("<thead><th>Numero</th><th>Nome</th><th>Cognome</th><th>Età</th></thead>");
	output.append("<tr><td>" + 1 + sep + classe[0].nome + sep + classe[0].cognome + sep + classe[0].eta + "</td></tr>");
	//al click inserisco nuovo utente in array come oggetto e stampo in tabella
	button.click(function () {
		//prendo le value degli input
		var newNome = nome.val();
		var newCognome = cognome.val();
		var newEta = eta.val();
		//verifico che non siano vuote
		if (newNome != "" && newCognome != "" && newEta != "" ) {
			//creo oggetto studente
			var studente = {
				nome: newNome,
				cognome: newCognome,
				eta: newEta
			}
			//push dentro array classe
			classe.push(studente);
			//console.log("Stampo array aggiornato: ", classe);
			//visualizzo elementi dom nascosti
			$('#lista').show();
			$('.output').show();
			//appendo ultimo studente inserito che è l'ultimo in array
			var ultimo = classe.length - 1;
			output.append("<tr><td>" + (ultimo+1) + sep + classe[ultimo].nome + sep + classe[ultimo].cognome + sep + classe[ultimo].eta + "</td></tr>");
		} else {
			//avviso che non sono stati inseriti campi
			alert("Attenzione i campi sono obbligatori!");
		}
	})
});