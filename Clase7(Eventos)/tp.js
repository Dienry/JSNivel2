var misPeliculas = [];
var botonAgregarPelicula = document.getElementById("agregarPelicula");
var botonEliminarPelicula = document.getElementById("eliminarPelicula");
var botonListarPeliculas = document.getElementById("listarPeliculas");
var botonFiltrarPorId = document.getElementById("filtroId");
var botonFiltrarPorTitulo = document.getElementById("filtroTitulo");

function Pelicula(id, titulo, fecha){
  this.id = id;
  this.titulo = titulo;
  this.fecha = fecha;
}


botonAgregarPelicula.addEventListener("click", function(){
	var idPelicula = document.getElementById("idPelicula");
	var tituloPelicula = document.getElementById("titulo");
	var fechaPelicula = document.getElementById("fecha");
	var peli = new Pelicula(idPelicula.value, tituloPelicula.value, fechaPelicula.value);
	var num = 0;
    if (misPeliculas.length == 0) {
    	misPeliculas.push(peli);
    } else {
    	for (var i = 0; i < misPeliculas.length; i++) {
    		if (misPeliculas[i].id == idPelicula.value) {
				num += 1;
    		}
    	}
    	if (num > 0) {
    		alert("El id ", idPelicula, "ya existe!");
    	} else {
    		misPeliculas.push(peli);
    	}
    }
    idPelicula.value = "";
    tituloPelicula.value = "";
    fechaPelicula.value = "";
});


botonEliminarPelicula.addEventListener("click", function(){
	var idPelicula = document.getElementById("idPelicula");
	for (var i = 0; i < misPeliculas.length; i++){
		if (misPeliculas[i].id == idPelicula.value) {
			misPeliculas.splice(misPeliculas.indexOf(misPeliculas[i]), 1);
			alert("La pelicula con el id " + idPelicula.value + " fue eliminada correctamente");
			break;
		}
	}
	idPelicula.value = "";
});

botonListarPeliculas.addEventListener("click", function(){
	var bodyChildren = document.body.children;
	if (bodyChildren["divTable"] != null) {
		bodyChildren["divTable"].remove();
	};
	var divTable = document.createElement("div");
	var table = document.createElement("table");
	var thead = document.createElement("thead");
	var tbody = document.createElement("tbody");
	var trHeader = document.createElement("tr");
	var thId = document.createElement("th");
	var thTitulo = document.createElement("th");
	var thFecha = document.createElement("th");
	thId.appendChild(document.createTextNode("ID"));
	thTitulo.appendChild(document.createTextNode("Titulo"));
	thFecha.appendChild(document.createTextNode("Fecha"));
	trHeader.appendChild(thId);
	trHeader.appendChild(thTitulo);
	trHeader.appendChild(thFecha);
	thead.appendChild(trHeader);
	table.appendChild(thead);
	for (var i = 0; i < misPeliculas.length; i++) {
		var tr = document.createElement("tr");
		var th = document.createElement("th");
		var td1 = document.createElement("td");
		td1.setAttribute("class", "col-xs-2");
		var td2 = document.createElement("td");
		td2.setAttribute("class", "col-xs-4");
		var td3 = document.createElement("td");
		td3.setAttribute("class", "col-xs-4");
		td1.appendChild(document.createTextNode(misPeliculas[i].id));
		td2.appendChild(document.createTextNode(misPeliculas[i].titulo));
		td3.appendChild(document.createTextNode(misPeliculas[i].fecha));
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tbody.appendChild(tr);
		table.appendChild(tbody);
	};
	table.setAttribute("class", "table table-hover");
	divTable.appendChild(table);
	divTable.setAttribute("id", "divTable");
	divTable.setAttribute("class", "col-xs-6");
	document.body.appendChild(divTable);
});

botonFiltrarPorId.addEventListener("click", function(){
	var idPelicula = document.getElementById("idPelicula");
	var bodyChildren = document.body.children;
	if (bodyChildren["divTable"] != null) {
		bodyChildren["divTable"].remove();
	};
	var divTable = document.createElement("div");
	var table = document.createElement("table");
	var thead = document.createElement("thead");
	var tbody = document.createElement("tbody");
	var trHeader = document.createElement("tr");
	var thId = document.createElement("th");
	var thTitulo = document.createElement("th");
	var thFecha = document.createElement("th");
	thId.appendChild(document.createTextNode("ID"));
	thTitulo.appendChild(document.createTextNode("Titulo"));
	thFecha.appendChild(document.createTextNode("Fecha"));
	trHeader.appendChild(thId);
	trHeader.appendChild(thTitulo);
	trHeader.appendChild(thFecha);
	thead.appendChild(trHeader);
	table.appendChild(thead);
	for (var i = 0; i < misPeliculas.length; i++) {
		if (misPeliculas[i].id == idPelicula.value) {
			var tr = document.createElement("tr");
		var th = document.createElement("th");
		var td1 = document.createElement("td");
		td1.setAttribute("class", "col-xs-2");
		var td2 = document.createElement("td");
		td2.setAttribute("class", "col-xs-4");
		var td3 = document.createElement("td");
		td3.setAttribute("class", "col-xs-4");
		td1.appendChild(document.createTextNode(misPeliculas[i].id));
		td2.appendChild(document.createTextNode(misPeliculas[i].titulo));
		td3.appendChild(document.createTextNode(misPeliculas[i].fecha));
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tbody.appendChild(tr);
		table.appendChild(tbody);
	};
	table.setAttribute("class", "table table-hover");
	divTable.appendChild(table);
	divTable.setAttribute("id", "divTable");
	divTable.setAttribute("class", "col-xs-6");
	document.body.appendChild(divTable);
		}
});
botonFiltrarPorTitulo.addEventListener("click", function(){
	var tituloPelicula = document.getElementById("titulo");
	var bodyChildren = document.body.children;
	if (bodyChildren["divTable"] != null) {
		bodyChildren["divTable"].remove();
	};
	var divTable = document.createElement("div");
	var table = document.createElement("table");
	var thead = document.createElement("thead");
	var tbody = document.createElement("tbody");
	var trHeader = document.createElement("tr");
	var thId = document.createElement("th");
	var thTitulo = document.createElement("th");
	var thFecha = document.createElement("th");
	thId.appendChild(document.createTextNode("ID"));
	thTitulo.appendChild(document.createTextNode("Titulo"));
	thFecha.appendChild(document.createTextNode("Fecha"));
	trHeader.appendChild(thId);
	trHeader.appendChild(thTitulo);
	trHeader.appendChild(thFecha);
	thead.appendChild(trHeader);
	table.appendChild(thead);
	for (var i = 0; i < misPeliculas.length; i++) {
		if (misPeliculas[i].titulo == titulo.value) {
			var tr = document.createElement("tr");
		var th = document.createElement("th");
		var td1 = document.createElement("td");
		td1.setAttribute("class", "col-xs-2");
		var td2 = document.createElement("td");
		td2.setAttribute("class", "col-xs-4");
		var td3 = document.createElement("td");
		td3.setAttribute("class", "col-xs-4");
		td1.appendChild(document.createTextNode(misPeliculas[i].id));
		td2.appendChild(document.createTextNode(misPeliculas[i].titulo));
		td3.appendChild(document.createTextNode(misPeliculas[i].fecha));
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tbody.appendChild(tr);
		table.appendChild(tbody);
	};
	table.setAttribute("class", "table table-hover");
	divTable.appendChild(table);
	divTable.setAttribute("id", "divTable");
	divTable.setAttribute("class", "col-xs-6");
	document.body.appendChild(divTable);
		}
});