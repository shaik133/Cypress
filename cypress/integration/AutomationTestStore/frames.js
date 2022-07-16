///  <reference types="cypress" />
/// <reference types="cypress-iframe"/>

import 'cypress-iframe'
describe("Handle iframes",function(){
    it("switch to iframe",function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('.dropdown-menu').invoke('show')
        cy.iframe().find("a[href*='about-my-mission']").eq(0).click({force: true})
        cy.iframe().contains('JOIN OUR ACADEMY').then(function(text){
            const name=text.text()
            expect(name).to.equal("JOIN OUR ACADEMY")
        })
        
    })
})