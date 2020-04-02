<?php

if (!defined('_ECRIRE_INC_VERSION')) return;

function pratiques_picturales_porte_plume_barre_charger($barres) {
  $barre = &$barres['edition'];
  $barre->cacher(array(
    'alignerdroite',
    'alignergauche',
    'cadretexte',
    'barre_cadre',
    'petitescapitales',
    'stroke_through_et',
    'miseenevidence',
    'miseenevidence2'
  ));
  return $barres;
}
