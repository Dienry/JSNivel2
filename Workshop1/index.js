var botonAgregarTarea = document.getElementById("agregarTarea");
var botonListarTareas = document.getElementById("listarTareas");
var botonEliminarLista = document.getElementById("eliminarLista");
var selectOrden = document.getElementById("selectOrden");
var idTarea = 1;

function Lista (){
	this.tareas = [];
	this.contenedor = document.querySelector("ul");
	this.eliminarLista = function(){
		this.tareas = [];
		this.contenedor.parentNode.removeChild(this.contenedor);
	}
	this.eliminarTarea = function(tarea){
		for (var i = 0; i < this.tareas.length; i++){
			if (this.tareas[i].id == tarea.id) {
				this.tareas.splice(this.tareas.indexOf(this.tareas[i]), 1);
				this.listarTareas();
			}
		}
	}
	this.listarTareas = function(){
		for (var i = 0; i < this.tareas.length; i++) {
			this.contenedor.appendChild(this.tareas[i].contenedorTarea);
		}
	}
	this.ordenarLista = function(orden){
		var listaOrdenada = [];
		for (var i = 0; i < this.tareas.length; i++) {
			listaOrdenada.push(this.tareas[i]);
		}
		if (orden == "A-Z") {
			listaOrdenada.sort(function(a, b){
				var tituloA=a.titulo.toLowerCase(), tituloB=b.titulo.toLowerCase()
			    if (tituloA < tituloB) //sort string ascending
			        return -1 
			    if (tituloA > tituloB)
			        return 1
			    return 0 //default return value (no sorting)
			})
			for (var i = 0; i < listaOrdenada.length; i++) {
					this.contenedor.appendChild(listaOrdenada[i].contenedorTarea);
				}
		} else if (orden == "Z-A"){
			listaOrdenada.sort(function(a, b){
				var tituloA=a.titulo.toLowerCase(), tituloB=b.titulo.toLowerCase()
			    if (tituloA < tituloB) //sort string ascending
			        return 1 
			    if (tituloA > tituloB)
			        return -1
			    return 0 //default return value (no sorting)
			})
			for (var i = 0; i < listaOrdenada.length; i++) {
					this.contenedor.appendChild(listaOrdenada[i].contenedorTarea);
				}
		} else if (orden == "IdDesc") {
			listaOrdenada.sort(function(a, b) {
    			return a.id + b.id;
			})
			for (var i = 0; i < listaOrdenada.length; i++) {
					this.contenedor.appendChild(listaOrdenada[i].contenedorTarea);
				}
		} else {
			this.listarTareas();
		}
	}
}
var lista = new Lista ();

function Tarea (titulo, descripcion){
	this.id = idTarea;
	idTarea += 1;
	this.titulo = titulo;
	this.descripcion = descripcion;
	this.completado = false;
	this.contenedorTarea;
	this.cambiarEstado = function(){
		if (this.completado == false) {
			this.completado = true;
			this.contenedorTarea.setAttribute("class", "leido");
		} else {
			this.completado = false;
			this.contenedorTarea.removeAttribute("class", "leido");
		}
	}
	this.editarTarea = function(){
		if (confirm("¿Desea cambiar el titulo?")) {
			var nuevoTitulo = prompt("Ingrese el nuevo titulo de la tarea", this.titulo);
			this.titulo = nuevoTitulo;
		} if (confirm("¿Desea cambiar la descripcion de la misma?")){
			var nuevaDescripcion = prompt("Ingrese la nueva descripcion de la tarea", this.descripcion);
			this.descripcion = nuevaDescripcion;
		}
		this.contenedorTarea.querySelector("h2").innerText = this.titulo;
		this.contenedorTarea.querySelector("p").innerText = this.descripcion;
	}

	this.crearHTML = function () {
		var self = this;
		
		var botonEditar = document.createElement("button");
		botonEditar.innerHTML = "Editar";
		botonEditar.setAttribute("class", "btn btn-info");
		botonEditar.addEventListener("click", function(){
			self.editarTarea();
		});

		var botonEstado = document.createElement("button");
		botonEstado.innerHTML = "Leido";
		botonEstado.setAttribute("class", "btn btn-success");
		botonEstado.addEventListener("click", function(){
			self.cambiarEstado();
		});

		var botonEliminar = document.createElement("button");
		botonEliminar.innerHTML = "Eliminar";
		botonEliminar.setAttribute("class", "btn btn-danger");
		botonEliminar.addEventListener("click", function(){
			lista.eliminarTarea(self);
			self.contenedorTarea.parentNode.removeChild(self.contenedorTarea);
		});
		var liTarea = document.createElement("li");
		var h2 = document.createElement("h2");
		h2.setAttribute("class", "color");
		h2.innerHTML = this.titulo;
		var p = document.createElement("p");
		p.innerHTML = this.descripcion;
		liTarea.appendChild(h2);
		liTarea.appendChild(p);
		liTarea.appendChild(botonEditar);
		liTarea.appendChild(botonEliminar);
		liTarea.appendChild(botonEstado);
		this.contenedorTarea = liTarea;
	}
}

botonAgregarTarea.addEventListener("click", function(){
	var tituloTarea = document.getElementById("tituloTarea");
	tituloTarea.value = tituloTarea.value[0].toUpperCase() + tituloTarea.value.slice(1);
	var descripcionTarea = document.getElementById("descripcionTarea");
	if (tituloTarea.value == "" | descripcionTarea.value == "") {
		alert("Por favor complete ambos campos");
	} else {
		var tarea = new Tarea(tituloTarea.value, descripcionTarea.value);
	    tituloTarea.value = "";
	    descripcionTarea.value = "";
	    tarea.crearHTML();
	    lista.tareas.push(tarea);
	    lista.listarTareas();
	}
});

botonListarTareas.addEventListener("click", function(){
	lista.listarTareas();
});

botonEliminarLista.addEventListener("click", function(){
	lista.eliminarLista();
});

selectOrden.addEventListener("change", function(){
	lista.ordenarLista(selectOrden.value);
});