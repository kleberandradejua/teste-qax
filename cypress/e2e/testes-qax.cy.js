/// <reference types="cypress" />


describe('acesso ao site', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.title().should('be.equal', 'Gerencie suas tarefas com Mark L')

  })
})