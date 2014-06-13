WorkoutTracker = new Meteor.Collection('workout_tracker');


WorkoutTracker.allow({
  update: ownsDocument,
  remove: ownsDocument
});