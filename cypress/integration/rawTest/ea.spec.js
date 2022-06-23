/// <reference types="Cypress"/>

describe("Testing os EA App", ()=>{

    before("Call for a particular it block", ()=>{
        cy.visit('http://eaapp.somee.com/')
    })

    it("Login application", ()=>{

    // working with variables

    // Esta forma de hacerlo es inexacta, se recomienda hacer uso de get() y los selectores de id o clase
        // cy.contains("Login").then(($link)=>{
        //     const linkText = $link.text()  // assertion with variables
        //     expect(linkText).is.eql('Login')
        // }).click()


    
    // var linkText;
    // 
    //     cy
    //         .get("#loginLink")
    //         .then(($link)=>{
    //             linkText = $link.text()
    //             expect(linkText).is.eql('Login')
    //         }).click()


    // Using Alias
    


        // long way of working with promise (Closure)
        // cy
        //     .get("#loginLink")
        //     .then(($link)=>{
        //         return $link.text();
        //     }).as("linkText")

        // short way working with promise using invoke()
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