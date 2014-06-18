Template.routine.helpers({

	isLogged : function() {
		if(WorkoutTracker.find().count() > 0)
			return true;
		else
			return false;
	}

});


Template.routine.events({
	'click #track-workout' : function(e,t) {

		var routineId = this._id;

		if(Meteor.user())
		{
			Meteor.call('logWorkout', routineId)
		}
	},

	'click #undo-track-workout' : function(e,t) {
		var workoutLog = WorkoutTracker.findOne({routineId: this._id});

		if(Meteor.user() && workoutLog)
		{
			Meteor.call('undoLogWorkout', workoutLog._id, new Date());
		}
	}
});