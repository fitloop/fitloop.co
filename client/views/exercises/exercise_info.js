Template.exerciseInfo.helpers({
  exercise: function() {
  	return Exercises.findOne(Session.get('currentExerciseId'));
  }
});

// Template.youtubePlayer.rendered = function() {
  
//   detectFlash = function(){
//     if (navigator.plugins != null && navigator.plugins.length > 0){
//         return navigator.plugins["Shockwave Flash"] && true;
//     }
//     if(~navigator.userAgent.toLowerCase().indexOf("webtv")){
//         return true;
//     }
//     if(~navigator.appVersion.indexOf("MSIE") && !~navigator.userAgent.indexOf("Opera")){
//         try{
//             return new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && true;
//         } catch(e){}
//     }
//     return false;
//   }

//   var flashSupport = detectFlash();

//   // 2. This code loads the IFrame Player API code asynchronously.
//   var tag = document.createElement('script');

//   tag.src = "https://www.youtube.com/iframe_api";
//   var firstScriptTag = document.getElementsByTagName('script')[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//   // 3. This function creates an <iframe> (and YouTube player)
//   //    after the API code downloads.
//   player;
//   var playerIsLoaded = false;
//   var currentVideoId = '';

//   loadPlayer = function() {
//     player = new YT.Player('player', {
//       events: {
//         'onReady': onPlayerReady,
//         // 'onStateChange': onPlayerStateChange
//       }
//     });
    
//   }

//   // 4. The API will call this function when the video player is ready.
//   onPlayerReady = function(event) {
//     playerIsLoaded = true;
//     play(currentVideoId);
//   }

//   // 5. The API calls this function when the player's state changes.
//   //    The function indicates that when playing a video (state=1),
//   //    the player should play for six seconds and then stop.
//   // var done = false;
//   // onPlayerStateChange = function(event) {
//   //   if (event.data == YT.PlayerState.PLAYING && !done) {
//   //     setTimeout(stopVideo, 6000);
//   //     done = true;
//   //   }
//   // }
//   stopVideo = function() {
//     player.stopVideo();
//   }

//   play = function(vidId) {

//     // no flash..redirect to youtube page
//     // console.log(flashSupport);
//     if(!flashSupport || $(window).width() <= 750)
//     {
//       window.open("http://m.youtube.com/watch?v="+vidId,"_blank");
//     }
//     else
//     {
//       if(!playerIsLoaded)
//       {
//         loadPlayer(vidId);
//         currentVideoId = vidId;
//       } else {
//         player.loadVideoById(vidId);
//       }
//     }
//   }
// }