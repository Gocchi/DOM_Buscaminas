//Celdas Vacias
var celdasVacias = document.getElementsByClassName("vacio").length;
var elementosVacios = [];
//Celdas con Numero
var celdasNumero = document.getElementsByClassName("numero").length;
var elementosNumeros= [];
//Celdas con Bombas
var celdasBomba = document.getElementsByClassName("bomba").length;
var elementosBombas= [];






//recorre Celdas Vacias
for (var i= 0; i < celdasVacias; i++){
	elementosVacios[i] = document.getElementsByClassName("vacio")[i];
} 

for (var i= 0; i < elementosVacios.length; i++){
	elementosVacios[i].addEventListener("click", mostrarVacios);
}

function mostrarVacios(){
	this.style.backgroundColor = "pink";
}


//recorre Celdas con Numero
for (var i= 0; i < celdasNumero; i++){
	elementosNumeros[i] = document.getElementsByClassName("numero")[i];
} 

for (var i=0; i < elementosNumeros.length; i++){
	elementosNumeros[i].addEventListener("click", mostrarNumeros);
}
function mostrarNumeros(){
	this.innerText= "1"; 
}

//recorre Celdas con Bombas
for (var i= 0; i < celdasBomba; i++){
		elementosBombas[i] = document.getElementsByClassName("bomba")[i];
} 

for (var i=0; i < elementosBombas.length; i++){
		elementosBombas[i].addEventListener("click", perdiste);
}

function perdiste(){
	for (var i = 0; i < celdasBomba; i++){
		elementosBombas[i].innerHTML = "<img src= bomba.jpg width='50'>"
	}
}







	




