// hooks
var IRFilters = {
  isAdmin: function(pause) {
    if ( !Meteor.user() || !Meteor.user().username === 'shridhar') {
        Router.go('homePage');
    }
  },

  requireLogin : function() {
    if(!Meteor.user()) {
      if(Meteor.loggingIn())
        this.render(this.loadingTemplate);
      else
        Router.go('loginPage');
      this.stop();
    }
  },
};

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('homePage', {
    path: '/',
    // data: function() { return Routines.findOne({slug: 'bwf-beginner-routine'})}
  });

  this.route('loginPage', {
    path: '/login',
    onBeforeAction: function() {
      if(Meteor.user())
        Router.go('dashboard');
    }
  });

  this.route('recoverPassword', {
      path: 'reset-password/:token',
      waitOn: function() {
        Session.set('resetPassword', this.params.token);
      },
      onBeforeAction: function() {
        if(Meteor.user())
          Router.go('dashboard');
      }
  });

  this.route('verifyEmail', {
      path: 'verify-email/:token',
  });

  this.route('signupPage', {
    path: 'signup',
    onBeforeAction: function() {
      if(Meteor.user())
        Router.go('dashboard');
    }
  });

  this.route('adminPage', {
    path: '/admin',
    waitOn: function() {
      Meteor.subscribe('exercises');
    }
  });

  this.route('dashboard', {
    path: '/dashboard',
    waitOn: function() {
      return [Meteor.subscribe('workout_tracker')];
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
      return [
      Meteor.subscribe('routines', this.params.slug),
      Meteor.subscribe('equipment'),
      Meteor.subscribe('exercises')];
    },
    onBeforeAction: function () {
      var slug = this.params.slug;
      if(Session.get('currentRoutine') !== slug) {
        delete Session.keys['currentExerciseId'];
        Session.set('currentRoutine', slug);
      }
    },
    data: function() { return Routines.findOne({slug: this.params.slug})},
    onAfterAction: function () {
      var date = new Date();
      var start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      var end = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
      Meteor.subscribe('workout_tracker', Routines.findOne()._id, start, end)
    }
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

  this.route('dietPage', {
    path: '/diet',
    // waitOn: function () {
    //   return [Meteor.subscribe('exercises')];
    // },
    // data: function() {
    //   return {
    //     exercises: Exercises.find({}, {sort: {name: 1}})
    //   };
    // }
  });

  this.route('bwfPage', {path: '/tracks/bodyweight-fitness'});
  this.route('aboutPage', {path: '/about'});
  this.route('thankYouPage', {path: '/thankyou'});
  this.route('comingSoon', {path: '/cardio'});
  this.route('privacyPage', {path: '/privacy'});
  this.route('termsOfUse', {path: '/terms'});
});





Router.onBeforeAction('loading');

Router.onBeforeAction(IRFilters.requireLogin, {only: ['dashboard']});
Router.onBeforeAction(IRFilters.isAdmin, {only: ['adminPage']});

Router.onAfterAction(function () {
  document.title = "Fitloop - Bodyweight Fitness Routines";
  $(window).scrollTop(0);
  Session.set("flashMessage", null);
  // delete Session.keys['currentExerciseId']
  GAnalytics.pageview();

  loadUserVoice();
});
