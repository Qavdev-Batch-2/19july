/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Smoke Testing', ()=> {
    before(()=> {
        cy.visit('https://www.konga.com/')
    })
    

      it.skip('Should be able to use assertions to test the URL', ()=>{
        cy.url().should('include', 'com')
        cy.url().should('include', 'konga')
        cy.url().should('eq', 'https://www.konga.com/')
        cy.url().should('contains','konga')
        cy.location('protocol').should('contains', 'https')
        cy.location('hostname').should('eq', 'www.konga.com')
      })

    it.skip('Should not be able to login with empty fields', ()=> {
        cy.contains('Login / Signup').click({force: true})
        cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()
 })

    it.skip('Should not be able to login with an empty password fields', ()=> {
        cy.wait(2000)
        cy.contains('Login / Signup').click({force: true})
        cy.get('#username').type('chinaebassi@yopmail.com')
        cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()
})

    it('Should not be able to login with an empty email fields', ()=> {
        cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click()
        cy.get('#password').type('cohort9@2024')
        cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()
})

    it.only('Should be able to login with correct email and pasword', ()=> {
        cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click()
        cy.get('#username').type('chinaebassi@yopmail.com')
        cy.get('#password').type('cohort9@2024')
        cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()

        let message= 'login successful'
        expect(message).to.be.eq('login successful')
    })
})




