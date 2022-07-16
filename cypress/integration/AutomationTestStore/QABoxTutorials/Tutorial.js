

describe("QA Box Tutorials",()=>{

    before(function(){
        cy.visit(Cypress.env("Base_Url")+"AutomationPractice/")
    })

    it("Document_Get_Title",()=>{
        cy.document().should(doc=>{
            const docObj=doc.title
            expect(docObj).to.eq("Practice Page")
        })
        })
    it("Get_Title_By_Cy_Command",()=>{
    
        cy.title().then(function(Title){
            expect(Title).to.eq("Practice Page")
        })
    })
    it("Get width and height of the document by doc object",()=>{
        cy.document().should(doc=>{
            const docObj=Cypress.$(doc)
            let height=docObj.height()
            let width=docObj.width()
            cy.log(height)
            cy.log(width)
        })
    })
    it("Get width and height using cy command",()=>{
        cy.viewport("iphone-x","portrait")
    })
    
    it("Set and get cookies by document",()=>{
        //create cookie
        cy.document().should(doc=>{
            doc.cookie="username=shaikjafarsadq"
            //get cookie
           cy.log(doc.cookie)
            //update cookie
            doc.cookie("username=shaik")
            //clear cookie
            doc.cookie("userbame=")
            //get cookie
            cy.log(doc.cookie)
        })
    })

    it("Set and get cookies by cy",()=>{
        //set cookie
        cy.setCookie("username","Shik")
        //get cookie
        cy.getCookie("username")
        //update cookie
        cy.setCookie("username","shaikjafar")
        //clear cookie
        cy.clearCookie("username")
    })

    it("Handle simple alert",()=>{
        cy.get("#alertbtn").click()
        cy.on("window:alert",str=>{
            expect(str).to.eq("Hello , share this practice page and share your knowledge")
        })
    })

    it("handle confrimation alerts",()=>{

        cy.get("#confirmbtn").click()
        cy.on("window:confirm",str=>{
            expect(str).to.eq("Hello , Are you sure you want to confirm?")
            return true
        })

    })
    it("new window invoke",()=>{
        const url="http://www.qaclickacademy.com/";
        cy.window().then(win=>{
          const stub=  cy.stub(win, 'open').as("newwindow");
        })
        cy.get("#openwindow").click()
        cy.get("@newwindow").should("be.calledWith", url)
    })

    it("handle i-frames",()=>{
        cy.frameLoaded("#courses-iframe")
        cy.iframe().contains("Register").click()
    })

    it.only("Mouse hover",()=>{
        cy.get("#mousehover").trigger('mouseover')
        cy.get("#mousehover").trigger('focus')
        cy.get('a[href*=top').trigger("click")

        
    })

    it("upload file",()=>{
        cy.visit("https://www.automationtestinginsider.com/2019/08/textarea-textarea-element-defines-multi.html")
        cy.get("#fileupload1").attachFile("Dr. Pasha CV-APRIL.pdf")
    })

    it("auto suggest drop down",()=>{
        cy.get("#autocomplete").type("ind")
        cy.get(".ui-menu-item div")
        .contains("Indonesia").click()
    })
    })
    
