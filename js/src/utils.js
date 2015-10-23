var utils = (function(){
  var u = {};
  u.width_detection = function (width) {
    // https://gist.github.com/emilbjorklund/2481019
    // et http://adactio.com/journal/5429/
    var doc=window.document,
    el,
    pseudo,
    detection = false;

    if (window.getComputedStyle && doc.querySelector) {
      el = doc.querySelector("#js-page-body");
      pseudo = window.getComputedStyle(el, ":before").getPropertyValue("content");
      // Safari pseudo = large ; Chrome et Firefox pseudo = "large"
      if (pseudo.indexOf("large" != -1)) {
        detection = true;
      }
    }

    return detection;
  }

  return u;
})();
