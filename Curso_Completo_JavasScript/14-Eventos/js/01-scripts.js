console.log(1);
// listener commmun, fn anonima
document.addEventListener('DOMContentLoaded', () => { //sintaxis correcta
    // console.log('Documento listo');
    console.log(2); // cuando el doc esta listo este se ejecuta
})

console.log(3);

// DOMContentLoaded. The DOMContentLoaded event fires when the HTML document has been completely parsed,
//  and all deferred scripts (<script defer src="…"> and <script type="module">) have downloaded and executed.
//  It doesn't wait for other things like images, subframes, and async scripts to finish loading.

