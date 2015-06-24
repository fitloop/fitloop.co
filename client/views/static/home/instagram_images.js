Template.instagram_images.created = function() {

  $.getScript("//platform.instagram.com/en_US/embeds.js", function() {
    // callback function
    window.instgrm.Embeds.process()
  });

}