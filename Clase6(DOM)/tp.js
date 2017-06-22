var misPeliculas = [];
var botonAgregarPelicula = document.getElementById("agregarPelicula");
var botonEliminarPelicula = document.getElementById("eliminarPelicula");
var botonListarPeliculas = document.getElementById("listarPeliculas");

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
    mostrarPeliculas();
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
	mostrarPeliculas();
}

function mostrarPeliculas(){
	var bodyChildren = document.body.children;
	if (bodyChildren["divTable"] != null) {
		bodyChildren["divTable"].remove();
	};
	var divTable = document.createElement("div");
	var table = document.createElement("table");
	// var thead = document.createElement("thead");
	// var tbody = document.createElement("tbody");
	var trHeader = document.createElement("tr");
	var thId = document.createElement("th");
	var thTitulo = document.createElement("th");
	thId.appendChild(document.createTextNode("ID"));
	thTitulo.appendChild(document.createTextNode("Titulo"));
	trHeader.appendChild(thId);
	trHeader.appendChild(thTitulo);
	table.appendChild(trHeader);
	for (var i = 0; i < misPeliculas.length; i++) {
		var tr = document.createElement("tr");
		var th = document.createElement("th");
		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		td1.appendChild(document.createTextNode(misPeliculas[i].id));
		td2.appendChild(document.createTextNode(misPeliculas[i].titulo));
		tr.appendChild(td1);
		tr.appendChild(td2);
		table.appendChild(tr);
	};
	table.setAttribute("class", "table table-bordered table-hover");
	divTable.appendChild(table);
	document.body.appendChild(divTable);
	document.getElementsByTagName("div")[1].setAttribute("id", "divTable");
}

botonAgregarPelicula.onclick = function(){
	agregarPeliculas();
}

botonEliminarPelicula.onclick = function(){
	eliminarPelicula();
}

botonListarPeliculas.onclick = function(){
	mostrarPeliculas();
}