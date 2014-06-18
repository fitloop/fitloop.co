Template.routine.helpers({

	isLogged : function() {
		if(WorkoutTracker.find().count() > 0)
			return true;
		else
			return false;
	}

});


