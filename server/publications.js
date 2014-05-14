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

Meteor.publish('trackers', function() {
  return Trackers.find({userId: this.userId});
});