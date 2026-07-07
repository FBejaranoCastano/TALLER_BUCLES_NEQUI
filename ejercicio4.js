const movimientos = [500000,-100000,45000,78500,-96000,6300];
const PAGO_COMERCIO = -96000;
let posicionEncontrada = 0;
for (const [index,element] of movimientos.entries()) {
    
    if (element === 0) {
        continue;
    }

    if (element === PAGO_COMERCIO) {
        posicionEncontrada = index;
        break;
    }
}

console.log(`Posicion encontrada #${posicionEncontrada}`);