/*
En la carpeta ya creada, crea un nuevo archivo llamado extra.js. Dentro del mismo;
1. Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
2. Imprimir los números entre el 1 y el 57, saltando de tres en tres.
3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.
4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de las letras de la cadena de texto pero en MAYÚSCULA. Pista: Investigar el método .toUpperCase.
5. Crear una función que reciba como parámetro un array de números positivos. Tendrá la responsabilidad de retornar un nuevo array pero sólo con los valores pares. Pista: Investiga sobre el uso del operador módulo. Recordemos también que un número par es aquel que se puede dividir entre 2.

Al final del archivo debes exportar un objeto literal con todas las funciones que hayas creado. En el caso que las hayas creado todas debería quedar así:

module.exports = {
showNumbers,
printEveryThree,
totalSummation,
showToUpperCase,
returnPairs
}
*/

//1- funcion que muestra los 10 numeros siguientes a un valor dado
function showNumbers(numeroIngresado) {
    console.log(`Los 10 numeros siguientes a ${numeroIngresado} son:`);
    for (let i = 1; i <= 10; i++) {
        console.log(numeroIngresado + i);
    }
}
//llamdo a la funcion
//showNumbers(1);


//2-funcion para imprimir los números entre 1 y 57 de 3 en 3
function printEveryThree(){
    console.log("Números entre 1 y 57 saltando de tres en tres:");
    
    //for para itera +3
    for(let i = 1; i <=57; i +=3){
        console.log(i);
    }
}
//llamdo a la funcion
//printEveryThree();


//3.-funcion que muestra la sumatoria de todos los numeros  entre 0 y 100
function totalSummation() {
    let suma = 0;
    for (let i = 0; i <= 100; i++) {
        suma += i; //acumulo
    }
    console.log(`La sumatoria de todos los numeros entre 0 y 100 es: ${suma}`);
}
//llamdo a la funcion
//totalSummation();


// 4- funcion que muestra cada letra de una cadena en mayusculas
function showToUpperCase(cadena) {
    console.log('Texto con cada letra en mayuscula:');
    for (let i = 0; i < cadena.length; i++) {
        console.log(cadena[i].toUpperCase());
    }
}
//llamdo a la funcion
//showToUpperCase('practicando el uso de los ciclos o bucles');


//5-funcion que retorna un nuevo array con solo los valores pares de un array dado
function returnPairs(numeros) {
    const numerosPares = []; //creo una arreglo para guardar los numeros pares
    //for para iterar en el array que recibo como parametro y lo guardo en el nuevo array si cumple %2==0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            numerosPares.push(numeros[i]);
        }
    }
    return numerosPares;
}

//llaamds a las funciones de prueba
//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //array de ejemplo
//const numerosPares = returnPairs(numeros); //llamo a al funcion
//console.log('Numeros pares:', numerosPares); //muestro por pantalla el nuevo array


// Exportar un objeto literal con todas las funciones
module.exports = {
    showNumbers,
    printEveryThree,
    totalSummation,
    showToUpperCase,
    returnPairs
};