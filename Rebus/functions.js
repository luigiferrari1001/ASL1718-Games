var chiave = new String ("");
var chiaveSenzaSpazi = new String("");
var chiaveSpiegata = new String ("");
var utente = new String ("");
var posizione = 0;
var visibile = new String("");

var numeroRebus=0;


function setVisibile(){
	var i = 0;
	visibile= new String("");
	utente = new String ("");
	posizione = 0;
	for (i = 0; i < chiave.length; i++){
		if (chiave[i] == " "){
			visibile += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
		}else{
			if (chiave[i] == "'"){
				visibile += "'";
			}else{
				visibile += "_ ";
			}
		}
	}	
	document.getElementById("lettere").innerHTML = visibile;
}

function setCharAt(str,index,chr) {
	if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
}

function inserisciLettera(lettera){
	utente += lettera;
	visibile = visibile.replace('_', lettera);
	document.getElementById("lettere").innerHTML = visibile;
	posizione++;	
	if (posizione == chiaveSenzaSpazi.length){
		if (utente == chiaveSenzaSpazi){
			soluzioneCorretta();
		}
		else{
			soluzioneErrata();
		}
	}
	
    //window.alert(utente);
	
	
}

function cancellaLettera(){
    if (posizione >= 0){
        utente = setCharAt(utente, posizione - 1, "");
        //window.alert(utente);
		var i;
		for (i = visibile.length; i >= 0; i--){
			if (visibile.charCodeAt(i) >= 65 && visibile.charCodeAt(i) <= 90){
				visibile = setCharAt(visibile, i, "_");
				break; 
			}
		}
		document.getElementById("lettere").innerHTML = visibile;
        posizione--;
    }
}

function soluzioneErrata(){
	var modal = document.getElementById('myModal');
	var span = document.getElementsByClassName("close")[0];
	modal.style.display = "block";
	document.getElementById("risultato").src = "../img/LuiTriste.png"; 
	document.getElementById("scritta").innerHTML = "La soluzione e' errata!";
	document.getElementById("scrittaSotto").style.display = "none";
	modal.style.display = "block";
		span.onclick = function() {
		modal.style.display = "none";
		}
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
	setVisibile();
}

function soluzioneCorretta(){
	var modal = document.getElementById('myModal');
	var span = document.getElementsByClassName("close")[0];
	modal.style.display = "block";
	document.getElementById("risultato").src = "../img/LeiFelice.png"; 
	document.getElementById("scritta").innerHTML = "Complimenti! Ora puoi passare al gioco successivo";
	document.getElementById("scrittaSotto").style.display = "none";
	modal.style.display = "block";
		span.onclick = function() {
		modal.style.display = "none";
		}
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
}

function mostraSoluzione(){
	var modal = document.getElementById('myModal');
	var span = document.getElementsByClassName("close")[0];
	document.getElementById("risultato").src = document.getElementById("img").src; 
	document.getElementById("scritta").innerHTML = "La soluzione e' questa:";
	document.getElementById("scrittaSotto").innerHTML = chiaveSpiegata;
	document.getElementById("scrittaSotto").style.display = "initial";
	modal.style.display = "block";
		span.onclick = function() {
		modal.style.display = "none";
		}
		
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
}

function scegliRebus(i){
	numeroRebus=parseInt(i);
	if(numeroRebus>4){
		//vai al prossimo gioco
	}
	visibile = new String ("");
	utente = new String ("");
	posizione = 0;
	var customProps = window.getComputedStyle(document.documentElement);
	if(i==1){
		document.getElementById("img").src = "img/rebus_laboratorio.png";
		document.getElementById("titolo").innerHTML = "1. Rebus (11 2 7 8)";
		/*document.getElementById("titolo").style.color = "#0053A1";
		*/
		document.getElementById("titolo").style.color = "var(--blu)";
		document.getElementById("foot").src = "../img/onde/OndaPiccolaBlu.png";
		document.getElementById("avanti").src = "../img/frecce/FrecciaAvantiBlu.png";
		document.getElementById("indice").src = "../img/bottoni/IndiceBlu.png";
		document.getElementById("soluzione").src = "../img/bottoni/SoluzioneBlu.png";
		document.getElementById("lettere").style.color = "var(--blu)";
		chiave = "LABORATORIO DI ANALISI CHIMICHE";
		chiaveSenzaSpazi = "LABORATORIODIANALISICHIMICHE";
		chiaveSpiegata = "LAB oratori odi A N ali si C HI miche<br/>= LABORATORIO DI ANALISI CHIMICHE";
	}
	else if (i==2){
		document.getElementById("img").src = "img/rebus_imballaggi.png";
		document.getElementById("titolo").innerHTML = "2. Rebus (10 3 9)";
		/*document.getElementById("titolo").style.color = "#00b140";
		*/
		document.getElementById("titolo").style.color = "var(--verde)";
		document.getElementById("foot").src = "../img/onde/OndaPiccolaVerde.png";
		document.getElementById("avanti").src = "../img/frecce/FrecciaAvantiVerde.png";
		document.getElementById("indice").src = "../img/bottoni/IndiceVerde.png";
		document.getElementById("soluzione").src = "../img/bottoni/SoluzioneVerde.png";
		document.getElementById("lettere").style.color = "var(--verde)";
		chiave = "IMBALLAGGI NON NECESSARI";
		chiaveSenzaSpazi = "IMBALLAGGINONNECESSARI";
		chiaveSpiegata = "IM balla GGI nonne C e S sari<br/>= IMBALLAGGI NON NECESSARI";
	}else if (i==3){
		document.getElementById("img").src = "img/rebus_cogenerazione.png";
		document.getElementById("titolo").innerHTML = "3. Rebus (8 2 13)";	
		document.getElementById("titolo").style.color = "var(--giallo)";
		document.getElementById("foot").src = "../img/onde/OndaPiccolaGialla.png";
		document.getElementById("avanti").src = "../img/frecce/FrecciaAvantiGialla.png";
		document.getElementById("indice").src = "../img/bottoni/IndiceGiallo.png";
		document.getElementById("soluzione").src = "../img/bottoni/SoluzioneGialla.png";
		document.getElementById("lettere").style.color = "var(--verde)";
		chiave = "CENTRALE DI COGENERAZIONE";
		chiaveSenzaSpazi = "CENTRALEDICOGENERAZIONE";
		chiaveSpiegata = "C entra led IC OG è nera Z ione<br/>= CENTRALE DI COGENERAZIONE";	
	}else if(i==4){
		document.getElementById("img").src = "img/rebus_ambiente.png";
		document.getElementById("titolo").innerHTML = "4. Rebus (8 1 8 1 10)";
		document.getElementById("titolo").style.color = "var(--rosso)";
		document.getElementById("foot").src = "../img/onde/OndaPiccolaRossa.png";
		document.getElementById("avanti").src = "../img/frecce/FrecciaAvantiRossa.png";
		document.getElementById("indice").src = "../img/bottoni/IndiceRosso.png";
		document.getElementById("soluzione").src = "../img/bottoni/SoluzioneRossa.png";
		document.getElementById("lettere").style.color = "var(--rosso)";
		chiave = "TUTELARE L'AMBIENTE E' IMPORTANTE";
		chiaveSenzaSpazi = "TUTELARELAMBIENTEEIMPORTANTE";
		chiaveSpiegata = "tute L A re L ambi E N te E IM porta N te <br/>= TUTELARE L'AMBIENTE E' IMPORTANTE";		
	}
	setVisibile();
}

