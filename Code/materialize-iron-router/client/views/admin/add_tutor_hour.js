var _dep=new Deps.Dependency();

Template.AddTutorHour.helpers({
    
    'showNumberofSellection': function(){
    _dep.depend();
    var ecount=$('.selected').length;
    return "You have selected " + ecount+" hour"

}
});


Template.AddTutorHour.events({
    'click .free':function(){
                
    
    var selected=event.target.id;
      //  console.log("the value is"+selected);
    //    console.log(selected);
    $('#'+selected).addClass('selected');
         $('#'+selected).removeClass('free');
        
    _dep.changed();
    },
    
    'click .selected':function(){
    console.log("you clicked an select div element");
        var selected=event.target.id;
     //   console.log("the value is"+selected);
    //    console.log(selected);
    $('#'+selected).addClass('free');
      $('#'+selected).removeClass('selected');   
    _dep.changed();
    }
});  


