// User Data Creation

if (Meteor.users.find().fetch().length === 0) {

    console.log('Creating users: ');

    var users = [
        {name:"Normal User",email:"normal@example.com",roles:['student']},
        {name:"tutor user1",email:"tutor1@example.com",roles:['student', 'tutor']},
        {name:"Student1",email:"manage@example.com",roles:['student']},
        {name:"Admin User1",email:"admin@example.com",roles:['admin']},
        {name:"tutor user2",email:"tutor2@example.com",roles:['student','tutor']},
        {name:"tutor user3",email:"tutor3@example.com",roles:['student', 'tutor']},
        {name:"tutor user4",email:"tutor4@example.com",roles:['student', 'tutor']},
        {name:"Admin User2",email:"admin2@example.com",roles:['admin']}
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

//Rest of DataBase Creation

//Creating static Department List

/*
if (Meteor.departments.find().fetch().length === 0) {

    console.log('Creating Departments: ');
    
    // !!!!!! Should be a static variable !!!!!!
    staticDepts = [
        ("Department1"),
        ("Department2")       
      ];

    for(counter = 0; counter < staticDepts.length; counter++) {
        Department.insert( {deptName: staticDepts[counter]} );
        console.log(staticDepts[counter]);
    }
}
*/