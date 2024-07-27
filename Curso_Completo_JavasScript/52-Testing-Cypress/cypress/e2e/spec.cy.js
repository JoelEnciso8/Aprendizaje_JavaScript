describe('Carga la pagina principal', () => {
  it('carga la pagina principal', () => {
    // verifica que la url que se ingreso cumpla para la revision
    cy.visit('http://127.0.0.1:5500/Aprendizaje_Javascript/Curso_Completo_JavasScript/52-Testing-Cypress/index.html')

    // Verifica el elemento y su texto
    cy.contains('[data-cy="proyecto"]','Administrador de Pacientes de Veterinaria')

    // verifica que exista el texto en el proyecto, html
    cy.get('[data-cy="proyecto"]').should('exist')

    // verifica que exista el elemento y contenga un texto
    cy.get('[data-cy="proyecto"]')
    .invoke('text')
    .should('equal','Administrador de Pacientes de Veterinaria')

    // verifica el texto de la cita
    cy.get('[data-cy="heading"]')
    .invoke('text')
    .should('equal','No hay Citas, comienza creando una')

   
  })
})