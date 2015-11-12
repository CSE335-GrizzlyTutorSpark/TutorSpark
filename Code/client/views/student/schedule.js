Template.studentSchedule.helpers({
    editing_event: function() {
        return Session.get('editing_event');
    }
});

Template.studentSchedule.rendered = function() {
    var calendar = $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        
        eventLimit: true,
        
        views: {
            agenda: {
                eventLimit: 6
            }
        },
        
        dayClick: function(date,jsEvent,view){
            var calendarEvent={};
            calendarEvent.start = '10:00';
            calendarEvent.end = '14:00';
            calendarEvent.dow = [3];
            calendarEvent.title = 'new event';
            calendarEvent.color = '#2F42F4';
            calendarEvent.textColor = '#FFFFFF';
            Meteor.call('saveCalEvent',calendarEvent);
        },
        
        eventClick: function(calEvent,jsEvent,view) {
            Session.set('editing_event',calEvent._id);
            $('#title').val(calEvent.title);
        },
        
        events: function(start,end,timezone,callback) {
            var calEvents = CalEvent.find({},{reactive:false}).fetch();
            callback(calEvents);
        }
    }).data().fullCalendar;
    
    Deps.autorun(function() {
        CalEvent.find().fetch();
        if(calendar) {
            calendar.refetchEvents();
        }
    })
}