Template.adminPromoteStudent.helpers({
    'studentsToPromote':function(){
        return Meteor.users.find({roles:'student'});
    }
    
    /*
    'studentsToPromote':function(){
        return Meteor.catalogs.find();
    }
    */
});