var utils = (function(){
  var u = {};
  u.width_detection = function (width) {
    // https://gist.github.com/emilbjorklund/2481019
    // et http://adactio.com/journal/5429/
    var doc=window.document,
    el,
    pseudo,
    detection = false;
    width = '"'+ width +'"'; // pseudo est une chaîne de la forme "pseudo"
    if (window.getComputedStyle && doc.querySelector) {
      el = doc.querySelector('#js-page-body');
      pseudo = window.getComputedStyle(el, ':before').getPropertyValue('content');
      if (pseudo === width) {
        detection = true;
      }
    }
    return detection;
  }
  return u;
})();
