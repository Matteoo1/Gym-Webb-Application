<?php
require('../include/header.php');
    
$workoutnames = show_unique_workouts();
$mastara = "<br>";
$workoutData = array();

foreach ($workoutnames as $work) {
    $uniq_workoutname = $work['plan_name'];
    $exercise = show_saved_workout($uniq_workoutname);
    
    $exerciseDetails = array();

    foreach ($exercise as $exer) {
        $exerciseDetails[] = $exer;
    }

    $workoutData[$uniq_workoutname] = $exerciseDetails;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="myWorkouts.css">
    <link href="../Welcome/welcome-style.css" rel="stylesheet" type="text/css">
    <meta charset="UTF-8">
    <title>MYWORKOUTS</title>

</head>
<body>
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

<div class="welcome-header">
    <h1>My Workouts</h1>
    <p>Select one of your saved workouts!</p>
</div>

    <div id="workoutList">

<?php
$containerCount = 0;
foreach ($workoutData as $workoutName => $exercises) {
    echo '<div class="workout-container">';
    echo '<div class="workout-box">';
    echo '<h4>' . $workoutName . '</h4>';
    echo '<div class="button-container">';


    echo '<button class="workout-button" data-details="' . $containerCount . '">Details</button>';
    
    echo '<button class="start-button" id="startButton' . $containerCount . '">Start</button>';
    echo '<button class="remove-button" onclick="removeWorkout(' . $containerCount . ')">Remove</button>';
    echo '</div>';
    
    echo '<div class="exercise-details-container">';
    $containerId = 'imageContainerBottom' . $containerCount; 
    echo '<div id="' . $containerId . '" class="exercise-details-container" style="display: none;">'; 
    foreach ($exercises as $exercise) 
    {
        echo '<div class="exercise-container" style="display: block; style="height: auto;">';
        echo '<img src="' . $exercise['image'] . '" alt="Image" class="small-image">';
        echo '<div class="exercise-details">';
        echo '<p class="exercise-name">Exercise: ' . $exercise['name_of_workout'] . '</p>';
        echo '<p>Sets: ' . $exercise['Setsnumber'] . '</p>';
        echo '<p>Reps: ' . $exercise['Repsnumber'] . '</p>';
        echo '</div>';
        echo '</div>';
    }
    $containerCount++; 
    echo '</div>';
    echo '</div>'; 
    echo '</div>'; 
    echo '</div>'; 
}
?>


<script>
       const detailsButtons = document.querySelectorAll('.workout-button');
    
    detailsButtons.forEach((button) => {
        button.addEventListener('click', function() {
            const containerId = 'imageContainerBottom' + button.getAttribute('data-details');
            const imageContainerBottom = document.getElementById(containerId);
    
            if (imageContainerBottom.style.display === 'none') {
                imageContainerBottom.style.display = 'block';
            } else {
                imageContainerBottom.style.display = 'none';
            }
        });
    });
    const startButtons = document.querySelectorAll('.start-button');

    startButtons.forEach((startButton, index) => {
    startButton.addEventListener('click', function() {
        const workoutId = (index + 1);

        window.location.href = 'workout.html?=' + workoutId;
    });
});
const removeButtons = document.querySelectorAll('.remove-button');
removeButtons.forEach((button) => {
    button.addEventListener('click', function() {
        removeWorkout(index);
    });
});
    </script>
</div>

<div id="total-info"></div>
<script src="myWorkouts.js" type="module"></script>
</body>
<div class="footer">
    <div class="logo">XPERT</div>
</div>
</html>
