///  <reference types='cypress'/>

import HomePage from '../../../support/PageObjectModel/ProtoCommerceHomePage'
before(function(){
    cy.fixture('example.json').then(function(data){
        this.data=data
    })
})


describe("ProtcommerseHomePage",function(){
    it('HomepageTest',function(){
        const hp= new HomePage()
        cy.visit(Cypress.env("Base_url")+"angularpractice/")
        hp.enterName(this.data.name)
        hp.enterEmail(this.data.email)
        hp.enterPwd(this.data.password)
        hp.checkbox().check().should('be.checked')
        hp.selectDropdown(this.data.gender)
        hp.radioClick().check().should('be.checked').and('have.value','option1')
        hp.entreprenaurDisable().should('be.disabled')
        hp.two_wayBinding().should('have.value',this.data.name)
        hp.shopButton().click()
    })
})