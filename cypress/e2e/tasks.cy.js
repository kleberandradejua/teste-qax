/// <reference types="cypress" />

describe('tarefas', ()=>{
    it('Deve cadastrar uma nova tarefa', ()=>{

        var taskName = 'Ler um livro de Node JS'
        cy.removeTaskByName(taskName)
        cy.createTask(taskName)

        cy.contains('main div p', taskName)
            .should('be.visible')
    })

    it('Não deve permitir tarefa duplicada', ()=> {

        const task = {
            name: 'Páscoa em abril de 1998',
            is_done: false
        }

        cy.removeTaskByName(task.name)
        cy.postTask(task)        
        cy.createTask(task.name)   
        
        cy.get('.swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Task already exists!')
    })

    it.only('Campo obrigatório', ()=>{
        cy.createTask()
    })
})
