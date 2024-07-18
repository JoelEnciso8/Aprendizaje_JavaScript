function suma(a,b) {
    return a +b
}

function resta(a,b) {
    return a -b
}


describe('Testing a las fn de sum /rest',()=>{
    test('sum de 20 + 30',()=>{
        expect(suma(20, 30)).toBe(50);
    });

    test('resta de 80 - 30',()=>{
        expect(resta(80, 30)).toBe(50);
    });


    test('sum 10 y 10 no sea 10 ',()=>{
        expect(suma(10, 10)).not.toBe(10);
    });

    test('la resta no es el valor ',()=>{
        expect(resta(10, 10)).not.toBe(2);
    });


})