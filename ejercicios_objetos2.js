var assert = require('assert');

//Ejercicio 1
function sumaParametros(numInicial,numFinal){
	var objeto = { 
	 inicio : numInicial,
	 fin	: numFinal
  };
  var resultado = 0;
	for (var i = objeto.inicio; i <= objeto.fin; i++) 
  {
		  resultado = resultado + i;
	}
	  return resultado    
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

		return "Nombre : " +this.nombre + " "+ this.apellido+ "\n"  + "Edad :"+ this.edad + "\n"  + "Pais : " + this.pais;
	}

}
var persona = new ClinicaLab("Blanca","Perez",19,"Femenino","Santiago","Chile");

describe("Ejercicios_objetos2",function(){
	describe("Ejercios1",function(){
		it("Prueba de (1,10)",function(){
			assert.equal(55,sumaParametros(1,10));
		});
	});
	describe("Ejercicio 2", function(){
		it("Prueba de You're awesome",function(){
			assert.equal("You're awesome",estudiante.mensaje());
		});
	});
	describe("Ejercicio 3",function(){
		it("Prueba de arreglo",function(){
			assert.deepEqual("propiedad1-->6,propiedad2-->5,propiedad3-->4,propiedad4-->3,propiedad5-->2,propiedad6-->1",textos([6,5,4,3,2,1]));
		});
	});
	describe("Ejercicio 4",function(){
		it("Prueba de ficha",function(){
			assert.equal("Nombre : " + "Blanca" + " " + "Perez" + "\n"  + "Edad :"+ 19 + "\n"  + "Pais : " + "Chile",persona.ficha());
		});
	});
});	