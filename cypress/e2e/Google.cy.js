/// <reference types="cypress" />

describe('Smoke Testing', ()=> {
    beforeEach(()=> {
        cy.visit('https://www.google.com/')
    })
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    it('Should be able to search on google', ()=> {
      
        
})
})