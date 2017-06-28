var botonAgregarTarea = document.getElementById("agregarTarea");
var botonListarTareas = document.getElementById("listarTareas");
var idTarea = 1;

function Lista (){
	this.tareas = [];
	this.contenedor = document.querySelector("ul");
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
			this.contenedor.appendChild(this.tareas[i].contenedor);
		}
		console.log(this);
	}
}
var lista = new Lista ();

function Tarea (titulo, descripcion){
	this.id = idTarea;
	idTarea += 1;
	this.titulo = titulo;
	this.descripcion = descripcion;
	this.completado = false;
	this.contenedor;
	this.cambiarEstado = function(){
		if (this.completado == false) {
			this.completado = true;
			this.setAttribute("class", "leido");
		} else {
			this.completado = false;
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
		this.contenedor.querySelector("h2").innerText = this.titulo;
		this.contenedor.querySelector("p").innerText = this.descripcion;
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
		botonEstado.setAttribute("class", "btn btn-info");
		botonEstado.addEventListener("click", function(){
			self.cambiarEstado();
		});

		var botonEliminar = document.createElement("button");
		botonEliminar.innerHTML = "Eliminar";
		botonEliminar.setAttribute("class", "btn btn-danger");
		botonEliminar.addEventListener("click", function(){
			lista.eliminarTarea(self);
			self.contenedor.parentNode.removeChild(self.contenedor);
		});
		var liTarea = document.createElement("li");
		var h2 = document.createElement("h2");
		h2.innerHTML = this.titulo;
		var p = document.createElement("p");
		p.innerHTML = this.descripcion;
		liTarea.appendChild(h2);
		liTarea.appendChild(p);
		liTarea.appendChild(botonEditar);
		liTarea.appendChild(botonEliminar);
		liTarea.appendChild(botonEstado);
		this.contenedor = liTarea;
	}
}

botonAgregarTarea.addEventListener("click", function(){
	var tituloTarea = document.getElementById("tituloTarea");
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
