// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Reusable login functionality using command.js in cypress
Cypress.Commands.add('login',(email, password)=>{
    cy.contains('Login / Signup').click({force: true})
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()
})