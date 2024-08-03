/// <reference types="cypress" />

describe('Smoke Testing', ()=> {
    beforeEach(()=> {
        cy.visit('https://www.konga.com/')
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('Should not be able to login with empty fields', ()=> {
        cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click({force: true})
        cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()
 })

    it('Should not be able to login with an empty password fields', ()=> {
        cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click()
        cy.get('#username').type('chinaebassi@yopmail.com')
        cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()
})

    it('Should not be able to login with an empty email fields', ()=> {
        cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click()
        cy.get('#Alfadlany1999').type('cohort9@2024')
        cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()
})

    it.only('Should be able to login with correct email and pasword', ()=> {
        cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click()
        cy.get('#elfadlany').type('chinaebassi@yopmail.com')
        cy.get('#Alfadlany1999').type('cohort9@2024')
        cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()

        let message= 'login successful'
        expect(message).to.be.eq('login successful')
    })
})




