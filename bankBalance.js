/*
El Tech Leader nos informa que debemos efectuar un código que permita calcular
el saldo de la cuenta de un cliente de la Institución Financiera. Tu
responsabilidad será ir ejecutando cada una de las siguientes consignas para lograr
el objetivo:
1. En Visual Studio Code crear la carpeta de trabajo y dentro de ella inicializar un
repositorio local y vincularlo con un repositorio remoto cuyo nombre debe

tener la siguiente nomenclatura: nombreApellido_tp13
2. Crear un archivo llamado bankBalance.js
3. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
tomando en cuenta que los depósitos serán representados por valores
positivos y los retiros por valores negativos.
4. Crear la función calculateBalances() que reciba como parámetro el array
creado. La función tendrá la responsabilidad de calcular y devolver el saldo total
de depósitos, el saldo actual de retiros y el saldo actual del cliente.
5. Crear otra función llamada bankBalance() que reciba como parámetros el
nombre y el apellido del cliente así como el array que contiene las operaciones
bancarias. Esta función tendrá la responsabilidad de retornar el nombre y
apellido del cliente y el saldo total de depósitos, el saldo actual de retiros y el
saldo actual.
6. Para probar las diferentes respuestas invoca a la función, asigna diferentes
valores o argumentos. Usando el console.log(), muestra los resultados al usuario:

“Estimada Gloria Medina:
El monto total de los depósitos es de: $5500.
El monto total de los retiros es de: $15000.
Por lo tanto, su saldo actual en la cuenta es de: $40000. ” .

Luego de hacer las pruebas todos los console.log() deben quedar
comentados.
La última línea de código debes “exportar” la función. Para ello debes escribir lo
siguiente:

module.exports = bankBalance
*/

//3-crear un array
const transacciones=[200000, 12000, -3000, -125000, -10000, 4000];

//4-crear una funcion calculateBalances()

function calculateBalances(operaciones){
    let totalDepositos = 0;
    let totalRetiros = 0;
    let balances = 0;

    for (let i = 0; i < operaciones.length; i++) {
        if (operaciones[i] > 0) {
            totalDepositos += operaciones[i];
        } else {
            totalRetiros += operaciones[i]; // Convertimos retiros a valores positivos
        }
        balances += operaciones[i];
    }

    return {
        totalDepositos: totalDepositos,
        totalRetiros: totalRetiros,
        balances: balances
    };
}

// 5- Crear una función bankBalance()
function bankBalance(nombre, apellido, operaciones) {
    let balances = calculateBalances(operaciones); // Almacena el resultado en balances

    console.log(`Estimada ${nombre} ${apellido}:`);
    console.log(`El monto total de los depósitos es de: $${balances.totalDepositos}.`);
    console.log(`El monto total de los retiros es de: $${balances.totalRetiros}.`);
    console.log(`Por lo tanto, su saldo actual en la cuenta es de: $${balances.balances}.`);
}

// 6- Pruebas de la función
//bankBalance("Gloria", "Medina", transacciones);

// 7=Exportar la función
module.exports = bankBalance;