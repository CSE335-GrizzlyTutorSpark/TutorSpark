// This file necessitated by the removal of the insecure package.

// Define all db-interactive methods here.

// Don't forget to separate method definitions with commas.

Meteor.methods({
    
    ////////////////////////////////
    // BlahBlah - related methods //
    ////////////////////////////////
    
    'createNewBlahBlah': function(Name) {
        BlahBlah.insert( {blahName: Name} );
    },
    
    'displayAllBlahBlahs': function() {
        return BlahBlah.find();
    },
    
    'createNewUser': function(Name) {
        Users.insert( {username: Name} );
    },
    
    ////////////////////////////////////
    // Availability - related methods //
    ////////////////////////////////////

    /*
    'createAvailability':function(ID, Hours) {
        Availability.insert( {UserID:ID, 
    
    'updateAvailability': function(ID, Hours) {
        Availability.insert( {
    */
    
    
    ///////////////////////////////
    // Meeting - related methods //
    ///////////////////////////////
    
})