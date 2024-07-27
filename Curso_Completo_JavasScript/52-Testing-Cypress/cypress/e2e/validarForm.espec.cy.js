///  <reference types ='cypress' />

describe('validar Formulario',()=>{
    it('Submit al formulario y mostrar alerta',()=>{
        cy.visit('http://127.0.0.1:5500/Aprendizaje_Javascript/Curso_Completo_JavasScript/52-Testing-Cypress/index.html');

        // testing al DOM
    cy.get('[data-cy="formulario"]').submit();
    // seleccionar la alerta

    cy.get('[data-cy="alerta"]')
    .invoke('text')
    .should('equal','Todos los campos son Obligatorios')

    
    cy.get('[data-cy="alerta"]')
    .should('have.class','alert-danger')    

    })
})