$(document).ready(function(){
  // vérifier la largeur de la page. Le script se déclenche sur une largeur
  // de page égale au paramètre media-query css "desk"
  if (utils.width_detection("large")) {

    // $("#js-toc").scrollspy({
    //   activeClass: 'is-active',
    //   offset: 24
    // });

    $("#js-toc").stick_in_parent({
      parent: "#js-toc-parent",
      //offset_top: 24
    });

    // FIXME: scrollspy fonctionne pas exactement comme il faut avec Safari. Script désactivé pour le moment. Soit un autre qui fonctionne mieux, soit se contenter de ça ? Gumshoe ne semble vraiment adapté que pour une navigation principale ?

    // gumshoe.init({
    //   selector: '#js-toc a', // Default link selector (must use a valid CSS selector)
    //   selectorHeader: '#js-toc', // Fixed header selector (must use a valid CSS selector)
    //   //offset: 24, // Distance in pixels to offset calculations
    //   activeClass: 'is-active', // Class to apply to active navigation link and it's parent list item
    //   //callback: function (nav) {} // Callback to run after setting active link
    // });
  }

});
