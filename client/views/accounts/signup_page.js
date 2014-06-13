// trim helper
var trimInput = function(val) {
  return val.replace(/^\s*|\s*$/g, "");
}

Template.signupPage.events({
	'submit #signup-form' : function(e, t) {
		e.preventDefault();

		//retrieve input field values
		var username = t.find('#account-username').value,
				email = t.find('#account-email').value,
				password = t.find('#account-password').value;

		email = trimInput(email);

		if(!username) {
			Session.set("flashMessage", "Please fill in a username");
			return false;
		}

		if(!email) {
			Session.set("flashMessage", "Please fill in an email");
			return false;
		}

		if(!password) {
			Session.set("flashMessage", "Please choose a password");
			return false;
		}

    Accounts.createUser({username: username, email: email, password : password}, function(err){
        if (err) {
          Session.set("flashMessage", err.reason);
        } else {
          // Success. Account has been created and the user
          // has logged in successfully.
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