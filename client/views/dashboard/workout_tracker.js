Template.workoutTracker.helpers({

	workoutLog: function() {
		return WorkoutTracker.find({}, {$limit: 5})
	},


	'noWorkouts' : function() {
		return WorkoutTracker.find({}).count() === 0 ? true : false;
	},

	readableDate: function() {
		var days = ['Sunday', 'Monday', 'Tuesday', 'Wedesday', 'Thursday', 'Friday', 'Saturday'];
		var months = 
		['January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'];

		function ordinal(number)
		{
			var b = number % 10,
	      output = (Math.floor(number % 100 / 10) === 1) ? 'th' :
	      (b === 1) ? 'st' :
	      (b === 2) ? 'nd' :
	      (b === 3) ? 'rd' : 'th';
	    
	    return number + output;
		}

		// var dateSuffix = {}
		// dateSuffix[/1/g] = "st";

		// 1st, 21st, 31st
		// 2nd, 22nd
		// 3rd, 23rd
		// 4th - 20th, 24th - 30th
		
		return days[this.day.getDay()] + ', ' + months[this.day.getMonth()] + ' ' + ordinal(this.day.getDate());
	},

});