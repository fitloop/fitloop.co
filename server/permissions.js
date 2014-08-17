Exercises.allow({
  insert: function(userId, doc) {
    if (userId == "XZKNC9fBTzjGzhWsr") {
      return true;
    } else {
      return false;
    }
  }
})