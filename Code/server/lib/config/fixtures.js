// User Data Creation

if (Meteor.users.find().fetch().length === 0) {

    console.log('Creating users: ');

    var users = [
        {name:"Normal User",email:"normal@example.com",roles:['student']},
        {name:"View-Secrets User",email:"view@example.com",roles:['student,tutor']},
        {name:"Manage-Users User",email:"manage@example.com",roles:['admin']},
        {name:"Admin User",email:"admin@example.com",roles:['admin']}
      ];

    _.each(users, function (userData) {
      var id,
          user;
      
      console.log(userData);

      id = Accounts.createUser({
        email: userData.email,
        password: "apple1",
        profile: { name: userData.name }
      });

      // email verification
      Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});

      Roles.addUsersToRoles(id, userData.roles);
    
    });
  }

CalEvent = new Mongo.Collection('calevent');
/*

Meteor.startup(function(){
    Meteor.methods({
        'saveCalEvent':function(ce){
            CalEvent.insert(ce);    
        }
    })
});

*/

// :::::::::::::::::::::::::::::::
// :: REST OF DATABASE CREATION ::
// :::::::::::::::::::::::::::::::

// CREATING STATIC DEPARTMENT/COURSE COLLECTION

/*
if (Meteor.departments.find().fetch().length === 0) {

    console.log('Creating Departments: ');
    
    // !!!!!! Should be a static variable !!!!!!

    staticDepts = [
        [("Mathematics"),
         ("MAT101"),("MAT102"),("MAT103"),("MAT104")],
        [("Biology"),
         ("BIO101"),("BIO102"),("BIO103"),("BIO104")],
        [("Computer Science & Engineering"),
         ("CSE101"),("CSE102"),("CSE103"),("CSE104")],
        [("Computer Information Technology"),
         ("CIT101"),("CIT102"),("CIT103"),("CIT104")]
      ];

    for(d = 0; d < staticDepts.length; d++) {
        tempArray = staticDepts[d];
        Catalog.insert({department: tempArray[0]});
        //console.log(tempArray[0]);
        for(c = 1; c < tempArray.length; c++) {
            Catalog.insert({courses: {course: tempArray[c]}});
            //console.log(tempArray[c]);
        }
    }
}
*/
