<?php

if (!defined("_ECRIRE_INC_VERSION")) return;

$GLOBALS['z_blocs'] = array('content','head','head_js','header','footer');

// intertitres
$GLOBALS['debut_intertitre'] = '<h2 class="spip">';
$GLOBALS['fin_intertitre'] = '</h2>';

// titre des documents
define('_TITRER_DOCUMENTS', true );

define('_NO_CACHE', -1);
//define('_INTERDIRE_COMPACTE_HEAD_ECRIRE', true);
error_reporting(E_ALL^E_NOTICE);
ini_set ("display_errors", "On");
define('SPIP_ERREUR_REPORT',E_ALL);
//$GLOBALS['taille_des_logs'] = 50000;
// define('_MAX_LOG', 500000);
define('_LOG_FILELINE',true);
define('_LOG_FILTRE_GRAVITE',8);
define('_DEBUG_AUTORISER', true);
define('_DEBUG_SLOW_QUERIES', true);
define('_BOUCLE_PROFILER', 5000);

?>
