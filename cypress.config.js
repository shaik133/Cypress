module.exports = {
  "e2e": {},
  "projectId": "rhsbbk",
  "globals": {
    "cy": true
  }
}
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  pageLoadTimeout:100000,
  
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true
    
  },
  env:{
    Base_Url:"https://rahulshettyacademy.com/",
    MyStore_Url:"http://automationpractice.com/index.php",
    screenshotOnRunFailure:true,
    
     }
})



