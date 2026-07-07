const movimientos = [500000,-100000,45000,78500,-96000,6300];

let total = 0;
let cantidadRetiros = 0;

for (const element of movimientos) {
    
    total += element;

    if (element < 0) {
        cantidadRetiros += 1;
    }
}

// Formato Peso Colombiano (COP)
const formatoCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
});

console.log(`Total en la cuenta es: -> ${formatoCOP.format(total)}`);
console.log(`La cantidad de retiros es: -> ${cantidadRetiros}`);

