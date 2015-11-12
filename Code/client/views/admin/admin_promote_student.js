Template.adminPromoteStudent.helpers({
    'studentsToPromote':function(){
        return Meteor.users.find({roles:'student'});
    }
});

Template.adminPromoteStudent.events({
    // Need to create a session variable here
    // It needs to store the ID of the button/student
    // That, the next page can get that ID for its insertion
    
    'click .btn':function() {
        Session.set('tutorID',event.target.id); 
    }
    
    /*
    'click .btn': function() {
        var NewID = event.target.id;
        TargetUser.update(anchor:"this", {
                            $set: {userID:NewID}});
    }
    */
});