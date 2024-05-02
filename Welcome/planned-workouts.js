class Exercise {
    constructor(name, sets, reps, time) {
        this.name = name;
        this.sets = sets;
        this.reps = reps;
        this.time = time;
    }
}

class Workout {
    constructor(name = "") {
        this.name = name;
        this.exercises = [];
    }

    newExercise(name, sets, reps, time) {
        this.exercises.push(new Exercise(name, sets, reps, time));
    }
}

let allWorkouts = [
    new Workout("PUSH"),
    new Workout("PULL"),
    new Workout("LEGS"),
    new Workout("FULL BODY")
];

// PUSH Workouts
allWorkouts[0].newExercise("Pushups", 3, 10, null);
allWorkouts[0].newExercise("Bench Press", 3, 8, null);
allWorkouts[0].newExercise("Overhead Shoulder Press", 3, 8, null);
allWorkouts[0].newExercise("Dips", 3, 12, null);
allWorkouts[0].newExercise("Dumbbell Flyes", 3, 12, null);

// PULL Workouts
allWorkouts[1].newExercise("Pull-Ups", 3, 6, null);
allWorkouts[1].newExercise("Barbell Rows", 3, 8, null);
allWorkouts[1].newExercise("Deadlifts", 3, 6, null);
allWorkouts[1].newExercise("Face Pulls", 3, 12, null);
allWorkouts[1].newExercise("Bicep Curls", 3, 12, null);

// LEGS Workouts
allWorkouts[2].newExercise("Squats", 3, 15, null);
allWorkouts[2].newExercise("Lunges", 3, 12, null);
allWorkouts[2].newExercise("Leg Press", 3, 10, null);
allWorkouts[2].newExercise("Calf Raises", 3, 15, null);
allWorkouts[2].newExercise("Hamstring Curls", 3, 12, null);

// FULL BODY Workouts
allWorkouts[3].newExercise("Deadlifts", 3, 6, null);
allWorkouts[3].newExercise("Pushups", 3, 10, null);
allWorkouts[3].newExercise("Pull-Ups", 3, 6, null);
allWorkouts[3].newExercise("Jumping Jacks", 3, null, "30 seconds");
allWorkouts[3].newExercise("Squats", 3, 15, null);

let currentWorkoutIndex = 0;

function displayWorkout(index) {
    // Fetch the workout div id from HTML and assign it to a variable
    let workoutContainer = document.getElementById('workouts');
    let workout = allWorkouts[index];

    // In the HTML code we select the query which matches "h4" and add the workout current workout name to it
    workoutContainer.querySelector('h4').textContent = workout.name;

    // Assign a variable that we will later use to insert information in the exercise details div.
    let exerciseElements = workoutContainer.querySelectorAll('.exercise-details');

    // Iterate through all the exercises and for each exercise add the information to our classes.
    for (let i = 0; i < exerciseElements.length; i++) {
        let ex = workout.exercises[i];
        if (ex) {
            exerciseElements[i].style.display = 'flex';
            exerciseElements[i].querySelector('.exercise-info').textContent =
                `${ex.name}: ${ex.sets} sets of ${ex.reps ? ex.reps + ' reps' : ex.time}`;
        } else {
            exerciseElements[i].style.display = 'none';
        }
    }
}

// Code for the arrows to cycle through our index
function nextWorkout() {
    if (currentWorkoutIndex < allWorkouts.length - 1) {
        currentWorkoutIndex++;
        displayWorkout(currentWorkoutIndex);
    }
}

function previousWorkout() {
    if (currentWorkoutIndex > 0) {
        currentWorkoutIndex--;
        displayWorkout(currentWorkoutIndex);
    }
}

// Display the initial workout on load
displayWorkout(currentWorkoutIndex);

document.querySelector(".hamburger").addEventListener("click", function () {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
});
