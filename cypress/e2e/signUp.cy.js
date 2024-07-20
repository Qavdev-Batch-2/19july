/// <reference types="cypress" />

describe('Testing Signup', ()=> {
    beforeEach(()=> {
        cy.visit('https://www.konga.com/')
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('Should be able to signup', ()=> {
        // Enter information
        cy.contains('Login / Signup').click({force: true})
        cy.get('.a5075_16PDh').click()
        cy.get('#firstname').type('Mahzeel')
        cy.get('#lastname').type('John')
        cy.get('#email').type('chinaebassi@yopmail.com')
        cy.get('#phone').type('08087279092')
        cy.get('#password').type('cohort9@2024', {log: false})
        cy.get('._0a08a_3czMG').click()

        // Enter Pin
        cy.get('#pin').type(4945)
        cy.get('._0a08a_3czMG').click()
    })
})
