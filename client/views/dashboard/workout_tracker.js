Template.workoutTracker.helpers({

	workoutLog: function() {
		return WorkoutTracker.find({},
			{
			  sort: {day: -1},
			  limit: 50
			});
	},


	'noWorkouts' : function() {
		return WorkoutTracker.find({}).count() === 0 ? true : false;
	},

	readableDate: function() {
		var mday = moment(this.day);
		return mday.format("ddd MMM Do , ha");
	},

	timePassed: function() {
		var mday = moment(this.day);
		return mday.from(new Date());
	}

});