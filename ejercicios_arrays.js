var assert = require('assert');

//Ejercicio 1


function ejercicio1 (arreglo,numero){
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
function esteTelefonoSirve(array,num){
  var resultado = array.filter(function(elem){
    elem=elem.toString();
    num=num.toString();
    if(elem.substr(0,num.length) == num || elem.substr(-num.length) == num){
      return true;
    }else{

      return false;
    }
    
  });
  return resultado;
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
//console.log(multiplos([88,1234,28],2));

// Ejercicio 4

function ordenar(array){
   var respuesta = array.map(function(elem){
         return (elem*2);
}).map(function(elem){
     return elem+1;
   });
 return respuesta;
}
//console.log(ordenar([2,5,7,2,3,8,10]));
 
// Ejercicio 5
function ejercicio5(array){
  var respuesta = array.map(function(elem){return 9/5 *elem + 32;});
  return respuesta;
}
//console.log(grados([15]));

//Ejercicio 6
function ejercicio6(arreglo){
  var rpta = arreglo.reduce(function(n1 ,n2){
    return n1*n2;
  });
  return rpta;
}
//console.log(multiplicacion([1,2,3,4]));

// Ejercicio 7
function ejercicio7(array){
 var respuesta = []; 
 array.forEach(function(edad){
      if(edad%2==0 && edad > 18){
        var fecha =new Date().getFullYear();
        
        respuesta.push(fecha- edad);
    }
   
  });
  return respuesta;
}
//console.log(fecha([20,30,13]));

describe("Ejercicios de array",function(){
  describe("Ejercicio 1",function(){
    it("Prueba de [2,3],9",function(){
      assert.equal(54,ejercicio1([2,3],9));
    });
  });
  describe("Ejercicio 2",function(){
    it("Prueba de [784162936294,462387784,367245346],784",function(){
      assert.deepEqual([784162936294,462387784],esteTelefonoSirve([784162936294,462387784,367245346],784));
    });
  });
  describe("Ejercicio 3",function(){
    it("Prueba de [88,1234,29],2",function(){
      assert.deepEqual([88,1234],multiplos([88,1234,29],2));
    });
  });
  describe("Ejercicio 4",function(){
    it("Prueba de [2,5,7,2,3,8,10]",function(){
      assert.deepEqual([5, 11, 15, 5, 7, 17, 21],ordenar([2,5,7,2,3,8,10]));
    });
    
  });
  describe("Ejercicio 5",function(){
    it("Prueba de [15]",function(){
      assert.deepEqual([59],ejercicio5([15]));
    });
  });
  describe("Ejercicio 6",function(){
    it("Prueba de [1,2,3,4]",function(){
      assert.deepEqual(24,ejercicio6([1,2,3,4]));
    });
  });
  describe("Ejercicio 7",function(){
    it("Prueba de [20,30,13]",function(){
    assert.deepEqual([1997, 1987],ejercicio7([20,30,13]))
    });
    
  });
});
