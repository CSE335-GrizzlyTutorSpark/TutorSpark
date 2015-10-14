Template.AddTutorCourse.events({
  'click #addtutorcourse': function() {
   
      //prevent default browser submit causing issue, modified this later
      event.preventDefault();
      
      
      
      //function check code, del later
    //  alert("My button was clicked!");
    Router.go('AddTutorHour');
  }  
});