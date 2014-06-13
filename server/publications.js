Meteor.publish('exercises', function() {
  return Exercises.find();
});

Meteor.publish('exercise_categories', function() {
  return ExerciseCategories.find();
});

Meteor.publish('routines', function(slug) {
  if(slug)
    return Routines.find({slug: slug});
  else
    return Routines.find();
});

Meteor.publish('equipment', function() {
  return Equipment.find();
});

Meteor.publish('workout_tracker', function(date, routineId) {
	if(date && routineId)
	{
		var start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		var end = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
		return WorkoutTracker.find({
			userId	: this.userId,
			routineId: routineId,
			day			: {$gt: start, $lt: end}
		})
	}
	else
	{
		return WorkoutTracker.find({userId: this.userId});	
	}
	
});