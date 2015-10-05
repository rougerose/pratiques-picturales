$(document).ready(function(){

  // vérifier la largeur de la page. Le script se déclenche sur une largeur
  // de page égale au paramètre media-query css "desk"
  if (utils.width_detection("largest")) {

    // gumshoe.js
    gumshoe.init({
      activeClass: 'is-active'
    });

    // jquery.sticky.js
    // $("#js-toc").sticky({
    //   // responsiveWidth: true,
    // });
  }

});
