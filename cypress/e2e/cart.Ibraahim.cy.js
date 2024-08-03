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

      it( 'Should be able to view and select cart module',()=> {
        cy.get('._79484_1sLEt > :nth-child(2)').click()
        //modules should be shown and clickable
        cy.get('._0d327_3ftRW > [href="/category/phones-tablets-5294"]').click();
     
        //select preferred item to view details
        cy.get('[href="/product/samsung-galaxy-a35-6-6-6gb-ram-128gb-rom-5g-5000mah-lilac-6480838"] > picture > .f5e10_VzEXF').click();
      
        //Add item to Cart
        cy.get('._7bc9f_Ef1Zw > ._2aac2_3bwnD > ._0a08a_3czMG').click();

        //continue to checkout is clickable
        cy.get('.f082d_safAL > ._2aac2_3bwnD > ._0a08a_3czMG').click();
        

        


})    

})