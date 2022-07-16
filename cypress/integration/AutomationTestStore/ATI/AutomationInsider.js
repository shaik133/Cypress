

before(function(){
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
})

describe("Rahulshetty page",()=>{
    it("Title of the page",()=>{
        cy.title().should('be.eq',"Practice Page")
    })

    it("Radio btn",()=>{
        cy.get("input[value='radio2']").trigger("check").should('have.value','radio2')
    })

    it("Auto suggestion",()=>{
        cy.get("#autocomplete").type("ind")
        cy.get(".ui-menu-item-wrapper").contains("British Indian Ocean Territory").click()
        cy.get("#autocomplete").should('have.value',"British Indian Ocean Territory")
    })

    it("Select drop down",()=>{
        cy.get("#dropdown-class-example").select("option2").should('have.value',"option2")
    })

    it("Select check box",()=>{
        cy.get("input[type='checkbox']").check(["option1","option3"])
    })

    /*it("Open new Window",()=>{
       const url= "https://www.qaclickacademy.com/";
        
        cy.window((win=>{
            const stub= cy.stub(win,"open").as("New window"); 
        }))
        cy.get("#openwindow").click()
        cy.get("@New window").should("be.calledWith",url)

    })*/

    it("Open new Tab",()=>{
        cy.get("#opentab").invoke("removeAttr","target").click()
        cy.go("back")
    })

    it("Alerts",()=>{
        cy.get("#name").type("name")
        cy.on("window:alert",alertText=>{
            expect(alertText).to.eq("Hello name, share this practice page and share your knowledge")
        })
        cy.get("#alertbtn").click()

        //confirm alert
        cy.on("window:confirm",confirmText=>{
            expect(confirmText).to.eq("Hello , Are you sure you want to confirm?")
        })
        cy.get("#confirmbtn").click()
    })

    it("Hide button",()=>{
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should("not.be.visible")

        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should("be.visible")
    })

    it("Iterate web element",()=>{
        cy.get("#product tbody tr td:nth-child(2)").each(($ele,index,$list)=>{
            if($ele.text()=="Master Selenium Automation in simple Python Language"){
                cy.get("#product tbody tr td:nth-child(2)").eq(index).next().then(function(str){
                    const textName=str.text()
                    expect(textName).to.eq("25")
                })
            }
        })
    })

    it("Calculate the sum of amount",()=>{
      
        let sum=0;
        // const actAmt="";
        cy.get(".tableFixHead tr td:nth-child(4)").each(($ele, index,$list)=>{
          sum=Number(sum)+Number($ele.text())
        }).then(function(){
            cy.log(sum)
        })

        cy.get(".totalAmount").then((str)=>{
            let amount=str.text()
            let totalAmount=amount.split(":")[1]
             const actAmt=totalAmount.trim()
                cy.log(actAmt)
             
                expect(sum).to.eq(Number(actAmt))
            
           })
           
        
        })
       
        it("MouseHover",()=>{
            cy.get("#mousehover").trigger("mouseover")
            cy.get("a[href*='top']").click({force: true})
        })

        it("i frame switch",()=>{
            cy.frameLoaded("#courses-iframe")
           // cy.iframe().find(".nav-outer.clearfix .main-menu a[href*='practice']").click()
           cy.iframe().contains("Access to All Courses").click()

           })

           it.only("Footer links checks",()=>{
       cy.get("#gf-BIG").find(".gf-li a").each(($ele)=>{
      cy.request($ele.prop("href")).as("links");
       })
    //    cy.get("@links").should((response)=>{
    //     expect(response.status).to.eq(200)
    //    })
           })
        })
  
