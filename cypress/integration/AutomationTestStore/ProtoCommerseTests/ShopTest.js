///  <reference types='cypress'/>

import ShopPage from '../../../support/PageObjectModel/ProtoCommerceShopPage'

before(function(){
    cy.fixture('example.json').then(function(data){
        this.data=data
    })
})

describe("ShopSuite",function(){
    it('Addto cartTest',function(){

        const shop= new ShopPage
        cy.visit(Cypress.env("Base_Url")+"angularpractice/shop")
        cy.title().should('include','ProtoCommerce')
        shop.listofElements().should('have.length','4')
        this.data.products.forEach(function(element){
            cy.selP(element)
        })
        shop.checkoutButton().click()
        shop.sumPrice()
        shop.conatinCheckout().click()
        shop.typeCountry(this.data.Country)
        cy.selectCountry(this.data.nameCountry)
        shop.cuntryInputTab().should('have.value','India')
        shop.checkbox().check({force:true}).should('be.checked')
        shop.purchaseBtn().click()
        shop.successMsg().should('be.visible')
        
    })
})
