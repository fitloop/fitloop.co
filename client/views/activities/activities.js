Template.activitiesPage.helpers({
  routines: function() {
    return Routines.find();
  }
})

Template.activitiesPage.rendered = function() {
  document.title = "Activities" + " - Fitloop"; 
}