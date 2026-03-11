const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let carrito = ["Leche", "Pan", "Huevos", "Café"];

console.log("--- TRABAJANDO CON ARRAYS ---");
console.log("Carrito actual:", carrito);

// 1. Preguntar para usar push()
readline.question("\n¿Qué producto quieres agregar al final? (push): ", (nuevoProducto) => {
    carrito.push(nuevoProducto);
    
    // 2. Preguntar para usar includes()
    readline.question("¿Qué producto quieres buscar en la lista? (includes): ", (productoABuscar) => {
        
        console.log("\n--- RESULTADOS ---");
        console.log("1. Tu carrito actualizado:", carrito);
        console.log(`2. ¿Existe '${productoABuscar}'?:`, carrito.includes(productoABuscar));
        
        // 3. pop()
        let eliminado = carrito.pop();
        console.log(`3. Se eliminó el último: '${eliminado}' (pop)`);
        
        // 4. reverse()
        carrito.reverse();
        console.log("4. Lista invertida (reverse):", carrito);
        
        // 5. join()
        console.log("5. Formato texto (join):", carrito.join(" | "));
        
        // 6. unshift()
        carrito.unshift("Iniciador");
        console.log("6. Se agregó 'Iniciador' al principio (unshift):", carrito);
        
        // 7. map()
        let enMayusculas = carrito.map(item => item.toUpperCase());
        console.log("7. Todo en MAYÚSCULAS (map):", enMayusculas);

        readline.close();
    });
});