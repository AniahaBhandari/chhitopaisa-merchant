const {defineConfig}= require("cypress");
module.exports =defineConfig({
    e2e: { 

        experimentalSessionAndOrigin:true,
        baseUrl:'http://uatmerchant.chhitopaisa.com.np',
       
    
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
      },
    });