var miJson;

function Colegio (nombre){
	this.nombre = nombre;
	this.empleados = [];
	this.contenedor = document.querySelector("#divTablas");
}
Colegio.prototype.listarEmpleados = function(){
	this.contenedor.innerHTML = "";
	var divTable = document.createElement("div");
	divTable.setAttribute("id", "divTable");
	var table = document.createElement("table");
	var thead = document.createElement("thead");
	var tbody = document.createElement("tbody");
	var trHeader = document.createElement("tr");
	var thNombre = document.createElement("th");
	var thDni = document.createElement("th");
	var thMateria = document.createElement("th");
	thNombre.appendChild(document.createTextNode("Nombre"));
	thDni.appendChild(document.createTextNode("Dni"));
	thMateria.appendChild(document.createTextNode("Puesto"));
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
		td1.appendChild(document.createTextNode(this.empleados[i].nombre + " " + this.empleados[i].apellido));
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
	divTable.setAttribute("class", "col-xs-10");
	this.contenedor.appendChild(divTable);
}

Colegio.prototype.buscarEmpleado = function(){
	var dniEmpleado = prompt("Ingrese el DNI del empleado que desea buscar");
	while(isNaN(dniEmpleado)){
		var dniEmpleado = prompt("Ingrese solo numeros. Ingrese el DNI del empleado que desea buscar");
	}
	var dniEmpleado = parseInt(dniEmpleado);
	var empleadoEncontrado = false;
	for (var i = 0; i < this.empleados.length; i++) {
		this.contenedor.innerHTML = "";
		if (this.empleados[i].dni == dniEmpleado) {
			var divTable = document.createElement("div");
			divTable.setAttribute("id", "divTable");
			var table = document.createElement("table");
			var thead = document.createElement("thead");
			var tbody = document.createElement("tbody");
			var trHeader = document.createElement("tr");
			var thNombre = document.createElement("th");
			var thDni = document.createElement("th");
			var thMateria = document.createElement("th");
			thNombre.appendChild(document.createTextNode("Nombre"));
			thDni.appendChild(document.createTextNode("Dni"));
			thMateria.appendChild(document.createTextNode("Puesto"));
			trHeader.appendChild(thNombre);
			trHeader.appendChild(thDni);
			trHeader.appendChild(thMateria);
			thead.appendChild(trHeader);
			table.appendChild(thead);
			var tr = document.createElement("tr");
			var th = document.createElement("th");
			var td1 = document.createElement("td");
			td1.setAttribute("class", "col-xs-4");
			var td2 = document.createElement("td");
			td2.setAttribute("class", "col-xs-4");
			var td3 = document.createElement("td");
			td3.setAttribute("class", "col-xs-4");
			td1.appendChild(document.createTextNode(this.empleados[i].nombre + " " + this.empleados[i].apellido));
			td2.appendChild(document.createTextNode(this.empleados[i].dni));
			td3.appendChild(document.createTextNode(this.empleados[i].trabajo));
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tbody.appendChild(tr);
			table.appendChild(tbody);
			table.setAttribute("class", "table table-hover");
			divTable.appendChild(table);
			divTable.setAttribute("id", "divTable");
			divTable.setAttribute("class", "col-xs-6");
			this.contenedor.appendChild(divTable);
			empleadoEncontrado = true;
			break;
		} 
	}
	if (empleadoEncontrado == false) {
		alert("No registramos ningun empleado con ese DNI");
	}
}

Colegio.prototype.eliminarEmpleado = function(){
	var empleadoAEliminar = prompt("Ingrese el dni del empleado a eliminar");
	for (var i = 0; i < this.empleados.length; i++){
		if (this.empleados[i].dni == empleadoAEliminar) {
			this.empleados.splice(this.empleados.indexOf(this.empleados[i]), 1);
			alert("El empleado ha sido elminado correctamente");
			this.listarEmpleados();
		}
	}
	miJson = JSON.stringify(colegio);
	localStorage.setItem("empleadosColegio", miJson);
}


var colegio = new Colegio("Dover High School");

