Template.exercisesPage.helpers({
	showGridView : function() {
		return Session.equals("listOrGridView", 'grid')
	},
	showListView : function() {
		return Session.equals("listOrGridView", 'list')
	}
});

Template.exercisesPage.events({
	'click .showListView' : function() {
		Session.set('listOrGridView', 'list');
	},
	'click .showGridView' : function() {
		Session.set('listOrGridView', 'grid');
	},

})