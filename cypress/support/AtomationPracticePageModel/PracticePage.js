class Practicepage

{

RadioBtn()
{
  return  cy.get("input[value='radio1']")
}
suggestCountry()
{
return cy.get("#autocomplete")
}
selectCuntry(name)
{
  return cy.selectCountry(name)
}

selectDropdown()
{
    return cy.get("#dropdown-class-example")
}

checkbox()
{
    return cy.get("input[type='checkbox']")
}

newTabclick()
{
    return cy.get("#opentab")
}

windowOpen()
{
    cy.newWindow()

}

courseClick()
{
   return cy.contains("Courses")
}
}

export default Practicepage