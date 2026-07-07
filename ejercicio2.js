const entrada = require("prompt-sync")();

const pinCorrecto = "pipeBejarano2091"
let intento;

do {
    intento = entrada("Ingresa tu PIN: ")

    if (intento !== pinCorrecto) {
        console.log("Ingresaste un PIN incorrecto...");
    }

} while (intento !== pinCorrecto);

console.log("=".repeat(20));
console.log("Bienvenido a Nequi");
console.log("=".repeat(20));