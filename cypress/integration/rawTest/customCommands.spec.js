/// <reference types="Cypress"/>

describe("Testing os EA App", ()=>{

    before("Call for a particular it block", ()=>{
        cy.visit('http://eaapp.somee.com/');
        cy.fixture("eauser").as("user");  // desde esta linea se conecta el archivo del fixture donde estan las credenciales

        // Aqui se toma el fixture como user y con eso se usan su contenido para llenar los campos
        cy.get("@user").then((user)=>{
            cy.login(user.UserName, user.Password);
        });
    })

    it("Login application", ()=>{
 
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