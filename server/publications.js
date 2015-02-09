Meteor.publish("user_profile", function (username) {
    return Meteor.users.find({username: username}, {fields: {'username': 1, 'profile.public': 1}});
});

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

Meteor.publish('user_workoutlog', function(username) {

  var user = Meteor.users.findOne({
    username: username,
    'profile.public': true
  });

  if(user) {
    return WorkoutTracker.find({
      userId: user._id
    })
  } else {
    this.ready();
    return [];
  }

})

Meteor.publish('workout_tracker', function(routineId, start, end) {
	if(routineId && start && end)
	{
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
