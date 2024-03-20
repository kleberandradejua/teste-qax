/// <reference types="cypress" />

describe('tarefas', ()=>{

    context('Cadastro', ()=> {
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
    
        it('Campo obrigatório', ()=>{
            cy.createTask()
            cy.isRequired('This is a required field')
        })
    })

    context('Atualizalção', ()=>{
        it('Deve concluir uma tarefa', ()=>{
            const task = {
                name: 'Ler um livro de Node JS',
                is_done: false
            }

            cy.removeTaskByName(task.name)
            cy.postTask(task)

            cy.visit('http://localhost:8080/')

            cy.contains('p', task.name)
            .parent()
            .find('button[class*=ItemToggle]')
            .click()

            cy.contains('p', task.name)
            .should('have.css', 'text-decoration-line')
        })
    })
})
