Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('homePage', {
    path: '/',
    data: function() { return Routines.findOne({slug: 'bwf-beginner-routine'})}
  });
  this.route('dashboard', {
    path: '/dashboard',
    waitOn: function() { 
      return [Meteor.subscribe('trackers')];
    }
  });
  this.route('exercisesPage', {
    path: '/exercises',
    waitOn: function () {
      return [Meteor.subscribe('exercises')];
    },
    data: function() { 
      return {
        exercises: Exercises.find({}, {sort: {name: 1}})
      };
    }
  });
  this.route('equipmentPage', {
    path: '/equipment',
    waitOn: function() {
      return [Meteor.subscribe('equipment')];
    },
  });
  this.route('resourcesPage', {path: '/resources'});
  this.route('activitiesPage', {
    path: '/activities',
    waitOn: function() { 
      return [Meteor.subscribe('exercises')];
    },
    data: function() { 
      return {
        exercises: Exercises.find({}, {sort: {name: 1}})
      };
    },
  });
  this.route('routines', {
    path: '/routines',
    action: function () {
      this.redirect('activitiesPage');
    }
  });
  this.route('routinePage', {
    path: '/routines/:slug',
    layoutTemplate: 'routineLayout',
    waitOn: function () {
      return [Meteor.subscribe('routines', this.params.slug), Meteor.subscribe('equipment'), Meteor.subscribe('exercises')];
    },
    onBeforeAction: function () {
      var slug = this.params.slug;
      if(Session.get('currentRoutine') !== slug) {
        delete Session.keys['currentExerciseId'];
        Session.set('currentRoutine', slug);
      }
    },
    data: function() { return Routines.findOne({slug: this.params.slug})},
  });
  this.route('exercisePage', {
    path: '/exercises/:slug',
    data: function() { 
      return Exercises.findOne({slug: this.params.slug});
    },
    waitOn: function() {
      return [Meteor.subscribe('exercises'), Meteor.subscribe('equipment')];
    }
  });
  this.route('bwfPage', {path: '/activities/bodyweight-fitness'});
  this.route('aboutPage', {path: '/about'});
  this.route('donatePage', {path: '/donate'});
  this.route('thankYouPage', {path: '/thankyou'});
  this.route('comingSoon', {path: '/diet'});
  this.route('comingSoon', {path: '/cardio'});
  this.route('privacyPage', {path: '/privacy'});
  this.route('termsOfUse', {path: '/terms'});
});

var requireLogin = function() {
  if(!Meteor.user()) {
    if(Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      Router.go('homePage');
    this.stop();
  }
}

Router.onBeforeAction('loading');
// Router.before(requireLogin, {only: 'dashboard'});

Router.onAfterAction(function () {
  document.title = "Fitloop - Bodyweight Fitness Routines"; 
  $(window).scrollTop(0);
  // delete Session.keys['currentExerciseId']
  GAnalytics.pageview();
});