function Empleado (nombre, apellido, dni, edad, domicilio, pesosHora, horasSemanales, trabajo){
	this.nombre = nombre;
	this.apellido = apellido;
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

function Profesor (nombre, apellido, dni, edad, domicilio, pesosHora, horasSemanales, materia){
	Empleado.call(this, nombre, apellido, dni, edad, domicilio, pesosHora, horasSemanales, "Profesor");
	this.materia = materia;
}
Profesor.prototype = Object.create(Empleado.prototype);

function Director (nombre, apellido, dni, edad, domicilio, pesosHora, horasSemanales, idioma){
	Empleado.call(this, nombre, apellido, dni, edad, domicilio, pesosHora, horasSemanales, "Director");
	this.idioma = idioma;
}
Director.prototype = Object.create(Empleado.prototype);

function ProfesorSuplente (nombre, apellido, dni, edad, domicilio, pesosHora, horasSemanales, profesor){
	Empleado.call(this, nombre, apellido, dni, edad, domicilio, pesosHora, horasSemanales, "Profesor Suplente");
	this.profesorAlQueReemplaza = profesor;
}
ProfesorSuplente.prototype = Object.create(Empleado.prototype);

function Limpieza (nombre, apellido, dni, edad, domicilio, pesosHora, horasSemanales){
	Empleado.call(this, nombre, apellido, dni, edad, domicilio, pesosHora, horasSemanales, "Empleado de limpieza");
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
	div.appendChild(divInputLabel("Apellido", "apellidoEmpleado"))
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
				if (colegio.empleados[i].trabajo == "Profesor") {
					select.appendChild(option(colegio.empleados[i].nombre + " " +  colegio.empleados[i].apellido));
				}
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
	var apellido = document.getElementById("apellidoEmpleado");
	var dni = document.getElementById("dniEmpleado");
	var edad = document.getElementById("edadEmpleado");
	var domicilio = document.getElementById("domicilioEmpleado");
	var pesosHora = document.getElementById("pesosHoraEmpleado");
	var horasSemanales = document.getElementById("horasSemanalesEmpleado");
	var profesorAReemplazar = document.getElementById("profesorAReemplazaEmpleado");
	var materia = document.getElementById("materiaProfesor");
	var idioma = document.getElementById("idiomaDirector");
	var dniEncontrado = false;
	for (var i = 0; i < colegio.empleados.length; i++) {
		if (colegio.empleados[i].dni == dni.value){
			alert("Ese DNI ya fue ingresado");
			dniEncontrado = true;
			break;
			} 
		}
	if(!/^[a-zA-Z\s]*$/.test(nombre.value) || !/^[a-zA-Z\s]*$/.test(apellido.value)){
		alert("El nombre y apellido deben contener solo letras");
	} 
	else if(isNaN(dni.value) || isNaN(edad.value) || isNaN(pesosHora.value) || isNaN(horasSemanales.value)){
		console.log(dni.value);
		console.log(edad.value);
		console.log(pesosHora.value);
		console.log(horasSemanales.value);
		alert("El Dni, Edad, Pesos x Hora y Horas Semanales deben contener solo numeros");
	} else {
		if (dniEncontrado == false && /^[a-zA-Z\s]*$/.test(nombre.value) && /^[a-zA-Z\s]*$/.test(apellido.value)) {
			switch(listaTrabajos.value){
			case "Profesor":
				var profesor = new Profesor(nombre.value, apellido.value, dni.value, edad.value, domicilio.value, pesosHora.value, horasSemanales.value, materia.value);
				materia.value = "";
				colegio.empleados.push(profesor);
				break;
			case "Director":
				var director = new Director(nombre.value, apellido.value, dni.value, edad.value, domicilio.value, pesosHora.value, horasSemanales.value, idioma.value);
				idioma.value = "";
				colegio.empleados.push(director);
				break;
			case "ProfesorSuplente":
				var profesorSuplente = new ProfesorSuplente(nombre.value, apellido.value, dni.value, edad.value, domicilio.value, pesosHora.value, horasSemanales.value, profesorAReemplazar.value);
				colegio.empleados.push(profesorSuplente);
				break;
			case "Limpieza":
				var empleadoLimpieza = new Limpieza(nombre.value, apellido.value, dni.value, edad.value, domicilio.value, pesosHora.value, horasSemanales.value);
				colegio.empleados.push(empleadoLimpieza);
				break;
			default:
				break;
			}
			nombre.value = "";
			apellido.value = "";
			dni.value = "";
			edad.value = "";
			domicilio.value = "";
			pesosHora.value = "";
			horasSemanales.value = "";
			miJson = JSON.stringify(colegio);
			localStorage.setItem("empleadosColegio", miJson);
		}
	}
});

listarEmpleados.addEventListener("click", function(){
	colegio.listarEmpleados();
});
buscarEmpleado.addEventListener("click", function(){
	colegio.buscarEmpleado();
});

eliminarEmpleado.addEventListener("click", function(){
	colegio.eliminarEmpleado();
});

window.addEventListener("load", function(){
	if (JSON.parse(localStorage.getItem("empleadosColegio")) != null) {
		var empleadosLocalStorage = JSON.parse(localStorage.getItem("empleadosColegio")).empleados;
		colegio.empleados = [];
		for (var i = 0; i < empleadosLocalStorage.length; i++) {
			var empleado = empleadosLocalStorage[i];
			switch(empleado.trabajo){
				case "Profesor":
				var profesor = new Profesor(empleado.nombre, empleado.apellido, empleado.dni, empleado.edad, empleado.domicilio, empleado.pesosHora, empleado.horasSemanales, empleado.materia);
				colegio.empleados.push(profesor);
				break;
			case "Director":
				var director = new Director(empleado.nombre, empleado.apellido, empleado.dni, empleado.edad, empleado.domicilio, empleado.pesosHora, empleado.horasSemanales, empleado.idioma);
				colegio.empleados.push(director);
				break;
			case "Profesor Suplente":
				var profesorSuplente = new ProfesorSuplente(empleado.nombre, empleado.apellido, empleado.dni, empleado.edad, empleado.domicilio, empleado.pesosHora, empleado.horasSemanales, empleado.trabajo, empleado.profesorAlQueReemplaza);
				colegio.empleados.push(profesorSuplente);
				break;
			case "Empleado de limpieza":
				var empleadoLimpieza = new Limpieza(empleado.nombre, empleado.apellido, empleado.dni, empleado.edad, empleado.domicilio, empleado.pesosHora, empleado.horasSemanales);
				colegio.empleados.push(empleadoLimpieza);
				break;
			default:
				break;
			}
		} 
	}
});