// Estructuras de control. Switch

// Switch case

const metodoDePago = "Efectivo";

switch (metodoDePago) {
    case "Efectivo":
        console.log(`Pagaste con ${efectivo}`);        
        break;
        
        
    case "Cheque":
        console.log(`Pagaste con ${cheque}`);        
        break;

    default:
    console.log("metodo de pago no registrado");
        break;
}
