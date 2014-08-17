Template.adminPage.helpers({
  exercises : function() {
    return Exercises.find();
  }
})

Template.adminPage.events({
  'click #save_exercise' : function(e,t) {
    e.preventDefault();

    var exercise = {
      name : t.find('#exercise-name').value,
      slug : t.find('#exercise-slug').value,
      videoId : t.find('#exercise-videoid').value,
      notes : t.find('#exercise-notes').value,
      categoryId : 'eTkB3xvmXcijtCXKs'
    }

    Exercises.insert(exercise);
  }
});

