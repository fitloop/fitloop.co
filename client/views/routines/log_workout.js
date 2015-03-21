Template.logWorkout.helpers({

	isLogged : function() {
		if(WorkoutTracker.find().count() > 0)
			return true;
		else
			return false;
	}

});


Template.logWorkout.events({
	'click #track-workout' : function(e,t) {
		// var routineId = this._id;

		// if(Meteor.user())
		// {
		// 		Meteor.call('logWorkout', routineId)
		// }
	},

	'click #undo-track-workout' : function(e,t) {
		var workoutLog = WorkoutTracker.findOne({routineId: this._id});

		if(Meteor.user() && workoutLog)
		{
			Meteor.call('undoLogWorkout', workoutLog._id, new Date());
		}
	}
});

Template.logWorkoutModalInner.events({
	'click #log-button': function(e,t) {
		e.preventDefault();

		var routineId = this._id;
		var logNotes = t.find('textarea[name="notes"]').value;
		if(Meteor.user())
		{
			Meteor.call('logWorkout', routineId, logNotes);
		}
		$('#logWorkoutModal').foundation('reveal', 'close');
		
	}
})