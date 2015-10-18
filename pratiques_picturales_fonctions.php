<?php
if (!defined('_ECRIRE_INC_VERSION')) return;

/**
*   Retourne le Prénom et le Nom d'un auteur,
*   formaté Nom*Prénom
**/
function prenom_nom($texte) {
    if (strstr($texte, "*")) {
        $prenom = prenom($texte);
        $nom = nom($texte);
        if ($prenom && $nom) {
            return $prenom.'&nbsp;'.$nom;
        } else {
            $prenom.$nom;
        }
    } else {
        return $texte;
    }
}

function prenom($texte) {
    if(strstr($texte,"*")) {
        if ($prenom = trim(preg_replace('#^(.*)\*(.*)#', '$2', $texte))) {
            return $prenom;
        } else {
            return "";
        }
    } else {
        return "";
    }
}

function nom($texte) {
    if(strstr($texte,"*")) {
        if ($nom = trim(preg_replace('#^(.*)\*(.*)#', '$1', $texte))) {
            return $nom;
        } else {
            return "";
        }

    } else {
        return "";
    }
}


function zerofill ($num, $zerofill = 2) {
  return str_pad($num, $zerofill, '0', STR_PAD_LEFT);
}

// Supprimer les caractères accentués sur la première lettre d'une chaîne.
// Si couper = false, la chaîne est reconstituée sur 31 caractères.
// Si miniscule = false, la chaîne est conservée en lettre capitale.
function desaccentuer_initiale($texte,$minuscule=true,$couper=true) {
  $encoding = 'UTF-8';
  $t = trim($texte);
  $initiale = mb_strtoupper(mb_substr($t,0,1,$encoding),$encoding);
  $accents = array('À' => 'A', 'Â' => 'A', 'Ä' => 'A', 'Æ' => 'A', 'É' => 'E', 'È' => 'E', 'Ê' => 'E', 'Ë' => 'E', 'Ì' => 'I', 'Í' => 'I', 'Î' => 'I', 'Ñ' => 'N', 'Œ' => 'O', 'Û' => 'U', 'Ù' => 'U', 'Ú' => 'U');
  $t_initiale = strtr($initiale,$accents);
  if ($minuscule) {
    $t_initiale = mb_strtolower($t_initiale);
  }
  if (!$couper) {
    $t_suite = mb_strtoupper(mb_substr($t,1,30,$encoding),$encoding);
    $txt = $t_initiale.$t_suite;
    return $txt;
  }
  return $t_initiale;
}

// trier un tableau #ARRAY
function array_sort($tableau) {
  if (is_array($tableau)) {
    sort($tableau);
  }
  return $tableau;
}

?>
