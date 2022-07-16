describe("Automate GreenKartPage", function(){
    before(function(){
        cy.fixture('example.json').then(function(vegData){
            this.vegData=vegData
        })
    })
it("Add products to cart",function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    //select list of products
    cy.get(".products").as('allProducts')
    // cy.get('@allProducts').find('.product').each(($e1,index,$list)=>{
    //     const prodName=$e1.find("h4.product-name").text()
    //     if(prodName.includes('Cauliflower')){
    //         cy.wrap($e1).find('button').click()
    //     }
    // })
    this.vegData.vegProducts.forEach(function(element){
        cy.selectVeg(element)
    })
    
    cy.get('.brand').then(function(logoText){
        cy.log(logoText.text())
    })
    cy.get('.brand').should('have.text','GREENKART')
    cy.get('.cart-icon img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
})
it("CheckBox practise",function(){
cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
//selecting the check box
cy.get("#checkBoxOption1").check()
//validating/Asserting if checked the check box and selected correct checkbox
cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1')
//selecting multiple checkbox
cy.get("input[type='checkbox']").check(['option2','option3']).should('be.checked')
//Handle static drop down
cy.get("#dropdown-class-example").select('option3').should('have.value','option3')
//handling dynamic dropdown
cy.get("#autocomplete").type("ind")
cy.get(".ui-menu-item div").each(($e1,index,$list)=>{
    if($e1.text()=="India")
    {
        cy.wrap($e1).click()
    }
})
cy.get("#autocomplete").should('have.value','India')
//handling visible and invisible elements
cy.get('#displayed-text').should('be.visible')
cy.get("#hide-textbox").click()
cy.get('#displayed-text').should('not.be.visible')
cy.wait(3000)
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')
//check the radio button
cy.get('.radioButton').check().should('be.checked')

//Handling alerts text
//window alerts are automatically cypress will hadndle
cy.get('#alertbtn').click()
//to get the text present in alerts we need to trigger the browser events that is window:alert for normal alert and window:confirm for confirm alerts
cy.on('window:alert',(str)=>{
    expect(str).to.equal("Hello , share this practice page and share your knowledge")
})
cy.get('#confirmbtn').click()
//to get the text present in alerts we need to trigger the browser events that is window:alert for normal alert and window:confirm for confirm alerts
cy.on('window:confirm',(str)=>{
    expect(str).to.equal("Hello , Are you sure you want to confirm?")
})
})

it("Handle child window", function(){
//Manipulate dom by removing 'target attribute' using jquery 'removeAtt' function and cypress 'invoke' command
cy.get('#opentab').invoke('removeAttr','target').click()
cy.url().should('include','rahulshettyacademy')
cy.go('back')
})

//Handling dynamic webtable
it("Handling dynamic webtable",function(){
    cy.get("tr td:nth-child(2)").each(($e1,index,$list)=>{
        const text=$e1.text()
       if(text.includes('Python')){
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
            const priceValue=price.text()
            expect(priceValue).to.equal('25')
        })
       
       }
       
    })
})
})