var parole=["ACQUEDOTTO","CALORE","CARICO","CARTA","CLIMA","CORRENTI","DEPURAZIONE","DIFFERENZIARE","ENERGIA","EOLICO","FALDA","FOGNATURE","GREEN","IMPATTO","ORGANICO","PILE","POTABILE","PULITA","RECUPERO","RETI","RISORSA","RIUSO","SCARTI","SERBATOIO","SOLARE","SOLE","STANDBY","VENTO","VETRO"];
var lettere=[
["F","R","I","U","S","O","O","R","E","P","U","C","E","R"],
["O","R","T","E","V","T","A","R","A","C","A","O","S","A"],
["G","R","E","E","N","S","A","I","A","R","A","C","N","O"],
["N","D","R","E","R","L","G","L","T","D","A","I","C","T"],
["A","Y","V","O","O","R","O","A","L","R","C","L","S","T"],
["T","W","S","S","E","R","B","A","T","O","I","O","T","O"],
["U","I","O","N","E","A","F","I","R","M","R","E","A","D"],
["R","L","E","D","E","P","U","R","A","Z","I","O","N","E"],
["E","R","A","I","Z","N","E","R","E","F","F","I","D","U"],
["L","O","R","G","A","N","I","C","O","H","O","L","B","Q"],
["I","M","P","A","T","T","O","C","I","R","A","C","Y","C"],
["P","E","L","I","B","A","T","O","P","U","L","I","T","A"]
];
var coordIniz=[-1,-1];
var coordFin=[-1,-1];
var parola="";
var numTrovate=0;
var x;
var y;


