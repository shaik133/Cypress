// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
 

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('selP',(productname)=>{
    cy.get(".card-title").each(($e1,index,$list)=>{
        if($e1.text().includes(productname))
        {
            cy.get(".btn.btn-info").eq(index).click()
        }
    }) 
})



//green cart Add to cart function
Cypress.Commands.add('selectVeg',function(veggies){
    cy.get("h4.product-name").each(($e1,index,$list)=>{
        if($e1.text().includes(veggies))
        {
            cy.get('button').eq(index).click()
        }
    })
})

//select country
Cypress.Commands.add('selectCountry',function(name){
    cy.get("#ui-id-1 li div").each(($e1,index,$list)=>{
if($e1.text()==(name))
    {
      cy.wrap($e1).click()
    }
})
   })
   
   Cypress.Commands.add("newWindow",function(){
    const url="http://www.qaclickacademy.com/"
    cy.window().then(function(win){
        const stub= cy.stub(win, 'open').as('Window')
    })
        cy.get("#openwindow").click()
        cy.get("@Window").should('be.calledWith',url)

        cy.window().then(win=>{
            win.location.href= url
            cy.contains("Courses").click()
        })
    })
  


//sum of price

Cypress.Commands.add('sum',function(){
    var sum=0
    cy.get("tr td:nth-child(4) strong").each(($e1,index,$list)=>{
        var price=$e1.text()
        price=price.split(" ")
        const actPrice= price[1].trim()
        // cy.log(actPrice)
        sum=Number(sum)+Number(actPrice)
    }).then(function(){
        cy.log(sum)
    })
    
    cy.get("h3 strong").then(function(ele){
        var prc=ele.text()
        prc=prc.split(" ")
        const totalPrc=prc[1].trim()
        expect(Number(totalPrc)).to.equal(sum)
        
    })
})

