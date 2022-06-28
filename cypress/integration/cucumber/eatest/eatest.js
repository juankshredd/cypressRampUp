import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps"

Given(`I visit EA Site`, ()=>{
    cy.visit('http://eaapp.somee.com/')
})

When(`I click login link`, ()=>{
    cy.contains('Login').click();
})

And(`I login as user with {string} and {string}`, (username, password)=>{
    cy.get('#UserName').type(username);
    cy.get('#Password').type(password, {log:false});
    cy.get('.btn').click();
})

And(`I login as following`, dataTable =>{
    dataTable.hashes().forEach(row =>{
        cy.get('#UserName').type(row.username);
        cy.get('#Password').type(row.password, {log:false});
    });

    cy.get('.btn').click();
})

Then(`I check error message {string}`, (message) =>{
    cy.get('.validation-summary-errors > ul > li')
    .should('be.visible')
    .should('include.text', message)
       
})