import  Citas  from "../js/classes/Citas";
/*
probamos el metodo citas en un Snapshot para tener la evidencia visual de como se implementa el codigo y ver su funcionamiento
*/ 



describe('Probar la clase de citas',()=>{

    const citas = new Citas()

    test('Agregando nueva cita',()=>{
        const citaObj = {
            mascota: 'hook',
            propietario: 'Joel',
            telefono: '1345',
            fecha: '12-12-2000',
            hora:'12:00',
            sintomas: 'sleep'
        };

        citaObj.id = Date.now()

        citas.agregarCita(citaObj)


        expect(citas).toMatchSnapshot();
    });




}); 

