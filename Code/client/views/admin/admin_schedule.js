//temp test




/*

Template.AdminSchedule.rendered=function(){
    var calendar= $('#calendar').fullCalendar({
        dayClick:function(date,allDay,jsEvent,view) {
         var calendarEvent= {};
            calendarEvent.start = date;
            calendarEvent.end= date;
            calendarEvent.title='new event';
            calendarEvent.owner= Meteor.userId;
            Meteor.call('saveCalEvent', calendarEvent);
            }
        })
   header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
    }
}

Template.AdminSchedule.helpers({
    options: function(

*/

/*
Template.AdminSchedule.helpers({
        calendarOptions: {
            // Standard fullcalendar options
            height: 600,
            hiddenDays: [ 0 ],
            slotDuration: '01:00:00',
            minTime: '09:00:00',
            maxTime: '19:00:00',
            lang: 'en',
            
             header: {
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
            },
            // Function providing events reactive computation for fullcalendar plugin
            events: function(start, end, timezone, callback) {
                //console.log(start);
                //console.log(end);
                //console.log(timezone);
                var events = [];
                // Get only events from one document of the Calendars collection
                // events is a field of the Calendars collection document
                var calendar = Calendars.findOne(
                    { "_id":"myCalendarId" },
                    { "fields": { 'events': 1 } }
                );
                        // events need to be an array of subDocuments:
                // each event field named as fullcalendar Event Object property is automatically used by fullcalendar
                if (calendar && calendar.events) {
                    calendar.events.forEach(function (event) {
                        eventDetails = {};
                        for(key in event)
                            eventDetails[key] = event[key];
                        events.push(eventDetails);
                    });
                }
                callback(events);
            },
            // Optional: id of the calendar
            id: "calendar1",
            // Optional: Additional classes to apply to the calendar
            addedClasses: "col-md-8",
            // Optional: Additional functions to apply after each reactive events computation
            autoruns: [
                function () {
                    console.log("user defined autorun function executed!");
                }
            ]
        },
    });

*/



//Session.setDefault('editting_calevent', null);
//Session.setDefault('showEditEvent', false);

Template.AdminSchedule.rendered = function(){
    var calendar= $('#calendar').fullCalendar({
        dayClick:function( date,allDay, jsEvent, view ){
            var calendarEvent={};
            calendarEvent.start =date;
            calendarEvent.end=date;
            calendarEvent.title='New Event';
            calendarEvent.owner=Meteor.userId;
            Meteor.call('saveCalEvent',calendarEvent);
            },
            
            
            
        events: function(start, end, callback) {
    }

         });
}

