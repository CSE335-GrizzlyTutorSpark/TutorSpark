Template.adminTutorCourse.events({
    'click #addtutorcourse': function() {
        event.preventDefault();
        Router.go('AddTutorHour');
    }
});

Template.adminTutorCourse.helpers({
    'deptList': function() {
        return Catalog.find();
    }
    
    /*
    'courseList': function() {
        return Catalog.find({},{courses:1});
    }
    */
})