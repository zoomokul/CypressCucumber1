

import { Given,And,When,Then } from "cypress-cucumber-preprocessor/steps";


Given('open google search page',()=>{
    cy.visit("https://www.google.com.tr/")
});

And('type {string} on search box',(language)=>{
    cy.get("input[name='q']").type(language)
});

When('click the search on google',()=>{

    cy.get(".gNO89b").last().click({force: true})
});

Then('got {string} search result',(language)=>{

    cy.title().should("include",language)
});