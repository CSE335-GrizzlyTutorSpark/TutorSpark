//   The code example below will mimic autopublish;
//   that is, it will push the -entire- collection to the client

//   Meteor.publish('collectionname', function() {
//       return CollectionName.find();
//   });

Meteor.publish('blahblah', function() {
    return BlahBlah.find();
});

Meteor.publish("catalogs", function() {
    return Catalog.find();
});

Meteor.publish('allUserData', function() {
    return Meteor.users.find({}, {fields: {'roles': 1}});
});