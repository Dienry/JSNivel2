//Guardar en LocalStorage
//Listar los empleados en una tabla
//Buscar por DNI

function Colegio (nombre){
	this.nombre = nombre;
	this.empleados = [];
	this.contenedor = document.createElement("table");
}
Colegio.prototype.listarEmpleados = function(){
	var divTable = document.createElement("div");
	var table = document.createElement("table");
	var thead = document.createElement("thead");
	var tbody = document.createElement("tbody");
	var trHeader = document.createElement("tr");
	var thNombre = document.createElement("th");
	var thDni = document.createElement("th");
	var thMateria = document.createElement("th");
	thNombre.appendChild(document.createTextNode("Nombre"));
	thDni.appendChild(document.createTextNode("Dni"));
	thMateria.appendChild(document.createTextNode("Materia"));
	trHeader.appendChild(thNombre);
	trHeader.appendChild(thDni);
	trHeader.appendChild(thMateria);
	thead.appendChild(trHeader);
	table.appendChild(thead);
	for (var i = 0; i < this.empleados.length; i++) {
		var tr = document.createElement("tr");
		var th = document.createElement("th");
		var td1 = document.createElement("td");
		td1.setAttribute("class", "col-xs-4");
		var td2 = document.createElement("td");
		td2.setAttribute("class", "col-xs-4");
		var td3 = document.createElement("td");
		td3.setAttribute("class", "col-xs-4");
		td1.appendChild(document.createTextNode(this.empleados[i].nombre));
		td2.appendChild(document.createTextNode(this.empleados[i].dni));
		td3.appendChild(document.createTextNode(this.empleados[i].trabajo));
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tbody.appendChild(tr);
		table.appendChild(tbody);
	}
	table.setAttribute("class", "table table-hover");
	divTable.appendChild(table);
	divTable.setAttribute("id", "divTable");
	divTable.setAttribute("class", "col-xs-6");
	document.body.appendChild(divTable);
	tituloTarea.value = "";
    descripcionTarea.value = "";
}
var colegio = new Colegio("Dover High School");

function Empleado (nombre, dni, edad, domicilio, pesosHora, horasSemanales, trabajo){
	this.nombre = nombre;
	this.dni = dni;
	this.edad = edad;
	this.domicilio = domicilio;
	this.pesosHora = pesosHora;
	this.horasSemanales = horasSemanales;
	this.trabajo = trabajo;
}
Empleado.prototype.sueldo = function(){
	return parseFloat(this.pesosHora) * parseFloat(this.horasSemanales) * 4;
}

function Profesor (nombre, dni, edad, domicilio, pesosHora, horasSemanales, materia){
	Empleado.call(this, nombre, dni, edad, domicilio, pesosHora, horasSemanales, "Profesor");
	this.materia = materia;
}
Profesor.prototype = Object.create(Empleado.prototype);

function Director (nombre, dni, edad, domicilio, pesosHora, horasSemanales, idioma){
	Empleado.call(this, nombre, dni, edad, domicilio, pesosHora, horasSemanales, "Director");
	this.idioma = idioma;
}
Director.prototype = Object.create(Empleado.prototype);

function ProfesorSuplente (nombre, dni, edad, domicilio, pesosHora, horasSemanales, profesor){
	Profesor.call(this, nombre, dni, edad, domicilio, pesosHora, horasSemanales, "Profesor Suplente", profesor.materia);
	this.profesorAlQueReemplaza = profesor.nombre;
}
ProfesorSuplente.prototype = Object.create(Empleado.prototype);

function Limpieza (nombre, dni, edad, domicilio, pesosHora, horasSemanales){
	Empleado.call(this, nombre, dni, edad, domicilio, pesosHora, horasSemanales, "Empleado de limpieza");
}
Limpieza.prototype = Object.create(Empleado.prototype);

var listaTrabajos = document.getElementById("listaTrabajos");

