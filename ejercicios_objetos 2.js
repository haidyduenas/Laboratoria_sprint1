var assert = require('assert');
//Ejercicio 1
function sumaParametros(numInicial,numFinal){
	var objeto = { 
	 inicio : numInicial,
	 fin	: numFinal
	suma : function(inicio,fin){
	resultado = "";
	for (var i = 0; i < objeto.length; i++) {
		resultado = resultado + objeto[i];

			}
	return resultado;
		}
	}
}
//Ejercicio 2 Super Coder

function SuperCoder(nombre,edad,ocupacion,genero){
	this.nombre 	= nombre;
	this.edad		= edad;
	this.ocupacion	= ocupacion;
	this.genero		= genero;
	this.mensaje	= function (){
		if (this.edad > 17 && this.genero == "Femenino"){
			return "You're awesome";
		}else{
			return "Upsii";
		}
	};
}
var estudiante = new SuperCoder("Tamara",22,"Estudiante de Laboratoria","Femenino")

 // Ejercicio 3 

function textos(arreglo){
	var texto = new Object();
	for (var i in arreglo){
		var j = parseInt(i)+1;
		texto["propiedad" + j]=arreglo[i];
	}
	var respuesta = Object.keys(texto);
	var res ="";
	for (var i in respuesta){
		res += respuesta[i] + "-->" + arreglo[i] + ","; 
	}return res.substr(0,res.length -1);
}

//Ejercicio 4

function ClinicaLab(nombre,apellido,edad,genero,ciudad,pais){
	this.nombre		= nombre;
	this.apellido	= apellido;
	this.edad		= edad;
	this.genero 	= genero;
	this.ciudad		= ciudad;
	this.pais 		= pais;
	this.ficha 		= function(){

		return "Nombre : " +this.nombre + this.apellido+ "\n"  + "Edad :"+ this.edad + "\n"  + "Pais : " + this.pais;
	}

}