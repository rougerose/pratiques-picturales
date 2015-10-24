$(document).ready(function(){
  // vérifier la largeur de la page. Le script se déclenche sur une largeur
  // de page égale au paramètre media-query css "desk"
  if (utils.width_detection("large")) {

    $("#js-toc").scrollspy({
      activeClass: 'is-active',
      offset: 0
    });

    $("#js-toc").stick_in_parent({
      parent: "#js-toc-parent",
      offset_top: 24
    });
  }

});
