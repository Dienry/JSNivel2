/*var menu = document.getElementById("menu");
var itemsMenu = document.getElementsByClassName("menu-item");
var tagsHtml = document.getElementsByTagName("li");
var querySelector = document.querySelector("ul li"); //Me trae el primer li que es hijo de ul, como es CSS
var querySelectorLista = document.querySelectorAll("ul li"); //Me traer todos los li dentro de ul*/

document.createElement("P"); //Se suelen poner en mayuscula los elementos
var texto = document.createTextNode("Este es un texto creado");

function eliminarElemento(elemento){
	elemento.parentElement.removeChild(elemento);
	return elemento;//Para saber que elimino
}

//-------------------------------
var lista = "<ul>"

var peliculas = [
	{
		titulo: "Titanic",
		id: "1"
	},
	{
		titulo: "La Sirenita",
		id: "2"
	},
	{
		titulo: "El Padrino",
		id: "3"
	}
];

for (var i = 0; i < peliculas.length; i++) {
	lista += "<li>Titulo: " + peliculas[i].titulo + "<br>Id: " + peliculas[i].id + "</li>";
};

lista += "</ul>"

document.write(lista);