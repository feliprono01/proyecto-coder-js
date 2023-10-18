// Definición de un objeto Calculadora
const Calculadora = {
    // Propiedades
    ultimoResultado: null,
    historialResultados: [],

    // Métodos
    sumar: function (a, b) {
        const resultado = a + b;
        this.ultimoResultado = resultado;
        this.historialResultados.push(resultado);
        return resultado;
    },
    restar: function (a, b) {
        const resultado = a - b;
        this.ultimoResultado = resultado;
        this.historialResultados.push(resultado);
        return resultado;
    },
    multiplicar: function (a, b) {
        const resultado = a * b;
        this.ultimoResultado = resultado;
        this.historialResultados.push(resultado);
        return resultado;
    },
    dividir: function (a, b) {
        if (b !== 0) {
            const resultado = a / b;
            this.ultimoResultado = resultado;
            this.historialResultados.push(resultado);
            return resultado;
        } else {
            this.ultimoResultado = "Error: No se puede dividir por cero.";
            this.historialResultados.push(this.ultimoResultado);
            return this.ultimoResultado;
        }
    }
};

// Captura de entradas
const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const operacion = prompt("Elija una operación: suma, resta, multiplicación o división").toLowerCase();
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Realiza operaciones utilizando el objeto Calculadora
let resultado;
switch (operacion) {
    case "suma":
        resultado = Calculadora.sumar(numero1, numero2);
        break;
    case "resta":
        resultado = Calculadora.restar(numero1, numero2);
        break;
    case "multiplicacion":
        resultado = Calculadora.multiplicar(numero1, numero2);
        break;
    case "division":
        resultado = Calculadora.dividir(numero1, numero2);
        break;
    default:
        resultado = "Operación no válida";
}

// Muestra resultados en la consola
console.log(`Resultado de la ${operacion}: ${resultado}`);
console.log(`Último resultado: ${Calculadora.ultimoResultado}`);
console.log("Historial de resultados:", Calculadora.historialResultados);


