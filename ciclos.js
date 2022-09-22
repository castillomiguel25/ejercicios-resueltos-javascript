                            //  ciclos implementados con for

 // ejemplo 1 
 for (let i = 1; i <=15; i++) {
     console.log(`interacion ${i}`);
 }

 console.log('fin del cliclo')




                                   //  ciclos al reves

    // ejemplo 1 

 for (let i = 12; i >=1; i--) {
     console.log(`interacion ${i}`);
 }
  console.log('fin del cliclo')



                                    //  ciclos anidados

    // ejemplo 1 
 for (let i = 1; i <=4; i++) {
     console.log(`init interacion ${i}`);
     for (let j = 0; j < 4; j++) {
         console.log(`nuevo interacion ${j}`);

     }
 }
 console.log('fin del cliclo')



                                            //  while

      // ejemplo 1 

 let x = 1 
 while (x <= 4) {
     console.log(`interacion ${x}`);
     x++;
 }

 console.log('fin')



                                            //  do while

//  ejemplo 1
let y = 1

do {
    console.log(`interacion ${y}`);
    y++;
} while (y <= 4);

// ejemplo 2

var contador = 0

const llueve = () => Math.random() < 0.25 

do {
    contador++
} while (!llueve())

console.log(`fui a ver si llovia ${contador} veces`)


//      crea un programa que ingresando un numero genere la tabla de multiplicar de dicho numero.


var number = parseInt(prompt('ingresa un numero'))

for (let i = 1; i <= 20; i++) {
    const element = number * i
    document.write(number  + ' x ' + i + ' = ' + element + '<br>')
    
}

//  hacer un programa que muestre todos los numeros 
// entre dos numeros introducidos por el usuario

const number_one = parseInt(prompt('escribe un number'))
const number_two = parseInt(prompt('escribe un number'))

for (var i = number_one; i < number_two; i++) { 
    
document.write('<br>' + i + '<br>')

}


 //17.  hacer un programa que muestre todos los numeros impares
// entre dos numeros introducidos por el usuario


var n1 = parseInt(prompt('hola escribe el primer numero'))
var n2 = parseInt(prompt('hola escribe el segundo numero'))


for (var i = n1; i < n2; i++) {
document.write('<br>' + i + '<br>')  
if (i % 2 != 0) {
 
    i++;
}
  
}


// muestre todos los numeros divisores en un numero que mete en un prompt

var number = parseInt(prompt('escribe un numero'))

for (i = 1; i <= number; i++) {
    if (number % i == 0) {
        document.write(i + '<br>')
    }
}

