Template.dietPage.helpers({
  isMale: function() {
    if (Session.get("gender") === "male")
      return "checked";
  },
  isFemale: function() {
    if (Session.get("gender") === "female")
      return "checked";
  },
  heightFeet: function() {
    return Session.get("heightFeet");
  },
  heightInches: function() {
    return Session.get("heightInches");
  },
  heightCm: function() {
    return Session.get("heightCm");
  },
  weightLbs: function() {
    return Session.get("weightLbs");
  },
  weightKg: function() {
    return Session.get("weightKg");
  },
  age: function() {
    return Session.get("age");
  },

  stressLevel : function() {
    return Session.get("stressLevel");
  },
  stressLevelText : function() {
    var sl = Session.get("stressLevel");
    if(sl < 1.375)
      return "No exercise";
    else if (sl < 1.4187)
      return "3 times a week";
    else if (sl < 1.4625)
      return "4 times a week";
    else if (sl < 1.5063)
      return "5 times a week";
    else if (sl < 1.55)
      return "6 times a week";
    // return "No Exercise";
    else if (sl < 1.7)
      return "Everyday";
    else if (sl < 1.9)
      return "Heavy or (Labor-intensive) activity level";
    else if (sl = 1.9)
      return "Extreme level";
  },
  tdee: function() {
    return Session.get("tdee");
  },
  calories : function() {
    return Session.get("tdee") + (500*Session.get("goalRate"));
  },
  goalRateText : function() {
    var goalRateTexts = {
      "-1"   : "lose 1 pound per week",
      "-1.5" : "lose 1.5 pounds per week",
      "-2"   : "lose 2 pounds per week",
      "0"    : "maintain weight",
      "1"    : "gain 1 pound per week",
      "1.5"  : "gain 1.5 pounds per week",
      "2"    : "gain 2 pounds per week",
    }
    return goalRateTexts[Session.get("goalRate")];
  }
});

Deps.autorun(function() {

  // Mifflin-St Jeor

  var imperialHeight = Session.get("heightFeet")*12 + Session.get("heightInches")*1;
  var metricHeight = imperialHeight * 2.54;

  var imperialWeight = Session.get("weightLbs");
  var metricWeight = imperialWeight*0.453592;

  var age = Session.get("age");
  var stressLevel = Session.get("stressLevel");

  var tdee = null;

  var baseMifflin = (10 * metricWeight ) + ( 6.25 * metricHeight ) - ( 5 * age );

  if(Session.get("gender") === "male")
    tdee = Math.round(((baseMifflin + 5) * stressLevel) / 10) * 10;
  else if(Session.get("gender") === "female")
    tdee = Math.round(((baseMifflin - 161) * stressLevel) / 10) * 10;


  Session.set("tdee", tdee);
});

Template.dietPage.rendered = function() {
  document.title = "Diet" + " - Fitloop";

  updateMetricWeight();
  updateMetricHeight();
}

Template.dietPage.events({
  'mousemove #stress-level' : function () {
    // console.log($('#stress-level').val());
    Session.set("stressLevel", $('#stress-level').val());
  },
  'change #age' : function () {
    Session.set("age", $('#age').val());
  },
  'change #weight-lbs' : function () {
    Session.set("weightLbs", $('#weight-lbs').val());
    updateMetricWeight();
  },
  'change #weight-kg' : function () {
    Session.set("weightKg", $('#weight-kg').val());
    updateImperialWeight();
  },
  'change #height-feet' : function () {
    Session.set("heightFeet", $('#height-feet').val());
    updateMetricHeight();
  },
  'change #height-inches' : function () {
    Session.set("heightInches", $('#height-inches').val());
    updateMetricHeight();
  },
  'change #height-cm' : function () {
    Session.set("heightCm", $('#height-cm').val());
    updateImperialHeight();
  },
  'change input[name="gender"]' : function () {
    Session.set("gender", $('input[name="gender"]:checked').val());
  },
  'change #goal-rate' : function () {
    Session.set("goalRate", $('#goal-rate').val());
  },

})

var updateMetricHeight = function() {
  var imperialHeight = Session.get("heightFeet")*12 + Session.get("heightInches")*1;
  var metricHeight = imperialHeight * 2.54;
  Session.set("heightCm", Math.round(metricHeight));
}

var updateImperialHeight = function() {
  var metricHeight = Session.get("heightCm");
  var imperialInches = metricHeight / 2.54;

  var imperialFeet = Math.floor(imperialInches / 12);
  imperialInches = imperialInches % 12;
  imperialInches = Math.round(imperialInches*2) / 2;

  Session.set("heightFeet", imperialFeet);
  Session.set("heightInches", imperialInches);
}

var updateMetricWeight = function() {
  var imperialWeight = Session.get("weightLbs");
  var metricWeight = imperialWeight*0.453592;
  metricWeight = Math.round(metricWeight*10) / 10;
  Session.set("weightKg", metricWeight );
}

var updateImperialWeight = function() {
  var metricWeight = Session.get("weightKg");
  var imperialWeight = metricWeight / 0.453592;
  imperialWeight = Math.round(imperialWeight);
  Session.set("weightLbs", imperialWeight );
}

