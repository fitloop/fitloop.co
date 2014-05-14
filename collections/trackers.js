// Generic tracking collection for weight, etc.
Trackers = new Meteor.Collection('trackers');

Meteor.methods({
  addTracker: function(trackerAttributes) {
    var user = Meteor.user();

    // ensure user is logged in
    if(!user)
      throw new Meteor.Error(401, "You need to login to create a tracker.");

    // Validate Tracker Name
    if (!trackerAttributes.name)
    {
      trackerAttributes.name = "My Tracker";
    }

    var tracker = _.extend(_.pick(trackerAttributes, 'name', 'units'), {
      userId: user._id,
      created: new Date().getTime(),
      data: []
    });

    var trackerId = Trackers.insert(tracker);

    return trackerId;
  }
});

Trackers.allow({
  update: ownsDocument,
  remove: ownsDocument
});

