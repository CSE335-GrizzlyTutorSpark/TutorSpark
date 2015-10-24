//   Created this file to handle collection subscriptions
//   The code segment below will subscribe to a collection

//      Meteor.subscribe('collectionname');



//   If you need to limit the scope of data retrieval, you
//   can add parameters to your publish/subscribe code

//       Meteor.subscribe('collectionname',currentUser());

//   Note that the publish code would have to look roughly like:

//       Meteor.publish('collectionname', function(user) {
//           return.CollectionName.find({user: user});
//       }