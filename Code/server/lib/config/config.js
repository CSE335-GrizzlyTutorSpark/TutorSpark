Meteor.startup(function(){
    Meteor.methods({
    'saveCalEvent':function(ce){
        CalEvent.insert(ce);
        }
    });
})


