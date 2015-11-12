Template.dialog.rendered=function() {
    
    if(Session.get('editDialog')) {
        var calEvent=CalEvent.findOne({_id:Session.get('editing_event')});
        if(calEvent) {
            $('#title').val(calEvent.title);
        }
    }
    
    Deps.autorun(function() {
        if(Session.get('editing_event')){
            $('#fullcalendardialog').openModal();
        } else {
            $('#fullcalendardialog').closeModal();
        }
    })
}

Template.dialog.helpers({
    title: function() {
        var ce = CalEvent.findOne({_id:Session.get('editing_event')});
        return ce.title;
    }
});

Template.dialog.events({
    "click .closeDialog": function(event,template) {
        Session.set('editing_event',null);
    }
})