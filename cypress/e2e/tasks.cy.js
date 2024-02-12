/// <reference types="cypress" />

describe('tarefas', ()=>{
    it('deve acessar a página', ()=>{
        cy.visit('http://localhost:8080/')

        //cy.get('#newTask')
        cy.get('input[placeholder="Add a new Task"]')
            .type('Ler um livro de Node JS')
        cy.get('._listButtonNewTask_1y0mp_40')
            .click()
        cy.get('._listItemText_1kgm5_39')
            .should('have.text', 'Ler um livro de Node JS')
    })
})