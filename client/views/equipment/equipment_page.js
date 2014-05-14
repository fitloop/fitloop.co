Template.equipmentPage.helpers({
  irongym: function() {
    return Equipment.findOne({slug: 'iron-gym-total-upper'})._id;
  },
  rings: function() {
    return Equipment.findOne({slug: 'nayoya-gymnastic-rings'})._id;
  },
  

})

Template.equipmentPage.rendered = function() {
  document.title = "Equipment" + " - Fitloop"; 
}