$(document).ready(function(){
var table;
var isSelezionabile= false;

table='<table id="tabella" align="center">';
	for(var i=0;i<lettere.length;i++){
		table+="<tr>";
		for(var j=0;j<lettere[i].length;j++){
			table+='<td id="'+i+'-'+j+'p" class="letters">'+lettere[i][j]+'</td>';
		}
	}
table+="</table>";
$("section").append(table);

$("section").append('<a href="giocosuccessivo.html"><img src="../img/frecce/FrecciaAvantiArancione.png" id="avanti"><a/>');
table1='<table id="clues" align="center">';
	for(i=0;i<parole.length;i++){
		
		if(((parseFloat(i))%5)==0){
			table1+="<tr>";
		}
		
		table1+='<td id="'+i+'c" class="clue">'+parole[i]+'</td>';
		
		if(((parseFloat(i+1))%5)==0){
			table+="</tr>";
		}
	}
	table1+="</table>";
$("section").append(table1);	

 $("#clues").attr("width",""+document.getElementById("tabella").offsetWidth+"");

$('.letters').on('mousedown touchstart',function(){ 
	 var colonna   = $(this).index();
	 var riga   = $(this).closest('tr').index();
	coordIniz[0]=colonna;
	coordIniz[1]=riga;
	document.getElementById(""+coordIniz[1]+'-'+coordIniz[0]+'p').classList.add("bordo");
	isSelezionabile=true;
	
});


$('.letters').on('mouseover',mouseOverFunction);
$('.letters').on('touchmove',function(evt){
  var touch = evt.originalEvent.touches[0]
  highlightHoveredObject(touch.clientX, touch.clientY);
});

function mouseOverFunction(){
	if(isSelezionabile==true){
		y=$(this).index();
		x=$(this).closest('tr').index();
		selezioneOver(x,y);
	}
}

function highlightHoveredObject(x, y) {
    $('.letters').each(function() {
      // check if is inside boundaries
      if (!(
          x <= $(this).offset().left || x >= $(this).offset().left + $(this).outerWidth() ||
          y <= $(this).offset().top  || y >= $(this).offset().top + $(this).outerHeight()
      )) {
        touchOverFunction($(this));
      }
    });
}

function touchOverFunction(object){
	if(isSelezionabile==true){
		y=object.index();
		x=object.closest('tr').index();
		selezioneOver(x,y);
	}
}

function selezioneOver(x,y){
	if(coordIniz[1]==x){
		rimuoviBordo();
		if(coordIniz[0]-y<0){
			for(var i=coordIniz[0];i<=y;i++){
				document.getElementById(""+x+'-'+(i)+'p').classList.add("bordo");
			}
		}
		else{
			for(var i=coordIniz[0];i>=y;i--){
				document.getElementById(""+x+'-'+(i)+'p').classList.add("bordo");
			}
		}
	}	
	if(coordIniz[0]==y){
		rimuoviBordo();
		if(coordIniz[1]-x<0){
			for(var i=coordIniz[1];i<=x;i++){
				document.getElementById(""+i+'-'+y+'p').classList.add("bordo");
			}
		}
		else{
			for(var i=coordIniz[1];i>=x;i--){
				document.getElementById(""+i+'-'+y+'p').classList.add("bordo");
			}
		}
	}	
	if(coordIniz[1]-x==coordIniz[0]-y){
		rimuoviBordo();
		if(coordIniz[0]-y<0){
			for(var i=0;i<= -(coordIniz[1]-x);i++){
				document.getElementById(""+(coordIniz[1]+i)+'-'+(coordIniz[0]+i)+'p').classList.add("bordo");
			}
		}
		else{
			for(var i=0;i<=(coordIniz[1]-x);i++){
				document.getElementById(""+(coordIniz[1]-i)+'-'+(coordIniz[0]-i)+'p').classList.add("bordo");
			}
		}
		
	}
	if(coordIniz[1]-x==-(coordIniz[0]-y)){
		rimuoviBordo();
		if(coordIniz[0]-y<0){
			for(var i=0;i<= (coordIniz[1]-x);i++){
				document.getElementById(""+(coordIniz[1]-i)+'-'+(coordIniz[0]+i)+'p').classList.add("bordo");
			}
		}
		else{
			for(var i=0;i<=-(coordIniz[1]-x);i++){
				document.getElementById(""+(coordIniz[1]+i)+'-'+(coordIniz[0]-i)+'p').classList.add("bordo");
			}
		}
	}
}


$('body').on('mouseup touchend',function(){   
   var colonna = y;
   var riga = x;
   isSelezionabile=false;
   rimuoviBordo();
coordFin[0]=colonna;
coordFin[1]=riga;


if(coordIniz[0]!=coordFin[0] || coordIniz[1]!=coordFin[1]){
	controllaParola();
}
});



function controllaParola(){
	var caso= controllaCaso();
	if(caso==1){
		for(var i=coordIniz[1];i<=coordFin[1];i++){
			parola+=lettere[i][coordIniz[0]];
		}
	}
	if(caso==2){
		for(var i=coordIniz[1];i>=coordFin[1];i--){
			parola+=lettere[i][coordIniz[0]];
		}
	}
	if(caso==3){
		for(var i=coordIniz[0];i<=coordFin[0];i++){
			parola+=lettere[coordIniz[1]][i];
		}
	}
	if(caso==4){
		for(var i=coordIniz[0];i>=coordFin[0];i--){
			parola+=lettere[coordIniz[1]][i];
		}
	}
	if(caso==5){
		for(var i=0;i<=-(coordIniz[0]-coordFin[0]);i++){
			parola+=lettere[coordIniz[1]+i][coordIniz[0]+i];
		}
	}
	if(caso==6){
		for(var i=0;i<=coordIniz[0]-coordFin[0];i++){
			parola+=lettere[coordIniz[1]-i][coordIniz[0]-i];
		}
	}
	if(caso==7){
		for(var i=0;i<=-(coordIniz[0]-coordFin[0]);i++){
			parola+=lettere[coordIniz[1]-i][coordIniz[0]+i];
		}
	}
	if(caso==8){
		for(var i=0;i<=(coordIniz[0]-coordFin[0]);i++){
			parola+=lettere[coordIniz[1]+i][coordIniz[0]-i];
		}
		
	}
	
	
	
	togliParola();
}




function togliParola(){
	var prova=parola;
	parola="";
	parolaCont=prova.split("").reverse().join("");//parola al contrario
	for(var i=0;i<parole.length;i++){
		if(prova.localeCompare(parole[i])==0||parolaCont.localeCompare(parole[i])==0){
			if ($('#'+i+'c').css("color") !="rgb(238, 130, 36)"){
				document.getElementById(i+'c').style.color = "rgb(238, 130, 36)";
				aggiungiBordo();
				numTrovate++;
			}
		}
	}
	
	
	if(numTrovate==parole.length){
		var modal = document.getElementById('myModal');
		var span = document.getElementsByClassName("close")[0];
		document.getElementById("1-13p").classList.add("bordosoluzione");
		document.getElementById("2-12p").classList.add("bordosoluzione");
		document.getElementById("3-1p").classList.add("bordosoluzione");
		document.getElementById("4-1p").classList.add("bordosoluzione");
		document.getElementById("5-1p").classList.add("bordosoluzione");
		document.getElementById("6-5p").classList.add("bordosoluzione");
		document.getElementById("6-10p").classList.add("bordosoluzione");
		document.getElementById("9-9p").classList.add("bordosoluzione");
		document.getElementById("9-10p").classList.add("bordosoluzione");
		document.getElementById("9-11p").classList.add("bordosoluzione");
		document.getElementById("scritta").innerHTML= "Complimenti! La soluzione è : <b>ANDY WARHOL</b>";
		document.getElementById("risultato").src="../img/LuiFelice.png";
		document.getElementById("risultato").alt="Immagine bambini/a felice";
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
}


function rimuoviBordo(){
	for(var i=0;i<lettere.length;i++){
		for(var j=0;j<lettere[i].length;j++){
			document.getElementById(""+i+'-'+j+'p').classList.remove("bordo");
		}
	}
}

function aggiungiBordo(){
	
	var caso = controllaCaso();
	if(caso==1){
		for(var i=coordIniz[1];i<=coordFin[1];i++){
			document.getElementById(""+i+'-'+coordIniz[0]+'p').classList.add("bordofinale");
		}
	}
	if(caso==2){
		for(var i=coordIniz[1];i>=coordFin[1];i--){
			document.getElementById(""+i+'-'+coordIniz[0]+'p').classList.add("bordofinale");
		}
	}
	if(caso==3){
		for(var i=coordIniz[0];i<=coordFin[0];i++){
			document.getElementById(""+coordIniz[1]+'-'+i+'p').classList.add("bordofinale");
		}
	}
	if(caso==4){
		for(var i=coordIniz[0];i>=coordFin[0];i--){
			document.getElementById(""+coordIniz[1]+'-'+i+'p').classList.add("bordofinale");
		}
	}
	if(caso==5){
		for(var i=0;i<=-(coordIniz[0]-coordFin[0]);i++){
			document.getElementById(""+(coordIniz[1]+i)+'-'+(coordIniz[0]+i)+'p').classList.add("bordofinale");
		}
	}
	if(caso==6){
		for(var i=0;i<=coordIniz[0]-coordFin[0];i++){
			document.getElementById(""+(coordIniz[1]-i)+'-'+(coordIniz[0]-i)+'p').classList.add("bordofinale");
		}
	}
	if(caso==7){
		for(var i=0;i<=-(coordIniz[0]-coordFin[0]);i++){
			document.getElementById(""+(coordIniz[1]-i)+'-'+(coordIniz[0]+i)+'p').classList.add("bordofinale");
		}
	}
	if(caso==8){
		for(var i=0;i<=coordIniz[0]-coordFin[0];i++){
			document.getElementById(""+(coordIniz[1]+i)+'-'+(coordIniz[0]-i)+'p').classList.add("bordofinale");
		}
	}
}



function controllaCaso(){
	if(coordIniz[0]==coordFin[0]){ //verticale
		if(coordFin[1]>coordIniz[1]){
			return 1;
		}
		else{
			return 2;
		}
	}
	
	if(coordIniz[1]==coordFin[1]){ //orizzontale
		if(coordFin[0]>coordIniz[0]){
			return 3;
		}
		else{
			return 4;
		}
	}
	
	if(coordIniz[0]-coordFin[0]==coordIniz[1]-coordFin[1]){ //obliquo verso destra basso e sinistra alto
		if(coordIniz[0]-coordFin[0]<0){
			return 5;
		}
		else{
			return 6;
		}
	}
	
	
	if(coordIniz[0]-coordFin[0]==-(coordIniz[1]-coordFin[1])){ //obliquo verso destra alto e sinistra basso
		if(coordIniz[0]-coordFin[0]<0){
			return 7;
		}
		else{
			return 8;
		}
	}
	

}

});
function mostraSoluzione(){
	var modal = document.getElementById('myModal');
		var span = document.getElementsByClassName("close")[0];
		document.getElementById("scritta").innerHTML= " La soluzione è : <b>ANDY WARHOL</b>";
		document.getElementById("risultato").src="";
		document.getElementById("risultato").alt="Immagine soluzione";
		
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


