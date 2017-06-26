var assert = require('assert');

var ejercicios = new EjerciciosArray();




describe("Ejercicios Arrays", function(){
  describe("Ejercicio 1", function(){
    it("Prueba de [2,3] y 10", function(){
      assert.equal(60, ejercicios.ejercicio1([2,3], 10));
    });
    it("Prueba de [2,3] y "Hola"", function(){
      assert.equal(6, ejercicios.ejercicio1([2,3], "Hola"));
    });
    it("Prueba de [2,3] y nada", function(){
      assert.equal(6, ejercicios.ejercicio1([2,3]));
    });
    it("Prueba de 2 y 3", function(){
      assert.equal(6, ejercicios.ejercicio1(2,3));
    });
  });

  describe("Ejercicio 2", function(){
    it("cuando es [996548337, 997616207], 207", function(){
      assert.deepEqual([997616207], ejercicios.ejercicio2([996548337, 997616207], 207));
    });
    it("cuando es [996548337, 97616207], 207", function(){
      assert.deepEqual([97616207], ejercicios.ejercicio2([996548337, 97616207], 207));
    });
  });

});
//Ejercicio 1


this.ejercicio1 = function(arreglo,numero){
	var res = 0
  	if(Array.isArray(arreglo))
  	{
  		res =arreglo.reduce(function(n1 ,n2){
  			return n1*n2;
  		});
  	}else{
  		if(!isNaN(arreglo)){
  			res = arreglo;
   		}
  	}

  	if(!isNaN(numero)){
  		res = res *numero;
  	}

  	return res;
}

//Ejercicio 2
this.ejercicio2 =function(array,num){
return array.filter(function(elem){
	var primera = elem.toString().substr(0,num.length);
	var ultimos = elem.toString().substr(-num.length);
	return (primeras == num || ultimos == num); 
});
}
//console.log(esteTelefonoSirve([784162936294,462387784,367245346],784));


//Ejercicio 3

function multiplos(array,num2){
 var respuesta = []; 
 array.forEach(function(elem){
      if(elem%num2==0){
        respuesta.push(elem);
    }
   
   
  });
  return respuesta;
}
console.log(multiplos([88,1234,28],2));

// Ejercicio 4

function ordenar(array){
   var respuesta = array.map(function(elem){
         return (elem*2);
}).map(function(elem){
     return elem+1;
   });
 return respuesta;
}
console.log(ordenar([2,5,7,2,3,8,10]));
 
// Ejercicio 5
function grados(array){
  var respuesta = array.map(function(elem){return 9/5 *elem + 32;});
  return respuesta;
}
console.log(grados([15]));

//Ejercicio 6
function multiplicacion(arreglo){
  var rpta = arreglo.reduce(function(n1 ,n2){
    return n1*n2
  });
  return rpta;
}
console.log(multiplicacion([1,2,3,4]));

// Ejercicio 7
function fecha(array){
 var respuesta = []; 
 array.forEach(function(edad){
      if(edad%2==0 && edad > 18){
        var fecha =new Date().getFullYear();
        
        respuesta.push(fecha- edad);
    }
   
  });
  return respuesta;
}
console.log(fecha([20,30,13]));


