var frasi = ["Non ereditiamo la terra dai nostri antenati ma la prendiamo in prestito dai nostri figli", "Non conosciamo mai il valore dell' acqua fino a quando il pozzo è asciutto", "Cambia prima di essere costretto a farlo"];
var suggerimenti = ["3 – 10 – 2 – 5 – 3 – 6 – 8 – 2 – 2 – 9 – 2 – 8 – 3 – 6 – 5.", "3 – 10 – 3 – 2 – 6 – 4'5 – 4 – 1 – 6 – 2 – 5 – 1 – 8.", "6 – 5 – 2 – 6 – 9 – 1 – 5."];
var introduzioni = [
"Devi ricostruire questo antico proverbio navajo, utilizzando le parole elencate sotto e sapendo che il diagramma corretto è:",
"Devi ricostruire questo aforisma dello scrittore inglese del ‘700 Thomas Fuller, utilizzando le parole elencate sotto e sapendo che il diagramma corretto è:",
"Devi ricostruire questa considerazione di Jack Welck, ex CEO della General Electric, utilizzando le parole elencate sotto e sapendo che il diagramma corretto è:"];
var autori = [
"-Antico proverbio Navajo",
"-Thomas Fuller",
"-Jack Welck"];

var immaginiSfondo=[
"../img/onde/OndaMediaVerde.png",
"../img/onde/OndaMediaBlu.png",
"../img/onde/OndaMediaGialla.png"
];

var immaginiIndietro=[
"Immagini/IndietroVerde.png",
"Immagini/IndietroBlu.png",
"Immagini/IndietroGialla.png"
];
var immaginiAvanti=[
"../img/frecce/FrecciaAvantiVerde.png",
"../img/frecce/FrecciaAvantiBlu.png",
"../img/frecce/FrecciaAvantiGialla.png"
];
var immaginiHome=[
"../img/bottoni/CasaVerde.png",
"../img/bottoni/CasaBlu.png",
"../img/bottoni/CasaGialla.png"
];
var immaginiSoluzione=[
"../img/bottoni/SoluzioneVerde.png",
"../img/bottoni/SoluzioneBlu.png",
"../img/bottoni/SoluzioneGialla.png"
];

var colori=[
"#00b140",
"#0033A0",
"#ffd100"
];

var frase = "";
var c;
var a = new Array();
var posizioni = new Array();


function inizializza(i){
	c = i;
	frase = frasi[c];
	document.getElementById("foot").src = immaginiSfondo[c];
	document.getElementById("intro").innerHTML = introduzioni[c];
	document.getElementById("sugg").innerHTML = suggerimenti[c];
	document.getElementById("titolo").style.color=colori[c];
	document.getElementById("indice").src = immaginiHome[c];
	document.getElementById("soluzione").src = immaginiSoluzione[c];
	document.getElementById("avanti").src = immaginiAvanti[c];

	frase = frase.toUpperCase();
	var i,s,s2;
	a = frase.split(" ");
	a = a.sort();
	s2 = '';
	for(i=0;i<a.length;i++){
		s = '<div  class="draggable" draggable="true" ondragstart="drag('+i+')" ondrop="drop('+i+')" ondragover="allowDrop(event)" id="b'+i+'"><p class="testo"  id="ti'+i+'">'+a[i]+'</p></div>';
		s2 = s2 + s;
	}
	s2 = s2 + "<br>";
	
	var div = document.createElement('div');
	div.innerHTML = s2;
	div.id = "bottoni";
	var clone = div.cloneNode(true);
	document.body.appendChild(clone);
	document.getElementById("bottoni").style.align = "center";
	//document.getElementById("img-fondo").src = immagini[c];
}

function check(){
	var tent = new Array();
	for(var i=0;i<a.length;i++){
		tent[i] = document.getElementById("ti"+i).innerHTML;
	}
	var s = tent.join(" ");
	if(s == frase)
		vittoria();
}

function allowDrop(ev) {
    ev.preventDefault();
}


var stringa1 = "";
var stringa2 = "";
var indice = "";

function drag(ev) {
    stringa1 = document.getElementById("ti"+ev).innerHTML;
	indice = "ti"+ev;
	
}

function mostraSoluzione(){
	var modal = document.getElementById('myModal');
	var span = document.getElementsByClassName("close")[0];
	document.getElementById("risultato").src = ""; 
	document.getElementById("scritta").innerHTML = "La soluzione è: <br> <b>" + frasi[c]+"</b>";
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


function drop(ev) {
    stringa2 = document.getElementById("ti"+ev).innerHTML;
	document.getElementById("ti"+ev).innerHTML = stringa1;
	document.getElementById(indice).innerHTML = stringa2;
	check();
}

function vittoria(){
	document.getElementById("scritta").innerHTML = "Complimenti! Ora puoi passare al gioco successivo";
	document.getElementById("risultato").src="../img/LeiFelice.png";
	var modal = document.getElementById('myModal');
	var span = document.getElementsByClassName("close")[0];
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