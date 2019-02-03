<?php
error_reporting(E_ALL);
$database_SQL = "fbhack"; //MySQL Database
$username_SQL = ""; // MySQL Ueername
$password_SQL = ""; // MySQL Password
$hostname_SQL = ""; // MySQL Server
$SQL = mysqli_connect($hostname_SQL,$username_SQL,$password_SQL) or trigger_error(mysqli_error(),E_USER_ERROR); 