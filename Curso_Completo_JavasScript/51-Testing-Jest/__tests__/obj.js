const cliente = {
    nombre: 'Joel Enciso',
    balance: 900
}

describe('Testing al cliente',()=>{
    test('EL cliente es premium',()=>{
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Joel Enciso',()=>{
        expect(cliente.nombre).toBe('Joel Enciso');

    });
    test('No Es otro cliente',()=>{
        expect(cliente.nombre).not.toBe('Mario');
    });

    test('No tiene 900',()=>{
        expect(cliente.balance).not.toBe(600);
    })
})