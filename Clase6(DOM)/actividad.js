var noticias = [];
function Noticias(titulo, texto, urlImagen){
	this.titulo = titulo;
	this.texto = texto;
	this.urlImagen = urlImagen;
}

while(confirm("¿Desea agregar una noticia?")){
	var noticia = new Noticias(prompt("Ingrese el titulo"), prompt("Ingrese el texto de la noticia"), prompt("Ingrese la url de la imagen si es que lo tiene"));
	if (noticia.urlImagen == null) {
		noticia.urlImagen = "";
	};
	noticias.push(noticia);
}

var noticia = "<article>";

for (var i = 0; i < noticias.length; i++) {
	noticia += "<h1>" + noticias[i].titulo + "</h1>" + "<p>" + noticias[i].texto + "</p>" + "<img src='" + noticias[i].urlImagen + "'</img>";
};

noticia += "</article>";

document.write(noticia);