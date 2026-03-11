const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Definición de las funciones
const calcularCuenta = (subtotal, propina) => subtotal + (subtotal * (propina / 100));
const esMayorDeEdad = (edad) => edad >= 18 ? "Puedes entrar al bar 🍺" : "No puedes entrar, eres menor 🚫";
const celsiusAFahrenheit = (c) => (c * 9/5) + 32;
const aplicarDescuento = (precio, desc) => precio - (precio * (desc / 100));
const calcularIMC = (peso, altura) => (peso / (altura * altura)).toFixed(2);

function mostrarMenu() {
    console.log("\n--- 🛠️ UTILIDADES DE LA VIDA COTIDIANA ---");
    console.log("1. Calcular propina");
    console.log("2. Verificar mayoría de edad");
    console.log("3. Convertir Temperatura (C a F)");
    console.log("4. Calcular descuento de ropa");
    console.log("5. Calcular IMC");
    console.log("0. Salir");
    
    readline.question("\nElige una opción: ", (opcion) => {
        switch(opcion) {
            case '1':
                readline.question("Monto de la cuenta: ", (m) => {
                    readline.question("Porcentaje de propina: ", (p) => {
                        console.log(`Total a pagar: $${calcularCuenta(parseFloat(m), parseFloat(p))}`);
                        mostrarMenu();
                    });
                });
                break;
            case '2':
                readline.question("Ingresa tu edad: ", (e) => {
                    console.log(esMayorDeEdad(parseInt(e)));
                    mostrarMenu();
                });
                break;
            case '3':
                readline.question("Grados Celsius: ", (c) => {
                    console.log(`Equivale a: ${celsiusAFahrenheit(parseFloat(c))}°F`);
                    mostrarMenu();
                });
                break;
            case '4':
                readline.question("Precio original: ", (p) => {
                    readline.question("Descuento (%): ", (d) => {
                        console.log(`Precio final: $${aplicarDescuento(parseFloat(p), parseFloat(d))}`);
                        mostrarMenu();
                    });
                });
                break;
            case '5':
                readline.question("Peso (kg): ", (p) => {
                    readline.question("Altura (metros, ej: 1.75): ", (a) => {
                        console.log(`Tu IMC es: ${calcularIMC(parseFloat(p), parseFloat(a))}`);
                        mostrarMenu();
                    });
                });
                break;
            case '0':
                console.log("¡Adiós!");
                readline.close();
                break;
            default:
                console.log("Opción no válida.");
                mostrarMenu();
                break;
        }
    });
}

mostrarMenu();