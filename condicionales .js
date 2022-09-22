// 1) crea un programa que pida al usuario 3 numero en un prompt y luego muestre en una alerta 
// el numero mayor.


 var numberone = prompt ('escribe un numero');
 var number2 = prompt ('escribe un numero');
 var number3 = prompt ('escribe un numero');

  if (Number(numberone) > Number(number2) && Number(numberone) > number3 ) {
     alert(`${numberone} es mayor`)

 } else if (Number(number3) > Number(number2) && Number(number3) > numberone) {
     alert(`${number3} es mayor`)
 }
 else {
     alert(`${number2} es mayor`)
 }


// 2) el siguiente codigo tiene un error que se produce en algunos casos especailes, descubrirlo y arreglarlo
// if (edad < 13) {
//     console.log('es nino')
// }if (edad <18) {
//     console.log('es adelocente')
// }else {
//     console.log('es adolecente')
// }

 var edad = 12

 if (edad < 13) {
     console.log('es nino')
 }else if (edad >= 18) {
     console.log('es adulto')
 }else {
     console.log('es adolecente')
 }



// 3) crea un programa donde el numero introducido en el prompt 
// es par o no, la respuesta sera mostrada en una alerta

 var resultado;
 var par = prompt('escrcibe un numero')

 var resultado = ((par % 2)== 0)

 alert(resultado)


// 4) crea un programa que determine si un numero introduciodo en un prompt es divisible por 5 o no. mostrar por console.log

 var resultado;
 var divisible = prompt('escribe un numero')

 resultado = ((divisible % 5) == 0)

 console.log(resultado)

// 5) crea un programa que determine si un numero introduciodo en un prompt es divisible entre 5 y 11 o no. mostrar por console.log

  var resultado;
  var divisible = prompt('escribe un numero')

  resultado = ((divisible % 5 && divisible % 11) == 0)

  console.log(resultado)




// 6) crea un programa que pida al usuario 1 numero al usuario a traves de un prompt y luego un segundo
//  numero para luego muestrar en una alerta el numero mayor.(ocupando un if ternario)

 var respuesta;
  var numberone = prompt ('escribe un numero');
  var number2 = prompt ('escribe un numero');
 respuesta =  (numberone > number2 ? numberone : number2)

 alert( `El numero mayor es ${respuesta}` );


// 7)  escribe utilizando console.log la tabla del 9 hasta 9 x10

for ( i = 0 ; i < 11 ; i++) {
    console.log('9x', i, '=', 9 * i)
}

//  8) mostrar todos los numeros de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt

 var numero = prompt('escribir un numero')

 for (let i = 0 ; numero >= i; i++) {
     document.write(i + ' , ')
    
 }

// 9) mostrar todos los numeros de 1 a n aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt

 var n = prompt('escribe un numero')

 for ( i = 0; n >= i; i+=2) {
     document.write(i + ',')
 }


// 10) mostrar todos los numeros de n a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt

  var n = prompt('escribe un numero')

  for ( i = 0; n > i; n--) {
      document.write(n + ',')
  }


// 11) piramide izquierda
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

for(let i = 1; i <= 5; ++i) {
    let resultado = '';
    for(let j = 1; j <= i; ++j) {
        resultado += '* ';
    }
   console.log(resultado);
}

 // 12) Pedir al usuario que ingrese un número en un prompt,
//  hacer la suma de todos los dígitos,
//   validar que el número ingresado no contenga letras.

let results;
let sum = prompt("ingrese un número: ");
let sum2 = prompt('ingresa otro numero');
while (sum == null || /\D/.test(sum) || sum == "") {
    sum = prompt("el primer numero ingresado no es  valido: ");
};
while (sum2 == null || /\D/.test(sum2) || sum2 == "") {
    sum2 = prompt("el segundo numero ingresado no es  valido ");
};

results = (parseInt(sum) + parseInt(sum2))

alert(` tu resultado es ${result}` );



//13) Realizar la sumatoria de los primeros N números,
//  donde N es ingresado por el usuario.

let result;
let sums = prompt('agregar un numero')
let sums2 = prompt('agregar otro numero')

 result = alert(parseInt(sums) + parseInt(sums2))


// 14. crea un programa que pida 2 numeros y que nos diga cual es el mayor , y si son iguales


var number_one = parseInt(prompt('escribe un numero')) 
var number_two = parseInt (prompt('escribe un numero'))


if ( number_one > number_two) {
    alert('el primer numero es mayor')
} else if ( number_two > number_one) {
    alert('el segundo numero es mayor')
} else{
    alert('son iguales')
}

