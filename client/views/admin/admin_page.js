Template.adminPage.helpers({
  userId: function() {
    return Meteor.user()._id;
  },
  isAdmin: function() {
    if(Meteor.user() && Meteor.user().username === 'shridhar') {
      return true;
    } else {
      return false;
    }
  },
  exercises : function() {
    return Exercises.find();
  },
  exerciseEditing: function() {
    var exerciseId = Session.get('exerciseEditing');
    return Exercises.findOne(exerciseId);
  }
})

Template.adminPage.events({
  'click a.exercise': function(e,t) {
    Session.set('exerciseEditing', this._id);
  },

  'click a#clearForm': function(e,t) {
    e.preventDefault();
    clearForm(t);
  },

  'click #save_exercise' : function(e,t) {
    e.preventDefault();

    var exercise = {
      name : t.find('#exercise-name').value,
      slug : t.find('#exercise-slug').value,
      videoId : t.find('#exercise-videoid').value,
      notes : t.find('#exercise-notes').value,
    }

    clearForm(t);
    

    // Exercises.insert(exercise);
  }
});

var clearForm = function(t) {
  t.find('#exercise-id').value = "";
  t.find('#exercise-name').value = "";
  t.find('#exercise-slug').value = "";
  t.find('#exercise-videoid').value = "";
  t.find('#exercise-notes').value = "";

  Session.set('exerciseEditing', null);
}
