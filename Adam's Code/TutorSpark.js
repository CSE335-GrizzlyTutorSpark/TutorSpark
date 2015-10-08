Records = new Mongo.Collection('records');

if (Meteor.isClient) {
	Template.body.helpers({
		records: function() {
            if (Session.get('hideChecked')) {
                return Records.find({checked: {$ne: true}});
            } else {
                return Records.find();
            }
		},
        hideChecked: function() {
            return Session.get(hideChecked);
        }
	});
	
	Template.body.events({
		'submit .new-record': function(event) {
			var recordField = event.target.recordField.value;
			
			Records.insert({
				recordField: recordField
			})
			
			event.target.recordField.value = "";
			
			return false;
		},
        'change .hide-checked': function(event) {
            Session.set('hideChecked', event.target.checked);
        }
	});
	
	Template.record.events({
		'click .toggle-checked': function() {
			Records.update(this._id, {$set: {checked: !this.checked}})
		},
		'click .delete': function() {
			Records.remove(this._id);
		}
	})
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}