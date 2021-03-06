
var assert = require('assert');

//Ejercicio 1
function Rectangulo(base,altura) {
  this.base = base;
  this.altura = altura;
  this.area = function() {
    return this.base * this.altura;
  };
}


var objt = new Rectangulo(2,3);

//console.log(objt.area());

// Ejercicio 2
 function Persona(nombre,dia,mes,anio){
 	this.nombre = nombre;
 	this.dia = dia;
 	this.mes = mes;
 	this.anio = anio;
 	this.edad = function(dia,mes,anio){
 		var fecha = new Date();
		var anioActual = fecha.getFullYear();
 		var mesActual = fecha.getMonth()+1;
 		var diaActual = fecha.getDate();
 		var edad = (anioActual - this.anio);
 		if(this.mes>mesActual){
 			edad--;
 		}
 		if(this.mes == mesActual && this.dia < diaActual){
 			edad--;
 		}
 		return "La edad actual de "+ this.nombre +" es "+edad;
 	};
 }

var ejercicio2 =  new Persona("Sú",23,8,1991);
//console.log(ejercicio2.edad());
//Ejercicio 3

function informacionPersonal(nombre,edad,pasatiempos){
	this.nombre = nombre;
	this.edad = edad;
	this.pasatiempos = pasatiempos;
	this.mensaje=function(){ 
		return "Hola soy " + this.nombre + " tengo " + this.edad + " años y me gusta " + this.pasatiempos;
	}
}
 var ejercicio3 = new informacionPersonal("Haidy",24,"mirar peliculas");
//console.log(ejercicio3.mensaje());

describe("Ejercicios de objetos 1",function(){
	describe("Ejercicio 1",function(){
		it("Prueba de rectangulo",function(){
			assert.equal(6,objt.area());
		});
	});
	describe("Ejercico 2",function(){
		it("Prueba de Persona",function(){
			assert.equal("La edad actual de "+ "Sú" + " es "+ 25,ejercicio2.edad());
		});
	describe("Ejercio 3",function(){
		it("Prueba de Funcion informacionPersonal",function(){
			assert.equal("Hola soy " + "Haidy" + " tengo " + 24 + " años y me gusta " + "mirar peliculas",ejercicio3.mensaje());
		});
	});
	});
});
