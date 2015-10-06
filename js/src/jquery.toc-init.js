$(document).ready(function(){

  // vérifier la largeur de la page. Le script se déclenche sur une largeur
  // de page égale au paramètre media-query css "desk"
  if (utils.width_detection("large")) {

    $("#js-toc").scrollspy({
      activeClass: 'is-active',
      offset: 24
    });

    //jquery.sticky.js
    $("#js-toc").sticky({
      responsiveWidth: true,
      getWidthFrom: 'objet__content--sub',
      className: 'is-fixed',
      offset: 24
    });
  }

});
