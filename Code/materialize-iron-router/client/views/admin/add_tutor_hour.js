Template.AddTutorHour.helpers({
'selectedToggle': function(){
//return "selected"
}
});


Template.AddTutorHour.events({
    'click .free':function(){
    console.log("you clicked an div element");                
    $(this).remove('free');
    $(this).add('selected');  
    },
    
    'click .selected':function(){
    console.log("you clicked an select div element");
    }
});  

$('.free').click(function() {
 console.log("you clicked an div element"); 
    $(this).remove('free');
    $(this).add('selected'); 
});