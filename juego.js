const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function jugar() {
    console.log("--- PIEDRA, PAPEL O TIJERA ---");
    
    readline.question("Escribe tu elección (piedra, papel o tijera): ", (eleccionUsuario) => {
        eleccionUsuario = eleccionUsuario.toLowerCase().trim();
        const opciones = ["piedra", "papel", "tijera"];
        
        // Validar si la entrada es correcta
        if (!opciones.includes(eleccionUsuario)) {
            console.log("❌ Error: Debes escribir piedra, papel o tijera.");
            readline.close();
            return;
        }

        const eleccionPC = opciones[Math.floor(Math.random() * 3)];
        
        console.log("\n---------------------------");
        console.log(`Tú elegiste: ${eleccionUsuario}`);
        console.log(`El PC eligió: ${eleccionPC}`);
        console.log("---------------------------");

        if (eleccionUsuario === eleccionPC) {
            console.log("¡Es un EMPATE! 🤝");
        } else if (
            (eleccionUsuario === "piedra" && eleccionPC === "tijera") ||
            (eleccionUsuario === "papel" && eleccionPC === "piedra") ||
            (eleccionUsuario === "tijera" && eleccionPC === "papel")
        ) {
            console.log("¡GANASTE! 🎉");
        } else {
            console.log("PERDISTE... 😢");
        }

        readline.close();
    });
}

jugar();