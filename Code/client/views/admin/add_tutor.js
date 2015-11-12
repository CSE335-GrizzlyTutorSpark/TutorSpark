//for materialize style non-browser default select box if need
//just hold for now

/*
$(document).ready(function() {
    $('select').material_select();
});

*/

/* not sure what this can do, but hold for now
document.forms["studentinfo"].submit(
 //submit function here!
    this.render('AddTutorHour')
); */


Template.AddTutor.events({
  'click #addtutor': function() {
  
      //prevent default browser submit causing issue, modified this later
      event.preventDefault();
      
      
      //function check code, del later
      // alert("My button was clicked!");
    Router.go('AddTutorCourse');
  }  
});