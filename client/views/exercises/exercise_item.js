Template.exerciseItem.helpers({
  exercise: function() {
    return Exercises.findOne(this.exerciseId);
  }
})

Template.exerciseItem.events({
  'click a.exercise': function(e) {
    if($(window).width() >= 768)
    {
      e.preventDefault();
    }

    Session.set('currentExerciseId', this.exerciseId);
  }
})