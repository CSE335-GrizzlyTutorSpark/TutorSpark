// Set up login services
Meteor.startup(function() {
 // for email process.env.MAIL_URL= '
    
    // Add Facebook configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
        appId: "XXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */

  // Add GitHub configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "github" },
    { $set: {
        clientId: "XXXXXXXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */

  // Add Google configuration entry
  
    /* remove following code for now 
  ServiceConfiguration.configurations.update(
    { service: "google" },
    { $set: {
        clientId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        client_email: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  
  */
    Accounts.loginServiceConfiguration.remove({
        service:"google"
    });
    
    Accounts.loginServiceConfiguration.insert({
       service: "google",
        clientId: "428763116461-qok1lheo2g7p9c5h90eguk5t1b73d25p.apps.googleusercontent.com",
        secret:"i17Nhc0BCTnu3WGGx0Z3o7qR"
    });
  // Add Linkedin configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "linkedin" },
    { $set: {
        clientId: "XXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */
});
