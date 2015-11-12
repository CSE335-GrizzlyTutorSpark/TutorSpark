// Test Collection
BlahBlah = new Mongo.Collection('blahblah');

// Instantiate Application Collections here.

// Collection instances will be created on both the client/server-side.

// The client-side collection will be empty to start, but can be filled
// via find() calls, and insert() calls will be reflected server-side.

// For each collection, try to comment-in the attributes for clarity.

Catalog = new Mongo.Collection('catalogs');
    // Department:  // Ex: "Mathematics"
    // Courses:
        // Course:  // Ex: "MAT101"
Topic = new Mongo.Collection('topics');
    // courseID:    // Ex: [courses:_id]
    // topicName:   // Ex: 'Derivatives'
Meeting = new Mongo.Collection('meetings');
    // tutorID:     // Ex: [user:_id]
    // topicID:     // Ex: [topic:_id]
Attendee = new Mongo.Collection('attendees');
    // meetingID:   // Ex: [meeting:_id]
    // studentID:   // Ex: [user:_id]
Availability = new Mongo.Collection('availabilities');
    // userID:      // Ex: [user:_id]

        // We need to model the day/hour grid for availability.

        // In the grid layout Fan created under Add_Tutor, we begin with
        // Monday, so let's use Monday as "Day1", then, let's treat each
        // hour as "9" = 9:00=10:00am, using military time.

    // day1-7: [true/false], where true = available
    // day1-8: [true/false]
    // day1-9: [true/false]
    // [...]
    // day1-18: [true/false], where 18 = 6:00pm-7:00pm

    // day2-8: [true/false]
    // [...]
    // day2-18: [true/false]
    // [...]
    // day7-8: [true/false]
    // [...]
    // day7-18: [true/false]

CalEvent = new Mongo.Collection('calevent');
// Collection used by the FullCalendar package