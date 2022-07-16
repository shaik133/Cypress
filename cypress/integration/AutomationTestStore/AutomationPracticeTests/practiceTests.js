/// <reference types='cypress'/>

import Practicepage from "../../../support/AtomationPracticePageModel/PracticePage"

before(function(){
    cy.fixture("example.json").then(function(data){
        this.data=data
    })
})
describe("AutomationPractice", function(){
    it("practiceTest",function(){
        const page= new Practicepage()
        cy.visit(Cypress.env("Base_Url")+"AutomationPractice/")
        cy.title().should('eq','Practice Page')

        page.RadioBtn().click().should("be.checked").and("have.value",'radio1')
        page.suggestCountry().type(this.data.Country)
        page.selectCuntry(this.data.nameCountry)
        page.suggestCountry().should('have.value',this.data.nameCountry)
        page.selectDropdown().select("option2").should('have.value','option2')
        page.checkbox().check(['option1','option2']).should('be.checked')
        page.newTabclick().invoke("removeAttr",'target').click()
        cy.go("back")
        page.windowOpen()
        
        
    })
})