

import { Given,And,When,Then } from "cypress-cucumber-preprocessor/steps";


Given('open google search page',()=>{
    cy.visit("https://www.google.com.tr/")
});

And('type javascript on search box',()=>{
    cy.get("input[name='q']").type("javascript")
});

When('click the search on google',()=>{

    cy.get(".gNO89b").last().click()
});

Then('got javascript search result',()=>{

    cy.title().should("include","javascript")
});