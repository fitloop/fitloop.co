Meteor.startup(function() {

	// MongoDB Indexes
	WorkoutTracker._ensureIndex({day : 1});
	
})