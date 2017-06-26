var noticias = [];
var botonAgregar = document.querySelector(".agregar");
var botonListar = document.querySelector(".listar");

function Noticias(id, titulo, texto, urlImagen){
	this.id = id;
	this.titulo = titulo;
	this.texto = texto;
	this.urlImagen = urlImagen;
}

botonAgregar.addEventListener("click", function(){
	var idNoticia = document.getElementById("idNoticia");
	var tituloNoticia = document.getElementById("titulo");
	var textoNoticia = document.getElementById("noticia");
	var urlImagenNoticia = document.getElementById("urlImagen");
	if (idNoticia.value === "" || tituloNoticia.value === "" || textoNoticia.value === ""|| urlImagenNoticia.value === "" ) {
		alert("Por favor complete todos los campos");
	} else{
		var noticia = new Noticias(idNoticia.value, tituloNoticia.value, textoNoticia.value, urlImagenNoticia.value);
		noticias.push(noticia);

		idNoticia.value = "";
		tituloNoticia.value = "";
		textoNoticia.value = "";
		urlImagenNoticia.value = "";
	}
});

botonListar.addEventListener("click", function(){
	var bodyChildren = document.body.children;
	if (bodyChildren["divTable"] != null) {
		bodyChildren["divTable"].remove();
	};
	//var enumLeido = 1;
	var divTable = document.createElement("div");
	var table = document.createElement("table");
	var thead = document.createElement("thead");
	var tbody = document.createElement("tbody");
	var trHeader = document.createElement("tr");
	var thId = document.createElement("th");
	var thNoticia = document.createElement("th");
	var thTitulo = document.createElement("th");
	var thImagen = document.createElement("th");
	thId.appendChild(document.createTextNode("Id"));
	thNoticia.appendChild(document.createTextNode("Noticia"));
	thTitulo.appendChild(document.createTextNode("Titulo"));
	thImagen.appendChild(document.createTextNode("Imagen"));
	trHeader.appendChild(thId);
	trHeader.appendChild(thTitulo);
	trHeader.appendChild(thNoticia);
	trHeader.appendChild(thImagen);
	thead.appendChild(trHeader);
	table.appendChild(thead);
	for (var i = 0; i < noticias.length; i++) {
		var tr = document.createElement("tr");
		var th = document.createElement("th");
		var td1 = document.createElement("td");
		td1.setAttribute("class", "col-xs-2");
		var td2 = document.createElement("td");
		td2.setAttribute("class", "col-xs-2");
		var td3 = document.createElement("td");
		td3.setAttribute("class", "tituloTabla");
		td3.setAttribute("class", "col-xs-6");
		var td4 = document.createElement("img");
		td4.setAttribute("class", "col-xs-12");
		// var td5 = document.createElement("td");
		// td2.setAttribute("class", "col-xs-2");
		var botonLeido = document.createElement("button");
		td1.appendChild(document.createTextNode(noticias[i].id));
		td2.appendChild(document.createTextNode(noticias[i].titulo));
		td3.appendChild(document.createTextNode(noticias[i].texto));
		td4.setAttribute("src",noticias[i].urlImagen);
		// td5.setAttribute("class", "leido" + enumLeido);
		// td5.setAttribute("class", "leido" + enumLeido);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tbody.appendChild(tr);
		table.appendChild(tbody);
	};
	table.setAttribute("class", "table table-hover");
	divTable.appendChild(table);
	divTable.setAttribute("id", "divTable");
	divTable.setAttribute("class", "col-xs-6");
	document.body.appendChild(divTable);
});




