///  <reference types ='cypress' />

describe('Llena los campos', () => {
    it('Campos nueva cita', () => {
      // verifica que la url que se ingreso cumpla para la revision
      cy.visit('http://127.0.0.1:5500/Aprendizaje_Javascript/Curso_Completo_JavasScript/52-Testing-Cypress/index.html')
  
       // Verifica el elemento y su texto
    cy.get('[data-cy="mascota-cy"]')
    .type('Lupe');

    cy.get('[data-cy="propietario-cy"]')
    .type('Joel Enciso');

    cy.get('[data-cy="telefono-cy"]')
    .type('3043987834');

    cy.get('[data-cy="fecha-cy"]')
    .type('2024-12-20');

    cy.get('[data-cy="hora-cy"]')
    .type('20:40');

    cy.get('[data-cy="sintomas-cy"]')
    .type('Apetito voraz e insasiable, toda una cerda');

    cy.get('[data-cy="submit-cy"]')
    .click();

        // verifica el texto de la cita
    cy.get('[data-cy="heading"]')
        .invoke('text')
        .should('equal','Administra tus Citas') // hay que tener cuidado con los espacios en blanco para que la lectura del testing sea correcto.

        cy.get('[data-cy="alerta"]')
        .invoke('text')
        .should('equal','Se agregó correctamente') // hay que tener cuidado con los espacios en blanco para que la lectura del testing sea correcto.

        // Selecciona la alerta
    cy.get('[data-cy="alerta"]')
        .should('have.class','alert-success') 

    });

    it('Edita la cita',()=>{
        cy.get('[data-cy="btn-editar"]')
        .click();

        cy.get('[data-cy="mascota-cy"]')
        .clear()
        .type('Sky');
    
        cy.get('[data-cy="propietario-cy"]')
        .clear()
        .type('Susana Perez');
    
        cy.get('[data-cy="telefono-cy"]')
        .clear()
        .type('134567');
    
        cy.get('[data-cy="fecha-cy"]')
        .clear()
        .type('2024-07-20');
    
        cy.get('[data-cy="hora-cy"]')
        .clear()
        .type('08:45');
    
        cy.get('[data-cy="sintomas-cy"]')
        .clear()
        .type('Mimada y hermosa');
    
        cy.get('[data-cy="submit-cy"]')
        .click();

        cy.get('[data-cy="alerta"]')
        .invoke('text')
        .should('equal','Guardado Correctamente'); // hay que tener cuidado con los espacios en blanco para que la lectura del testing sea correcto.
        


    });

    // Eliminando Cita 
    it('Eliminando cita',()=>{
        cy.get('[data-cy="btn-eliminar"]')
        .click();

                // verifica el texto de la cita
    cy.get('[data-cy="heading"]')
    .invoke('text')
    .should('equal','No hay Citas, comienza creando una'); // hay que tener cuidado con los espacios en blanco para que la lectura del testing sea correcto.
    });

    
  });