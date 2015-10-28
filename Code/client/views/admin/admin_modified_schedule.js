
Template.AdminModifySchedule.helpers({
    tutor:function(){
        
    return Meteor.users.find({roles:'tutor'});
                
    }
});