listaTrabajos.addEventListener("change", function(){
	var form = document.createElement("form");
	var div = document.createElement("div");
	div.setAttribute("class", "col-xs-12");
	var divInputLabel = function generarInputLabel (nombreLabel, inputId){
		var divExterno = document.createElement("div");
		divExterno.setAttribute("class", "form-group  col-sm-12");
		var div = document.createElement("div");
		div.setAttribute("class", "form-group  col-sm-3");
		var label = document.createElement("label");
		label.innerHTML = nombreLabel;
		var input = document.createElement("input");
		input.setAttribute("type", "text");
		input.setAttribute("class", "form-control");
		input.setAttribute("id", inputId);
		div.appendChild(label);
		div.appendChild(input);
		divExterno.appendChild(div);
		return divExterno;
	}
	var divFormulario = document.querySelector(".divFormulario");
	var select = document.createElement("select");
	var option = function optionList(value) {
		var option = document.createElement("option");
		option.setAttribute("value", value);
		option.innerHTML = value;
		return option;
	}
	divFormulario.innerHTML = "";
	div.appendChild(divInputLabel("Nombre", "nombreEmpleado"));
	div.appendChild(divInputLabel("DNI", "dniEmpleado"));
	div.appendChild(divInputLabel("Edad", "edadEmpleado"));
	div.appendChild(divInputLabel("Domicilio", "domicilioEmpleado"));
	div.appendChild(divInputLabel("Pesos x Hora", "pesosHoraEmpleado"));
	div.appendChild(divInputLabel("Horas semanales", "horasSemanalesEmpleado"));

	switch(listaTrabajos.value){
		case "Profesor":
			select.setAttribute("id", "materiaProfesor");
			select.appendChild(option(""));
			select.appendChild(option("Lengua"));
			select.appendChild(option("Matematica"));
			select.appendChild(option("Ciencias Sociales"));
			select.appendChild(option("Ingles"));
			select.appendChild(option("Deportes"));
			select.appendChild(option("Quimica"));
			div.appendChild(select);
			form.appendChild(div);
			break;
		case "Director":
			select.setAttribute("id", "idiomaDirector");
			select.appendChild(option(""));
			select.appendChild(option("Castellano"));
			select.appendChild(option("Ingles"));
			div.appendChild(select);
			form.appendChild(div);
			break;
		case "ProfesorSuplente":
			select.setAttribute("id", "profesorAReemplazaEmpleado");
			select.appendChild(option(""));
			for (var i = 0; i < colegio.empleados.length; i++) {
				select.appendChild(option(colegio.empleados[i].nombre));
			}
			div.appendChild(select);
			form.appendChild(div);
			break;
		case "Limpieza":
			form.appendChild(div);
			break;
	}
	divFormulario.appendChild(form);
});

agregar.addEventListener("click", function(){
	var nombre = document.getElementById("nombreEmpleado");
	var dni = document.getElementById("dniEmpleado");
	var edad = document.getElementById("edadEmpleado");
	var domicilio = document.getElementById("domicilioEmpleado");
	var pesosHora = document.getElementById("pesosHoraEmpleado");
	var horasSemanales = document.getElementById("horasSemanalesEmpleado");
	var profesorAReemplazar = document.getElementById("profesorAReemplazaEmpleado");
	var materia = document.getElementById("materiaProfesor");
	var idioma = document.getElementById("idiomaDirector");
	switch(listaTrabajos.value){
		case "Profesor":
			var profesor = new Profesor(nombre.value, dni.value, edad.value, domicilio.value, pesosHora.value, horasSemanales.value, materia.value);
			materia.value = "";
			colegio.empleados.push(profesor);
			break;
		case "Director":
			var director = new Director(nombre.value, dni.value, edad.value, domicilio.value, pesosHora.value, horasSemanales.value, idioma.value);
			idioma.value = "";
			colegio.empleados.push(director);
			break;
		case "ProfesorSuplente":
			var profesorSuplente = new ProfesorSuplente(nombre.value, dni.value, edad.value, domicilio.value, pesosHora.value, horasSemanales.value, profesorAReemplazar.value);
			colegio.empleados.push(profesorSuplente);
			break;
		case "Limpieza":
			var empleadoLimpieza = new Limpieza(nombre.value, dni.value, edad.value, domicilio.value, pesosHora.value, horasSemanales.value);
			colegio.empleados.push(empleadoLimpieza);
			break;
		default:
			break;
	}
	nombre.value = "";
	dni.value = "";
	edad.value = "";
	domicilio.value = "";
	pesosHora.value = "";
	horasSemanales.value = "";
});

listarEmpleados.addEventListener("click", function(){
	colegio.listarEmpleados();
});