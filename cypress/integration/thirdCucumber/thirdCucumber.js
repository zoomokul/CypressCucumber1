

import { Given,And,When,Then } from "cypress-cucumber-preprocessor/steps";


Given('open google search page',()=>{
    cy.visit("https://www.google.com/")
});

And('type',(datatable)=>{
    datatable.hashes().forEach(element => {

        cy.get("input[name='q']").type(element.language)
        cy.contains("Google'da Ara").click()
        cy.go('back')
      
     
        
    });

 
});



