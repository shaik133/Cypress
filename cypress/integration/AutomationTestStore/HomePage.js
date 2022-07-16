///  <reference types="cypress" />

describe("automatioteststore",function(){
   it("Launch_WebPage",()=>{
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      // cy.get("input[type='search']").type("Cucumber");
      cy.get(".products .product").should('have.length',30)
      // Creating alias
      cy.get(".products").as("allProducts")
      cy.get("@allProducts").find(".product").eq(5).contains("ADD TO CART").click();
      cy.get("@allProducts").find(".product").each(($e1, index, $list) =>{
         const prodName=$e1.find("h4.product-name").text()
         if(prodName.includes("Beans")){
           cy.wrap($e1).find("button").click()
         }
      })
      cy.get(".brand.greenlogo").then(function(logo){
         cy.log(logo.text())
      })
      
   })
})