/// <reference types="cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Smoke Testing', ()=> {
    beforeEach(()=> {
        cy.visit('https://www.konga.com/')
        cy.login('chinaebassi@yopmail.com', 'cohort9@2024')

    })

    it('Should be able to use assertions to test the URL', ()=>{
        cy.url().should('include', 'com')
        cy.url().should('include', 'konga')
        cy.url().should('eq', 'https://www.konga.com/')
        cy.url().should('contains','konga')
        cy.location('protocol').should('contains', 'https')
        cy.location('hostname').should('eq', 'www.konga.com')
    })

    
})
