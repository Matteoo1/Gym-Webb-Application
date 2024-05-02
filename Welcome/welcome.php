<?php
session_start();

// Check if the request comes from the login page
if (empty($_SESSION['entry_point']) || !$_SESSION['entry_point']) {
    // Redirect to the login page
    header("Location: ../login/login.php");
    exit;
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <title>XPERT</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="welcome-style.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>

<!-- Navbar -->
<div class="navbar">

    <div class="logo">XPERT</div>
    <div class="hamburger">&#9776;</div>
    <ul class="navbar-links">
        <li><a href="../Welcome/welcome.php">HOME</a></li>
        <li><a href="../HTML/workoutplanner.php">PLANNER</a></li>
        <li><a href="../HTML/myworkouts.php">WORKOUTS</a></li>
        <li><a href="../Welcome/planned.html">PREMADE</a></li>
        <li><a href="../Statistics_Page2.html">STATISTICS</a></li>
        <li><a href="../Contact_Page.html">CONTACT</a></li>
    </ul>

</div>




<!-- Header -->
<div class="welcome-header">
    <h1>Welcome to XPERT</h1>

    <p>Your fitness journey starts here.</p>
    <!-- Get Started Button -->


</div>

<!-- BOXES -->
<div class="today-workout">
    <h2> Today's date is: <span id="date-display"></span> </h2>
    <!--Get weekday -->
</div>

<div class="container">
    <!-- First Box -->
    <div class="box">
        <img class="rectangular-picture" src="pictures/news.png" alt="Image 1">
        <h3>News</h3>
        <p>Introducing our all-new Workout Planner feature! Now you can easily select exercises tailored to your goals and create custom workout routines in seconds. Take charge of your fitness journey like never before.</p>
    </div>

    <!-- Second Box -->
    <div class="box">
        <img class="rectangular-picture" src="pictures/contact.png" alt="Image 2">
        <h3>Contact us</h3>
        <p>Feel free to drop by our Örebro Universitet office or give us a call at 070-000 00 00 – we look forward to hearing from you and assisting with any questions or concerns you may have.</p>
    </div>
</div>

<!-- Footer -->
<div class="footer">
    <div class="logo">XPERT</div>
</div>



<script src="welcome-script.js"></script>

<!-- Lägg till logut-knappen -->
<button id="logoutButton">Logout</button>

<div id="restart">Restart</div>
<script src="../HTML/workout-planner.js"></script>

<!-- Skapa en funktion för logut-knappen -->
<script>
    document.getElementById("logoutButton").addEventListener("click", function() {
        // Omdirigera användaren till logout.php
        window.location.href = "../login/logout.php";
    });
</script>

</body>
</html>