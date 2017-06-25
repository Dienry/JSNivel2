var boton = document.querySelector(".btn");

function saludar(){
	alert("Hola");
}

boton.onclick = function(){
	saludar();
}

var contenedor = document.querySelector(".container");
contenedor.addEventListener("mouseenter", function(){
	contenedor.style.background = "red";
});

contenedor.addEventListener("mouseout", function(){
	contenedor.style.background = "transparent";
});

contenedor.addEventListener("click", function(event){ //El primer elemento de la funcion es lo que devuelve el EventListener de lo que hizo
	console.log("x:", event.clientX, "y:", event.clientY); //coordenadas dentro del DOM
});

document.addEventListener("keypress", function(event){
	console.log("La tecla fue:", event.key);
});