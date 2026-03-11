const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("--- ⚡ DEMOSTRACIÓN DE FUNCIONES FLECHA ---");

// 1. Flecha con un parámetro
const saludarUsuario = nombre => `¡Hola, ${nombre}! Bienvenido al sistema.`;

// 2. Flecha con dos parámetros
const sumar = (a, b) => a + b;

// 3. Flecha sin parámetros
const obtenerFecha = () => new Date().toLocaleString();

// Ejecución interactiva
readline.question("¿Cómo te llamas? ", (nombreUsuario) => {
    console.log(saludarUsuario(nombreUsuario));
    
    console.log("\nProbemos una suma rápida...");
    readline.question("Ingresa el primer número: ", (n1) => {
        readline.question("Ingresa el segundo número: ", (n2) => {
            const resultado = sumar(parseFloat(n1), parseFloat(n2));
            console.log(`La suma de ${n1} + ${n2} es: ${resultado}`);
            
            console.log(`\nAcción realizada el: ${obtenerFecha()}`);
            
            console.log("\n--- Fin de los ejemplos de funciones flecha ---");
            readline.close();
        });
    });
});