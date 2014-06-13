Meteor.methods({
	'logWorkout' : function(routineId) {
		WorkoutTracker.insert({
			userId: this.userId,
			routineId: routineId,
			routineName : Routines.findOne({_id:routineId}).name,
			day: new Date()
		})
	},

	'undoLogWorkout' : function(workoutLogId) {
		
		var workoutLog = WorkoutTracker.findOne({ _id : workoutLogId });
		
		var date = new Date();
		var start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		var end = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);

		if(this.userId && workoutLog.userId === this.userId)
		{
			WorkoutTracker.remove({
				_id : workoutLog._id,
				day : {$gt: start, $lt: end}
			});
		}
	}
});