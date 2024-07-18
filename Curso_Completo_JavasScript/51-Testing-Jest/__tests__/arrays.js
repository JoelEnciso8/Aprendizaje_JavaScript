const carrito =['Producto 1','Producto 2','Producto 3',];

describe('Testing al carrito de compras',()=>{
    test('probar que eel arr tenga 3 elem',()=>{
    expect(carrito).toHaveLength(3)
    });
    
    test('verificar que el carrito no este vacio',()=>{
        expect(carrito).not.toHaveLength(0)

    })
})