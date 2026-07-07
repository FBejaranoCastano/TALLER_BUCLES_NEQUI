const usuarios = [
    {
        nombre: "Andrés López",
        movimientos: [500, -150, 200, -50, -300, 1000],
        totalUsuario: 0
    },
    {
        nombre: "María Camila",
        movimientos: [1200, -400, -100, 350, 600, -250],
        totalUsuario: 0
    },
    {
        nombre: "Carlos Mendoza",
        movimientos: [800, 1500, -600, -200, 400, 150],
        totalUsuario: 0
    },
    {
        nombre: "Diana Soler",
        movimientos: [-50, 3000, -1200, 450, 150, -300],
        totalUsuario: 0
    },
    {
        nombre: "Santiago Cruz",
        movimientos: [2500, -800, 300, -150, 900, 400],
        totalUsuario: 0
    },
    {
        nombre: "Elena Rostova",
        movimientos: [-200, -450, 1800, 350, -100, 600], // 3 negativos (retiros)
        totalUsuario: 0
    }
];

// Ejemplo de cómo ver la lista en consola de forma ordenada:
//console.table(usuarios);

const formatoCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
});

for (const usuario of usuarios) {
    
    let acumulador = 0;

    for (const movimiento of usuario.movimientos) {
        
        acumulador += movimiento;
    }

    usuario.totalUsuario = acumulador;

    console.log(`El saldo total de ${usuario.nombre} es: ${formatoCOP.format(usuario.totalUsuario)}`)
}