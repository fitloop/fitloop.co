Template.dietPage.helpers({
  isMale: function() {
    if (Session.get("gender") === "male")
      return "checked";
  },
  isFemale: function() {
    if (Session.get("gender") === "female")
      return "checked";
  },

  isMetric: function() {
    if (Session.get("system") === "metric")
      return "checked";
  },
  isImperial: function() {
    if (Session.get("system") === "imperial")
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
  exerciseLevel : function() {
    return Session.get("exerciseLevel");
  },
  tdee: function() {
    return Session.get("tdee");
  },
  bmr: function() {
    return Session.get("bmr");
  },
  calories : function() {
    return Session.get("calories");
  },
  goalRateText : function() {
    return goals[Session.get("goalRate")].text.toLowerCase();
  },
  goalOptions: function() {
    return goals;
  },
  goalSelected : function() {
    if (this.option === Session.get("goalRate"))
      return "selected";
  },
  explanation: function() {
    return goals[Session.get("goalRate")].explanation;
  },
  exerciseLevels: function() {
    return [
      {
        option: 1.20,
        text: "Little to no exercise"
      },
      {
        option: 1.375,
        text: "Light exercise (1–3 days per week)"
      },
      {
        option:  1.55,
        text: "Moderate exercise (3–5 days per week)"
      },
      {
        option:  1.725,
        text: "Heavy exercise (6–7 days per week)"
      },
      {
        option:  1.9,
        text: "Very heavy exercise (twice per day, extra heavy workouts)"
      },
    ];
  },
  exerciseLevelSelected: function() {
    if (Number(this.option) === Number(Session.get("exerciseLevel"))) {
      return "selected";
    }
  }
});


goals = [
  {
    option: 0,
    text: "Lose Weight",
    explanation: "Calculated by subtracting 20% of your TDEE"
  },
  {
    option: 1,
    text: "Maintain Weight",
    explanation: "This is your TDEE"
  },
  {
    option: 2,
    text: "Gain 1/2 lb per week",
    explanation: "Calculated by adding 250 calories to your TDEE"
  },
  {
    option: 3,
    text: "Gain 1 lb per week",
    explanation: "Calculated by adding 500 calories to your TDEE"
  },
  {
    option: 4,
    text: "Gain 2 lbs per week",
    explanation: "Calculated by adding 1000 calories to your TDEE"
  },
];

Deps.autorun(function() {

  // Mifflin-St Jeor

  var imperialHeight = Session.get("heightFeet")*12 + Session.get("heightInches")*1;
  var metricHeight = imperialHeight * 2.54;

  var imperialWeight = Session.get("weightLbs");
  var metricWeight = imperialWeight*0.453592;

  var age = Session.get("age");
  var exerciseLevel = Session.get("exerciseLevel");

  var tdee, bmr = null;

  var baseMifflin = (10 * metricWeight ) + ( 6.25 * metricHeight ) - ( 5 * age );

  if(Session.get("gender") === "male")
  {
    bmr = Math.round(((baseMifflin + 5)) / 10) * 10;
    tdee = Math.round(((baseMifflin + 5) * exerciseLevel) / 10) * 10;
  }
  else if(Session.get("gender") === "female")
  {
    bmr = Math.round(((baseMifflin - 161)) / 10) * 10;
    tdee = Math.round(((baseMifflin - 161) * exerciseLevel) / 10) * 10;
  }

  var calories = tdee;

  // lose weight
  if(Session.get("goalRate") === "0")
  {
    calories = .8*tdee;
  } else if (Session.get("goalRate") === "1")
  {
    calories = tdee;
  } else if (Session.get("goalRate") === "2")
  {
    calories = tdee + 250;
  } else if (Session.get("goalRate") === "3")
  {
    calories = tdee + 500;
  } else if (Session.get("goalRate") === "4")
  {
    calories = tdee + 1000;
  }

  if(calories < bmr)
    calories = bmr;
  if(calories < 1200)
    calories = 1200;

  Session.set("calories", calories);
  Session.set("tdee", tdee);
  Session.set("bmr", bmr);
});

Template.dietPage.rendered = function() {
  document.title = "Diet" + " - Fitloop";

  updateMetricWeight();
  updateMetricHeight();
}

Template.dietPage.events({
  'change #exercise-level' : function () {
    Session.set("exerciseLevel", $('#exercise-level').val());
  },
  'change input[name="system"]' : function () {
    Session.set("system", $('input[name="system"]:checked').val());
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
