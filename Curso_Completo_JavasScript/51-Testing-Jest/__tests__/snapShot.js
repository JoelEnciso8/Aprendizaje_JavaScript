const cliente = {
    nombre: 'Joel Steve Enciso Bravo',
    balance: 900,
    tipo: 'Premium'
};

    describe('Testing Cliente',()=>{
        test('Joel Enciso',()=>{
            expect(cliente).toMatchSnapshot();
        });
        
    });
