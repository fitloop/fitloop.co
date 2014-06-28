Template.passwordRecovery.helpers({
  resetPassword : function(t) {
    return Session.get('resetPassword');
  },
  error: function() {
		return Session.get("flashMessage");
	}
});

Template.passwordRecovery.events({

  'submit #recovery-form' : function(e, t) {
    e.preventDefault()
    var email = StringUtilities.trimInput(t.find('#recovery-email').value)

    if(!StringUtilities.isNotEmpty(email) /*&& isEmail(email)*/)
    	Session.set('flashMessage', 'Please enter your email.')
    else {
      Session.set('loading', true);
      Accounts.forgotPassword({email: email}, function(err){
	      if (err)
	        Session.set('flashMessage', 'Password Reset Error :(')
	      else {
	        Session.set('flashMessage', 'Email Sent. Please check your email.')
	      }
	      Session.set('loading', false);
    	});
    }
    return false;
  },

  'submit #new-password' : function(e, t) {
    e.preventDefault();
    var pw = t.find('#new-password-password').value;

    if(!Validations.isValidPassword(pw))
    {
    	Session.set('flashMessage', 'Please choose a password with at least 6 characters.')
    } else {
      Session.set('loading', true);
      Accounts.resetPassword(Session.get('resetPassword'), pw, function(err){
        if (err)
          Session.set('flashMessage', 'Password Reset Error. Sorry :(');
        else {
          Session.set('resetPassword', null);
          Router.go('dashboard');
        }
        Session.set('loading', false);
      });
    }
  return false; 
  }
});