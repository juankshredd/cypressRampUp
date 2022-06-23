/// <reference types="cypress"/>

describe("Testing AE App", ()=>{
    beforeEach("Call for a particular it block", ()=>{
        cy.visit("http://www.executeautomation.com/site");
    })

    it("Testing EA site for assertion", ()=>{

        // explicit
        cy.get('.ct-header-content > .ct-ul', {timeout:6000}).should('have.class', 'ct-ul');

        // implicit
        // cy.get('.ct-header-content > .ct-ul', {timeout:6000}).should(($x)=>{
        //     expect($x).to.have.class("ct-ul");
        // })
    })

    it("Testing EA site for assertion with hooks", ()=>{

        // explicit assertion
        //cy.get('.ct-header-content > .ct-ul', {timeout:6000}).should('have.class', 'ct-ul');

        // implicit assertion
        cy.get('.ct-header-content > .ct-ul', {timeout:6000}).should(($x)=>{
            expect($x).to.have.class("ct-ul");
        })
    })
})