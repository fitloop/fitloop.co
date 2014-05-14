
Template.timer.rendered = function() {

  var audio = document.getElementById('audioSprite');
  
  function playTick() {
    audio.play();
    int = setInterval(function() {
        if (audio.currentTime > 2.5) {
            audio.pause();
            audio.currentTime = 0;
            clearInterval(int);
        }
    }, 10);
  }

  function playBeeps(){
    clearInterval(int);
    audio.currentTime = 2.9;
    audio.play();
  }

  var clock = $('.timer').FlipClock({
    countdown: true,
    clockFace: 'MinuteCounter',
    autoStart: false,
    callbacks: {
      stop: function() {
        if(clock.getTime().time === 0)
        {
          $('.start-timer').text('Start');
          setTimeout(function () {
            clock.setTime(Session.get('timerTime'));
          }, 3000);
          playBeeps();
        }
        
      }
    }
  });

  if(typeof Session.get('timerTime') == 'undefined')
    Session.set('timerTime', 60);

  clock.setTime(Session.get('timerTime'));

  $('button.start-timer').click(function(e) {
    e.preventDefault();

    if(clock.running)
    {
      clock.stop();
      $(e.target).text('Start');
      $(e.target).addClass('btn-success');
      $(e.target).removeClass('btn-info');
    } else {
      clock.start();
      
      playTick();
      
      $(e.target).text('Pause');

      $(e.target).removeClass('btn-success');
      $(e.target).addClass('btn-info');
    }
    
  });

  $('button.pause-timer').click(function(e) {
    e.preventDefault();
    clock.stop();
  });

  $('button.reset-timer').click(function(e) {
    e.preventDefault();
    clock.stop();
    $('.start-timer').text('Start');
    clock.setTime(Session.get('timerTime'));
  });

  $('select.time-select').change(function(e) {
    e.preventDefault();
    Session.set('timerTime', parseInt(e.target.value));
    clock.setTime(Session.get('timerTime'));
  });

  $('button.add-ten').click(function(e) {
    e.preventDefault();
    if(clock.running)
    {
      clock.setTime(clock.getTime().time + 10);
    } else {
      Session.set('timerTime', clock.getTime().time + 10);
      clock.setTime(Session.get('timerTime'));
    }
  });

  $('button.sub-ten').click(function(e) {
    e.preventDefault();
    if(clock.running && clock.getTime().time > 10)
    {
      clock.setTime(clock.getTime().time - 10);
    } else if(clock.getTime().time > 10){
      Session.set('timerTime', clock.getTime().time - 10);
      clock.setTime(Session.get('timerTime'));
    }
  });
}
