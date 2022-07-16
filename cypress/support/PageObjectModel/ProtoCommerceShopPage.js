///  <reference types='cypress'/>

class ShopPage
{

    listofElements()
    {
        return cy.get(".card-title")
    }


    checkoutButton()
    {
        return cy.get(".nav-link.btn.btn-primary")
    }

    sumPrice()
    {
       return cy.sum()
    }

    conatinCheckout()
    {
        return cy.contains("Checkout")
    }

    typeCountry(value)
    {
        cy.get("#country").type(value)
        cy.wait(4000)
    }

    cuntryInputTab()
    {
        return cy.get("#country")
    }

    checkbox()
    {
        return cy.get("#checkbox2")
    }

    purchaseBtn()
    {
        return cy.get("input[value='Purchase']")
    }

    successMsg()
    {
        return cy.get("div[class*='alert-success']")
           
    }
}

export default ShopPage