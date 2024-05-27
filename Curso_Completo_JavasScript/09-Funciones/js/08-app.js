let total = 0;
function aggCarrito(precio) {
    return total += precio;
}

function calcularTaxes(total) {
    return total *1.15;
}

aggCarrito(300)

const totalPagar = calcularTaxes(total)
console.log(`El total a pagar es de ${totalPagar}`);
