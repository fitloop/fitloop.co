Accounts.config({
	forbidClientAccountCreation : true
});

Accounts.validateNewUser(function (user) {
  if (user.username && user.username.length >= 3)
    return true;
  throw new Meteor.Error(403, "Username must have at least 3 characters");
});