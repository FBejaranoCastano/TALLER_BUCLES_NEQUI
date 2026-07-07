const entrada = require("prompt-sync")();

console.log("=".repeat(20));
console.log("Bienvenido a Nequi");
console.log("=".repeat(20));

let opcion;

do {
    console.log("\n*** Menú de opciones ***");
    console.log("1. Ver saldo");
    console.log("2. Enviar Dinero");
    console.log("3. Recargar");
    console.log("4. Salir");

    opcion = entrada("Selecione alguna de las opciones: ")

    if (opcion !== "1" && opcion !== "2" && opcion !== "3" && opcion !== "4") {
        console.log("❌ Opción inválida. Intenta de nuevo.");
    }

    switch (opcion) {
        case "1":
            console.log("\nEste es tu saldo...");
            break;
        case "2":
            console.log("\nEnviando dinero...");
            break;

        case "3":
            console.log("\nRecargando...");
            break;
    
        default:
            break;
    }
} while (opcion !== "4");