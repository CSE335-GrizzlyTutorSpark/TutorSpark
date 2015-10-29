Template.adminPromoteStudent.helpers({
    'studentsToPromote':function(){
        return Meteor.users.find({roles:'admin'});
    }
    
    /*
    'studentsToPromote':function(){
        return Meteor.catalogs.find();
    }
    */
});