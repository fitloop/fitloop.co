Template.dashboard.helpers({
  trackers: function() {
    return Trackers.find();
  }
});

Template.tracker.rendered = function() {
  var options = {
    series: {
        lines: { show: true },
        points: { show: true }
    }
  };

  $.plot($("#"+this.data._id+"-chart"), [ [[20, 180], [26, 174], [31, 172]] ], options);
}

Template.addTrackerModal.events({
  'submit form': function(e) {
    e.preventDefault();

    var tracker = {
      name: $(e.target).find('[name=trackerName]').val() || 'My Tracker',
      units: $(e.target).find('[name=units]').val()
    }

    Meteor.call('addTracker', tracker, function(error, id) {
      if (error)
        return alert(error.reason);
    });

    $('#addTrackerModal').modal('hide')
  }
});