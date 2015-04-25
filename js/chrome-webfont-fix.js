/** 
 * Chrome 32/33 webfont issue fix.
 * Requires jQuery.
 * More info: http://blog.cloudfour.com/chrome-webfont-issues/
 */
 
(function($, window){
    // only proceed if this is Chrome
    if (window.navigator.userAgent.indexOf('Chrome') === -1) return;
    // only proceed if the version is 32 or greater
    var version = parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
    if (version < 32) return;
    // once the page has loaded, change the width of the body just
    // slightly enough to force a re-paint
    $(window).load(function(){
      var $body = $('body');
      $body.css('width', $body.width() + 1);
      $body.css('width', '');
    });
})(jQuery, this);