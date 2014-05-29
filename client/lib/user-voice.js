loadUserVoice = function () {
    var uv = document.createElement('script');
    uv.type = 'text/javascript';
    uv.async = true;
    uv.src = '//widget.uservoice.com/W7vkbs1qUFv9FTaPK5bRIg.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(uv, s)
};