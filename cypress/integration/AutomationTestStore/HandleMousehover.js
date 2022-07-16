describe("Automate RahulshettyPage", function(){
    it("Add products to cart",function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        //Handle mouse hover using jquery invoka and show method
        // cy.get('.mouse-hover-content').invoke('show')
        // cy.contains('Top').click()
        // cy.url().should('include','top')

        //forcefully clicking on the invisible element without mouse movement
        cy.contains('Reload').click({force: true})
        
        })

        it("Handle new window",function(){
            cy.get('#opentab').then(function(link){
               const url= link.prop('href')
               cy.visit(url)
            })
        })
    })
