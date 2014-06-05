Template.loginPage.events({
	'submit #login-form' : function(e,t){
		e.preventDefault();

		//retrieve input field values
		var email = t.find('#login-email').value,
				password = t.find('#login-password').value;

		// TODO: Trim and validate fields

		// If it passes
		Meteor.loginWithPassword(email, password, function(err){
			if(err)
			{
				// TODO: Tell user invalid email or pass
				if(t.data)
					t.data.error = err.reason;
				else
					t.data = { error : err.reason };
				
				console.log(t);
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