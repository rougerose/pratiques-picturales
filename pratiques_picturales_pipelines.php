<?php

if (!defined('_ECRIRE_INC_VERSION')) return;

function pratiques_picturales_insert_head_css($flux){
  $css = find_in_path('css/pratiques_picturales.css');
  if ($css) {
    $flux .= "\n".'<link rel="stylesheet" href="'.$css.'" type="text/css" />'."\n";
  }
  return $flux;
}

?>
