Template.routine.helpers({
	isLogged : function() {
		if(WorkoutTracker.find().count() > 0)
			return true;
		else
			return false;
	}
});

Template.routine.events({
  'click a#guide-button': function(e) {
    if($(window).width() >= 768)
    {
      e.preventDefault();
    }

    console.log("Guide Button");

    Session.set('currentExerciseId', null);
  }
})




