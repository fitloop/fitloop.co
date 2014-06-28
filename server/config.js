Accounts.config({
	forbidClientAccountCreation : true
});

Accounts.validateNewUser(function (user) {
  if (user.username && user.username.length >= 3)
    return true;
  throw new Meteor.Error(403, "Username must have at least 3 characters");
});

Accounts.urls.resetPassword = function (token) {
    return Meteor.absoluteUrl('reset-password/' + token);
};

Accounts.urls.verifyEmail = function (token) {
    return Meteor.absoluteUrl('verify-email/' + token);
};

Accounts.urls.enrollAccount = function (token) {
    return Meteor.absoluteUrl('enroll-account/' + token);
};

// process.env.MAIL_URL = "smtp://postmaster@fitloop.co:7z15aocxmxn1@smtp.mailgun.org:587/";

Accounts.emailTemplates.siteName = "Fitloop";

Accounts.emailTemplates.from = "Fitloop Accounts <no-reply@fitloop.co>";

// Accounts.emailTemplates.enrollAccount.subject = function (user) {
//     return "Welcome to Awesome Town, " + user.profile.name;
// };

// Accounts.emailTemplates.enrollAccount.text = function (user, url) {
//    return "You have been selected to participate in building a better future!"
//      + " To activate your account, simply click the link below:\n\n"
//      + url;
// };

