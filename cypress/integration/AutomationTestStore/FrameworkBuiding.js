describe("ProtractorPractice",function(){
  beforeEach(function(){
    cy.fixture("example.json").then(function(data){
        this.data=data
    })
  })

  it("Test1",function(){
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    cy.get(".form-group input[name='name']").type(this.data.name)
    //check att minlength  is having min value 2
    cy.get(".form-group input[name='name']").should('have.attr','minlength','2')

    //to check databinding returns same name as in entring in name field
    cy.get("h4 input[type='text']").should('have.value',this.data.name)

    cy.get("input[name='email']").type(this.data.email)
    cy.get('#exampleCheck1').check().should('be.checked')

    // select dropdown to select gender
    cy.get("#exampleFormControlSelect1").select(this.data.gender)

    //select radio button
    cy.get("#inlineRadio1").check().should('be.checked')

    //check if elemnt is disabled
    cy.get("#inlineRadio3").should('be.disabled')

  })
  it("shopTest",function(){
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    cy.get("a[href*='shop']").click()
    //iterate through list of elements and grab one element and add to cart
    this.data.products.forEach(function(element) {
        cy.selP(element)
    });
    
  })
})