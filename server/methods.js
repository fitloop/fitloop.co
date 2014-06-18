Meteor.methods({
	'createAccount' : function(username, email, password) {

		if(!username) {
			throw new Meteor.Error(403, "Please fill in a username");
			return false;
		}

		if(!email) {
			throw new Meteor.Error(403, "Please fill in a email");
			return false;
		}

		if(!password) {
			throw new Meteor.Error(403, "Please choose a password");
			return false;
		}

		var profile = {
			displayName : username
		}

		username = username.toLowerCase();
		username = StringUtilities.removeWhitespace(username);

		Accounts.createUser({username: username, email: email, password : password, profile: profile});

		return username;

	},

	'logWorkout' : function(routineId) {

		// At least 3 hours between logging the same routine
		var date = new Date();
		var start = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()-3);

		recentWorkoutCount = WorkoutTracker.find({
				userId: this.userId,
				routineId: routineId,
				day : {$gt: start} 
			}).count();

		console.log(recentWorkoutCount);

		if(recentWorkoutCount === 0)
		{
			WorkoutTracker.insert({
				userId: this.userId,
				routineId: routineId,
				routineName : Routines.findOne({_id:routineId}).name,
				day: new Date()
			})
		}

	},

	'undoLogWorkout' : function(workoutLogId, date) {
		
		var workoutLog = WorkoutTracker.findOne({ _id : workoutLogId });
		
		var start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		var end = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);

		if(this.userId && workoutLog.userId === this.userId)
		{
			WorkoutTracker.remove({
				_id : workoutLog._id,
				userId: this.userId,
				day : {$gt: start, $lt: end}
			});
		}
	}
});