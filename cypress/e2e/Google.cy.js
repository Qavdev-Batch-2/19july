/// <reference types="cypress" />

const { should } = require("chai")

describe('Smoke Testing', ()=> {
    beforeEach(()=> {
        cy.visit('https://www.google.com/')
    })
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    it.skip('Should be able to search on google', ()=> {
        //Getting Selectors

        //cy.get('.gLFyf').type('john chimezie')
        //cy.get('#APjFq').type('King john')
        //cy.get('[id="APjFqb"]').type('King john')
        //cy.get('[name="q"]').type('Master John{enter}')

            //Handling auto suggestion
        //cy.get('#APjFqb').type('Best food in Africa')
        //cy.contains('best dishes in africa ranking').click()
})

    it('Should be able to use assertions', ()=>{

    })

})