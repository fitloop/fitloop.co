Template.dietPage.helpers({
  heightFeet: function() {
    return Session.get("heightFeet");
  },
  heightInches: function() {
    return Session.get("heightInches");
  },
  weightLbs: function() {
    return Session.get("weightLbs");
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
  tdee : function() {
    return Session.get("tdee");
  },
  loseWeightCalories: function() {
    return (Session.get("tdee")-1000) + " to " + (Session.get("tdee")-500);
  },
  gainWeightCalories: function() {
    return (Session.get("tdee")+500) + " to " + (Session.get("tdee")+1000);
  }
});

Deps.autorun(function() {
  var imperialHeight = Session.get("heightFeet")*12 + Session.get("heightInches")*1;
  var metricHeight = imperialHeight * 2.54;

  var imperialWeight = Session.get("weightLbs");
  var metricWeight = imperialWeight*0.453592;

  var age = Session.get("age");
  var stressLevel = Session.get("stressLevel");

  var tdee = null;

  if(Session.get("gender") === "male")
    tdee = Math.round((66.47 + ( 13.75 * metricWeight ) + ( 5.003 * metricHeight ) - ( 6.755 * age )) * stressLevel);
  else if(Session.get("gender") === "female")
    tdee = Math.round((655.1 + ( 9.563 * metricWeight ) + (  1.850 * metricHeight ) - ( 4.676 * age )) * stressLevel);


  Session.set("tdee", tdee);
});

Template.dietPage.rendered = function() {
  document.title = "Diet" + " - Fitloop";
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
  },
  'change #height-feet' : function () {
    // var imperialHeight = $('#height-feet').val()*12 + $('#height-inches').val();
    // var metricHeight = imperialHeight * 2.54;
    Session.set("heightFeet", $('#height-feet').val());
  },
  'change #height-inches' : function () {
    Session.set("heightInches", $('#height-inches').val());
  },
  'change input[name="gender"]' : function () {
    Session.set("gender", $('input[name="gender"]:checked').val());
  }

})