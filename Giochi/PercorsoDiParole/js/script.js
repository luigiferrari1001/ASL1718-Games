
var paroleSoluzione = ["SORGENTE","STREGONE","MAGO","VAGO","VALGO","ALLUCE","DITA","VITA","DOLCE","ACQUA","RUBINETTO"];
var paroleDisordine = ["ACQUA","ALLUCE","DITA","DOLCE","MAGO","VALGO","STREGONE","VAGO","VITA"];

var descrizione = "Partendo da SORGENTE devi arrivare a RUBINETTO, cambiando la sequenza delle parole sottoelencate. Nel percorso ogni parola deve essere collegata a quella che precede o segue con criteri diversi: aggiunta o scarto di una lettera, anagramma, associazione di idee.";

var next=1;

function setup(){
	var i;
	var acapo=false;

	//descrizione del gioco
	document.getElementById('intro').innerHTML=descrizione;

	//viene già inserita la prima parola
	document.getElementById("caselleSoluzione").innerHTML+="<div class=\"parola\"><p>"+paroleSoluzione[0]+"</p></div>";

	for(i=1;i<paroleSoluzione.length-1;i++){
		if(i>=(paroleSoluzione.length)/2 && !acapo && paroleSoluzione.length>=10){
			document.getElementById("caselleSoluzione").innerHTML+="<br><br><br>";
			acapo=true;
		}
		document.getElementById("caselleSoluzione").innerHTML+="<div id=\"ord"+i+"\" class=\"parola\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\"></div>"
	}

	//viene già inserita l'ultima parola
	document.getElementById("caselleSoluzione").innerHTML+="<div class=\"parola\" ><p>"+paroleSoluzione[paroleSoluzione.length-1]+"</p>";


	for(i=0;i<paroleDisordine.length;i++)
		document.getElementById("caselleDisordine").innerHTML+="<div id=\"dis"+i+"\" class=\"parola\" draggable=\"true\" ondragstart=\"drag(event)\"><p>"+paroleDisordine[i]+"</p></div>";
	
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");

    if(check(document.getElementById(data).innerHTML)){  //verifico che sia la parola corretta
	    document.getElementById(ev.target.id).innerHTML+=document.getElementById(data).innerHTML;
	    document.getElementById(data).style.display = "none";	
	}
}

function check(content){
	var parola=content.slice(content.indexOf(">")+1,content.lastIndexOf("<"));
	if(parola==paroleSoluzione[next]){
		next++;
		if(next==paroleSoluzione.length-1)
			vittoria();
		return true;
	}
	return false;
}

function vittoria(){
	alert("hai vinto!");

	//scrivere qua il codice per mostrare ciò che serve in caso di vittoria

}

