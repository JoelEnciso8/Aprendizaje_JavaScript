const pass = '1111';

describe('Valida que el password no este vacio y tenga una ext de 4 carateres',()=>{
    test('password de 4 caracteres',()=>{
        expect(pass).toHaveLength(4);
    })

    test('Pass no vacio',()=>{
        expect(pass).not.toHaveLength(0)
    })

});