/// <reference types="Cypress"/>

describe("Testing os EA App", ()=>{

    before("Call for a particular it block", ()=>{
        cy.visit('http://eaapp.somee.com/')
    })

    it("Login application", ()=>{
        // enter the website
        cy.visit('http://eaapp.somee.com/')
        cy.get("#loginLink").invoke('text').as("linkText")


        cy.contains("Login").click()

        cy.get("@linkText").then(($x)=>{
            expect($x).is.eql('Login');
        })

        cy.url().should("include", "/Account/Login")
        cy.get('#UserName').type("admin")
        cy.get('#Password').type("password")
        cy.get('.btn').click({force:true})
        // click employee list
        cy.get('.navbar-collapse > :nth-child(1) > :nth-child(3) > a').click()


        // table
        // cy.get(".table").find('tr').contains('Prashanth').parent().contains('Benefits').click() 
        // cy.get('.table').find('tr').as("rows");

        // // using wrap
        // cy.get("@rows").then(($row)=>{
        //     cy.wrap($row).click({multiple:true})
        // })



        // verify the value from a property
        cy.wrap({name:'Karthik'}).should('have.property','name').and('eq','Karthik');

        cy.get('.table').find('tr > td').then(($td)=>{
            cy.wrap($td).contains("John").invoke("wrap").parent().contains("Benefits").click();
        })

    })

})