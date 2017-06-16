var misPeliculas = [];

function Pelicula(id, titulo){
  this.id = id;
  this.titulo = titulo;
}

var pelicula1 = new Pelicula(1, "Snatch");
var pelicula2 = new Pelicula(2, "Titanic");
var pelicula3 = new Pelicula(3, "Ice Age");

misPeliculas.push(pelicula2);
misPeliculas.push(pelicula1);
misPeliculas.push(pelicula3);


function agregarPeliculas(){
	while(confirm("¿Desea agregar una pelicula?")){
		var id = parseInt(prompt("Ingrese el id para la pelicula"));
		while(isNaN(id)){
			id = parseInt(prompt("Ingrese el id para la pelicula"));
		}
		var tituloPelicula = prompt("Ingrese titulo de la pelicula");
	    
		function agregaPeliculaALista(){
			var peli = new Pelicula(id, tituloPelicula);
		    misPeliculas.push(peli);
		}

	    if (misPeliculas.length == 0) {
	    	agregaPeliculaALista();
	    } else {
	    	for (var i = 0; i < misPeliculas.length; i++) {
	    		console.log(misPeliculas[i].id);
	    		if (misPeliculas[i].id == id) {
					console.log("El id", id, "Ya existe");
	    			break;
	    		} else {
	    			agregaPeliculaALista();
	    			break;
	    		}
	    	}
	    }
    }
}

function ordenarPeliculas(){
	var valorOrdenamiento = prompt("¿Quiere ordenar por id o por título?");
	var variablesPosibles = ["id", "titulo"];

	while(!variablesPosibles.includes(valorOrdenamiento)){
		var valorOrdenamiento = prompt("¿Quiere ordenar por id o por título?");
	}

	switch (valorOrdenamiento) {
		case "id":
			console.log(misPeliculas.sort(function(a, b){return parseInt(a.id) - parseInt(b.id);}));
			break;
		case "titulo":
			console.log(misPeliculas.sort(function(a, b){
				var nameA = a.titulo.toLowerCase(), nameB = b.titulo.toLowerCase();
			    if (nameA < nameB) {
			        return -1; 
			    } else if (nameA > nameB){
			        return 1;
			    } else {
			    	return 0; 
			    }
			}));
			break;
		default:
			console.log("No se pudo ordenar");
			break;
	}
}

function eliminarPelicula(){
	var id = parseInt(prompt("Ingrese el id de la pelicula a eliminar"));
	while(isNaN(id)){
		id = parseInt(prompt("Ingrese el id de la pelicula a eliminar"));
	}

	for (var i = 0; i < misPeliculas.length; i++){
		
		console.log(misPeliculas[i]);
		if (misPeliculas[i].id == id) {
			misPeliculas.splice(misPeliculas.indexOf(misPeliculas[i]), 1);
			console.log("La pelicula con el id", id, "fue eliminada");
			break;
		}
	}
}

function mostrarPeliculas(){
	var table = document.createElement("table");
	var tr = document.createElement("tr");
	var th = document.createElement("th");
	var td = document.createElement("td");
	//var listaPeliculas = "<table><tr><th>Id</th><th>Titulo</th></tr>";
	table.appendChild(tr.appendChild(th.appendChild(document.createTextNode("ID"))));
	tr.appendChild(th.appendChild(document.createTextNode("Titulo")));
	for (var i = 0; i < misPeliculas.length; i++) {
		//listaPeliculas += "<tr><td>" + misPeliculas[i].id + "</td><td>" + misPeliculas[i].titulo + "</td></tr>"
		table.appendChild(tr.appendChild(td.appendChild(document.createTextNode(misPeliculas[i].id))));
		tr.appendChild(td.appendChild(document.createTextNode(misPeliculas[i].titulo)))
	};

	// listaPeliculas += "</table>";
	// document.write(listaPeliculas);
	document.body.appendChild(table);
}

document.getElementById("agregarPelicula").onclick = function(){
	agregarPeliculas();
}

document.getElementById("eliminarPelicula").onclick = function(){
	eliminarPelicula();
}

document.getElementById("listarPeliculas").onclick = function(){
	mostrarPeliculas();
}