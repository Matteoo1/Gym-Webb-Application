<?php

# data bas som används
$dbhostname = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbdatabase = "databas";

$conn = mysqli_connect($dbhostname, $dbusername, $dbpassword, $dbdatabase);



# används i profile.php i userinfo och  adress formuläret.
function getUserInfo($username) {
  global $conn;
  $selectQry = 'select * from users where username = ?';
  $selectStatement = mysqli_prepare($conn, $selectQry);
  mysqli_stmt_bind_param($selectStatement,'s', $username);
  mysqli_stmt_execute($selectStatement);

  $result = mysqli_stmt_get_result($selectStatement);
  $userInfo = mysqli_fetch_assoc($result);
  return $userInfo;
}

# föra in ny produkt i cart tabell men inte köpt än..
function showPlan($workoutname) {
  global $conn;
  Addworkout($workoutname);
  return mysqli_affected_rows($conn);
}

function Addworkout($workoutname) {
  global $conn;
  $insertQry = 'insert into training (username,name_of_workout) values (?,?)';
  $insertStatement = mysqli_prepare($conn,$insertQry);
  mysqli_stmt_bind_param($insertStatement,'ss',$_SESSION['username'],$workoutname);
  mysqli_stmt_execute($insertStatement);
  return mysqli_insert_id($conn);
}