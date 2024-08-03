/// <reference types="cypress" />

const { should } = require("chai")

describe('Smoke Testing', ()=> {
    beforeEach(()=> {
        cy.visit('https://www.google.com/')
    })

    
    it('Should be able to use assertions', ()=>{

    })

})