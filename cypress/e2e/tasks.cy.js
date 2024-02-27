/// <reference types="cypress" />

describe('tarefas', ()=>{
    it('deve cadastrar uma nova tarefa', ()=>{
        cy.visit('http://localhost:8080/')
        cy.request({
            url: 'http://127.0.0.1:3333/helper/tasks',
            method:'DELETE',
            body: {name:"Ler um livro de Node JS"}
        }).then(response => {
            expect(response.status).to.eq(204)
        })
        cy.get('input[placeholder="Add a new Task"]')
            .type('Ler um livro de Node JS')
        cy.get('._listButtonNewTask_1y0mp_40')
            .click()
        cy.get('input[placeholder="Add a new Task"]')
            .type('Ler livro de GOlang')
        cy.get('._listButtonNewTask_1y0mp_40')
            .click()            
       /* cy.get('._listItemText_1kgm5_39')
            .should('have.text', 'Ler um livro de Node JS')*/

        cy.contains('main div p', 'Ler um livro de Node JS')
            .should('be.visible')
    })

    it('não deve permitir tarefa duplicada', () =>{
        cy.visit('http://localhost:8080/')
        cy.get('input[placeholder="Add a new Task"]')
            .type('Ler um livro de Node JS')
        cy.get('._listButtonNewTask_1y0mp_40')
            .click()
    })
})