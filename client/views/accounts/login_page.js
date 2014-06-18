Template.loginPage.events({
	'submit #login-form' : function(e,t){
		e.preventDefault();

		//retrieve input field values
		var email = t.find('#login-email').value,
				password = t.find('#login-password').value;

		// TODO: Trim and validate fields
		if(!email) {
			Session.set("flashMessage", "Please fill in a username or email");
			return false;
		}

		// trim email
		email = email.toLowerCase();
		email = StringUtilities.removeWhitespace(email);

		// If it passes
		Meteor.loginWithPassword(email, password, function(err){
			if(err)
			{
				// TODO: Tell user invalid email or pass
				Session.set("flashMessage", err.reason);
			}	
			else
			{
				//user is logged in
				Router.go('dashboard');
			}
		});

		return false;
	}

});

Template.loginPage.helpers({
	error: function() {
		return Session.get("flashMessage");
	}
})