Template.BlahBlah.events({
    'submit .new-blah-blah': function(event) {
        event.preventDefault();
        
        blahName = event.target.blahName.value;
        
        console.log('This is your blah\'s name:', blahName);
        
        BlahBlah.insert({
            blahName: blahName,
            createdAt: new Date()
        });
        
        event.target.blahName.value = "";
        
        return false;
    }
})