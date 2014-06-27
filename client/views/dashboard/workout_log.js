Template.workoutLog.helpers({

	readableDate: function() {
		var mday = moment(this.day);
		// return mday.format("ddd MMM Do, h:mm a");
		return mday.format("ddd MMM Do, ha");
	},

	timePassed: function() {
		var mday = moment(this.day);
		return mday.from(new Date());
	},

});

Template.workoutLog.events({
	'click .editLink' : function (e,t) {
		e.preventDefault();
		t.data.editing = true;
	}
})