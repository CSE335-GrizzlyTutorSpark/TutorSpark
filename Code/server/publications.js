//   The code example below will mimic autopublish;
//   that is, it will push the -entire- collection to the client

//   Meteor.publish('collectionname', function() {
//       return CollectionName.find();
//   });

Meteor.publish('blahblah', function() {
    return BlahBlah.find();
});

/*
Meteor.publish('users', function() {
    return users.find();
});
*/


//for retriving list of tutors in admin view
Meteor.publish('tutors', function(){
    return Meteor.users.find({roles:tutor},{});
});