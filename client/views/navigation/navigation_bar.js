Template.navigationBar.helpers({
  active : function(path){
    if(Router.current().path === path){
        return "active";
    }
    return "active";
  }
})

Template.navigationBar.events({
	'click #logout-link': function(e,t) {
		e.preventDefault();
		Meteor.logout();
	}
})
