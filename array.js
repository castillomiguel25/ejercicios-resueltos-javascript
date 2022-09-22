// En este desafío tienes un array de objetos que representan datos de personas con los siguientes atributos:
// name lastName age El reto aquí es retornar un array de strings con los nombres, la solución debería tener un input y output como los siguientes:

// Input
//  solution([
//      {
//        name: 'Nicolas',
//        lastName: 'Molina',
//        age: 28
//      },
//      {
//        name: 'Valentina',
//        lastName: 'Molina',
//        age: 19
//      },
     
//    ]);

// respuesta
function solution(array) {
    return array.map(array => array.name) 
}; 


// 2) Tienes un array con palabras, tu desafío es retornar un array 
// solo con las que cumplan con la condición de tener 4 o más letras.
// La solución debería tener un input y output como los siguientes:

// input 
// solution(['amor', 'sol', 'piedra', 'día']);

// Output
// [ 'amor', 'piedra' ]

// respuesta
function solution(array) {
    return array.filter(array => array.length >= 4)
}; 

//3) obten los correos de todos los usuarios la funcion getemails() recibe como parametro un arreglo 
// de objeto con las propiedades email y name , tu labor es obtener todos los correos
//  y rotornalos en un arreglo utilizando return

const getemails = [
    {name: 'erik', email: 'erik@gamil.com'},
    {name: 'miguel', email: 'miguel@gamil.com'},
    {name: 'vanesa', email: 'vanesa@gamil.com'}
]

const correos = getemails.map(array => array.email)
console.log(correos)


