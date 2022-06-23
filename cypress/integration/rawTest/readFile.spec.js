/// <reference types="Cypress"/>

describe("Testing os EA App", ()=>{

    before("Call for a particular it block", ()=>{
        cy.visit('http://eaapp.somee.com/');
        cy.fixture("eauser").as("user");  // desde esta linea se conecta el archivo del fixture donde estan las credenciales
    })

    it("Login application", ()=>{

    // Using Alias
        // long way of working with promise (Closure)
        // cy
        //     .get("#loginLink")
        //     .then(($link)=>{
        //         return $link.text();
        //     }).as("linkText")

        // short way working with promise using invoke()
        cy.get("#loginLink").invoke('text').as("linkText");

        cy.contains("Login").click();

        cy.get("@linkText").then(($x)=>{
            expect($x).is.eql('Login');
        });

        cy.url().should("include", "/Account/Login");

        // Aqui se toma el fixture como user y con eso se usan su contenido para llenar los campos
        cy.get("@user").then((user)=>{
            cy.get('#UserName').type(user.UserName);
            cy.get('#Password').type(user.Password);
        });
 
        cy.get('.btn').click({force:true});
        // click employee list
        cy.get('.navbar-collapse > :nth-child(1) > :nth-child(3) > a').click();

        // table
        cy.get(".table").find('tr').contains('Prashanth').parent().contains('Benefits').click();
        cy.get('.table').find('tr').as("rows");

        // // using wrap
        cy.get("@rows").then(($row)=>{
            cy.wrap($row).click({multiple:true});
        });

        // verify the value from a property
        cy.wrap({name:'Karthik'}).should('have.property','name').and('eq','Karthik');

    });
});