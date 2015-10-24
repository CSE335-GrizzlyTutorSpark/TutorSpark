Template.BlahBlah.events({
    'submit .new-blah-blah': function(event) {
        // Prevent the default form action
        event.preventDefault();
        
        // Assign the form data to a local variable
        var blahName = event.target.blahName.value;
        
        Meteor.call('createNewBlahBlah', blahName);
        
        /* Insertion code pre-insecure-removal
        BlahBlah.insert({
            blahName: blahName,
            createdAt: new Date()
        });
        */
        
        // Clear the form
        event.target.blahName.value = "";
        
        // Prevent the page from refreshing
        return false;
    }
})