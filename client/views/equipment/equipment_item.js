Template.equipmentItem.helpers({
  equipment: function() {
    return Equipment.findOne(this+"");
  }
})