WorkoutTracker = new Meteor.Collection('workout_tracker');

WorkoutTracker.allow({
	update: function(userId, doc) { return ownsDocument(userId, doc); },
	remove: function(userId, doc) { return ownsDocument(userId, doc); },
});