// detector de mayoria de edad //

// Solicitar al usuario que ingrese su edad
const edad = prompt("Por favor, ingrese su edad:");

// Convertir la entrada de texto a un número entero
const edadNumero = parseInt(edad);

// Verificar si la persona es mayor de edad
if (edadNumero >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}


//detector de numeros pares e impares//

// Solicitar al usuario que ingrese un número entero
const numero = prompt("Por favor, ingresa un número entero:");

// Convertir la entrada de texto a un número entero
const numeroEntero = parseInt(numero);

// Verificar si el número es par o impar
if (isNaN(numeroEntero)) {
    console.log("Por favor, ingresa un número válido.");
} else if (numeroEntero % 2 === 0) {
    console.log(`El número ${numeroEntero} es PAR.`);
} else {
    console.log(`El número ${numeroEntero} es IMPAR.`);
}



// contador utilizando ciclos //

// Utilizando un ciclo for para mostrar números del 1 al 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}



// un contador del 10 al 0 //

// Inicializamos una variable con el valor inicial
let contador = 10;

// Utilizando un ciclo while para contar hacia atrás desde 10 hasta 1
while (contador >= 1) {
    console.log(contador);
    contador--; // Decrementa el contador en cada iteración
}

