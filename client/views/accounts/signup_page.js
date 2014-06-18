
Template.signupPage.events({
	'submit #signup-form' : function(e, t) {
		e.preventDefault();

		//retrieve input field values
		var username = t.find('#account-username').value,
				email = t.find('#account-email').value,
				password = t.find('#account-password').value;

		email = StringUtilities.trimInput(email);

		if(!username) {
			Session.set("flashMessage", "Please fill in a username");
			return false;
		}

		if(!email) {
			Session.set("flashMessage", "Please fill in your email");
			return false;
		}

		if(!password) {
			Session.set("flashMessage", "Please choose a password");
			return false;
		}

    Meteor.call('createAccount', username, email, password, function(error, result) {
    	if(error)
    	{
    		Session.set("flashMessage", error.reason);
    	} else {
    		Meteor.loginWithPassword(result, password);
    		Router.go('dashboard');
    	}
    });

    return false;
	}
});

Template.signupPage.helpers({
	error: function() {
		return Session.get("flashMessage");
	}
})