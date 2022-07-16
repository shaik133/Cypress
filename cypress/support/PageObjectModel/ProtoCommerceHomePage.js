///  <reference types='cypress'/>

class HomePage
{

enterName(value)
{
  const name=  cy.get(".form-group input[name='name']")
  name.clear()
  name.type(value)
  return this
}
enterEmail(value)
{
    const email=cy.get("input[name='email']")
    email.clear()
    email.type(value)
    return this
}
enterPwd(value)
{
const password=cy.get("input[type='password']")
password.clear()
password.type(value)
return this
}

checkbox()
{
   return cy.get("#exampleCheck1")
    
    
}

selectDropdown(value)
{
    const dropdown= cy.get("#exampleFormControlSelect1")
    dropdown.select(value)
}

radioClick()
{
    return cy.get("#inlineRadio1")
}
entreprenaurDisable()
{
   return  cy.get("#inlineRadio3")
}
two_wayBinding()
{
    return cy.get("h4 input")
}
shopButton()
{
    return cy.get("a[href*='shop']")
}
}



export default HomePage