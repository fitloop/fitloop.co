Template.timer.rendered = function() {

    // Timer
  var timer = {
    time: 0,
    running : false,
    timeout: 0,
    init: function() {
      this.time = new Date();
      this.time.setHours(0,1,0);
      $('#timer').text("01:00");
    },
    start: function() {
      timer.run();
      timer.running = true;
      var m = timer.time.getMinutes();
      var s = timer.time.getSeconds();

      m = (m < 10) ? "0"+m : m;
      s = (s < 10) ? "0"+s : s;
      
      timer.render();
      timer.onTick(m*60 + s);

      timer.time.setSeconds(timer.time.getSeconds()-1);

      if( m==0 && s==0 ) {
        timer.pause();
        timer.onFinish();
      } else
      {
        timer.timeout = setTimeout(timer.start,1000);
      }
      
    },
    run: function() {

    },
    onFinish: function() {

    },
    onTick: function(secondsRemaining) {

    },
    pause: function() {
      clearTimeout(this.timeout);
      this.stop();
      this.running = false;
    },
    resume: function () {
      this.timeout = setTimeout(this.start, 1000);
    },
    getTime: function() {
      return this.time.getSeconds() + this.time.getMinutes()*60;
    },
    setTime: function(seconds) {
      var h = Math.floor((seconds % 60*60*24) / 24);
      var m = Math.floor((seconds % 3600) / 60);
      var s = seconds % 60;
      this.time.setHours(h,m,s);
      timer.render();
    },
    render: function() {
      var m = timer.time.getMinutes();
      var s = timer.time.getSeconds();
      m = (m < 10) ? "0"+m : m;
      s = (s < 10) ? "0"+s : s;
      $('#timer').text(m+":"+s);
    }
  }

  timer.init();
  timer.onFinish = function() {
    playBeeps();
    setButtonStart();
          // setTimeout(function () {
    timer.setTime(Session.get('timerMax'));
          // }, 3000);
    
  }

  timer.onTick = function(secondsRemaining) {
    Session.set('timerTime', secondsRemaining);
  }

  timer.run = function()
  {
    Session.set('timerRunning', true);
  }

  timer.stop = function() {
    Session.set('timerRunning', false);
  }
  
  var audio = document.getElementById('audioSprite');

  var playTick = function() {
    audio.play();
    int = setInterval(function() {
        if (audio.currentTime > 2.5) {
            audio.pause();
            audio.currentTime = 0;
            clearInterval(int);
        }
    }, 10);
  }

  var playBeeps = function(){
    clearInterval(int);
    audio.currentTime = 2.9;
    audio.play();
  }

  if(Session.get('timerRunning', true) && timer.running === false)
  {
    // console.log('resume time');
    // console.log(Session.get('timerTime'));
    timer.setTime(Session.get('timerTime'));
    timer.start();
    setButtonPause();
  } else
  {
    // console.log(Session.get('timerTime'));
    timer.setTime(Session.get('timerTime'));
  }

  $('button.start-timer').click(function(e) {
    e.preventDefault();

    if(timer.running)
    {
      timer.pause();
      setButtonStart();
    } else {
      timer.start();
      playTick();
      setButtonPause();
    }
  });

  $('button.reset-timer').click(function(e) {
    e.preventDefault();
    timer.pause();
    setButtonStart();
    resetTimer();
  });

  $('select.time-select').change(function(e) {
    e.preventDefault();
    Session.set('timerMax', parseInt(e.target.value));
    resetTimer();
  });

  $('button.add-ten').click(function(e) {
    e.preventDefault();
    if(timer.running)
    {
      timer.setTime(timer.getTime() + 10);
    } else {
      Session.set('timerMax', timer.getTime() + 10);
      resetTimer();
    }
  });

  $('button.sub-ten').click(function(e) {
    e.preventDefault();
    if(timer.running && timer.getTime() > 10)
    {
      timer.setTime(timer.getTime() - 10);
    } else if(timer.getTime() > 10){
      Session.set('timerMax', timer.getTime() - 10);
      resetTimer();
    }
  });

  function resetTimer() {
    timer.setTime(Session.get('timerMax'));
    Session.set('timerTime', Session.get('timerMax'));
  }

  function setButtonStart() {
    $('.start-timer').html('<i class="fa fa-play">');
  }

  function setButtonPause() {
    $('.start-timer').html('<i class="fa fa-pause">');
  }
}
