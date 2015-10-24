// Set up login services
Meteor.startup(function() {
 // for email 
    process.env.MAIL_URL= 'smtp://admin@sandbox3615dcc6e5244d5e923658f34b9c79b1.mailgun.org:testtest@smtp.mailgun.org:587'
    
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

