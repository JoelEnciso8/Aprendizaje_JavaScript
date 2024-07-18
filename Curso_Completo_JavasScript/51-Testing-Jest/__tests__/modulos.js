import{suma} from '../js/funciones.js'

describe('suma de dos numeros',()=>{
    test('Sum 10 y 20 return 30',()=>{
        expect(suma(10,20).toBe(30))
    })
})