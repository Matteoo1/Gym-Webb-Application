import {Exercise, Workout} from './classes.js';
// import {showInfo} from './planner.js';

/*
// test classes for my workouts
let emptyworkout = new Workout();
let plan1 = new Workout("Chest");
plan1.newExercise(new Exercise("Bench", 3, 3, 0,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpNmE4qZb1Nf_YFvz2SLCY88fbBfHgwClxA&usqp=CAU"));
plan1.newExercise(new Exercise("Bench", 4, 2, 0,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpNmE4qZb1Nf_YFvz2SLCY88fbBfHgwClxA&usqp=CAU"));
plan1.newExercise(new Exercise("Bench", 4, 8, 0,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpNmE4qZb1Nf_YFvz2SLCY88fbBfHgwClxA&usqp=CAU"));

let plan2 = new Workout("Legs");
plan2.newExercise(new Exercise("bike",4,0,500,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_NXNzNiVZ_cIBqu1ZFb5HRvoh2440f_AxwiELy8gbyh4GvJg_i5TX5kPef84Lb4iIkA&usqp=CAU"));
plan2.newExercise(new Exercise("bike",1,0,10,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_NXNzNiVZ_cIBqu1ZFb5HRvoh2440f_AxwiELy8gbyh4GvJg_i5TX5kPef84Lb4iIkA&usqp=CAU"));
plan2.newExercise(new Exercise("bike",2,0,100,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_NXNzNiVZ_cIBqu1ZFb5HRvoh2440f_AxwiELy8gbyh4GvJg_i5TX5kPef84Lb4iIkA&usqp=CAU"));

let plan3 = new Workout("Legs2");
plan3.newExercise(new Exercise("bike",4,0,500,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_NXNzNiVZ_cIBqu1ZFb5HRvoh2440f_AxwiELy8gbyh4GvJg_i5TX5kPef84Lb4iIkA&usqp=CAU"));
plan3.newExercise(new Exercise("bike",1,0,10,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_NXNzNiVZ_cIBqu1ZFb5HRvoh2440f_AxwiELy8gbyh4GvJg_i5TX5kPef84Lb4iIkA&usqp=CAU"));
plan3.newExercise(new Exercise("bike",2,0,100,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_NXNzNiVZ_cIBqu1ZFb5HRvoh2440f_AxwiELy8gbyh4GvJg_i5TX5kPef84Lb4iIkA&usqp=CAU"));
*/
let workouts = [plan1, plan2, plan3];

function showInfo(plan, workoutBox) {
    let totalSets = plan.numberOfSetsTotal();
    let totalExercises = plan.numberOfExercises;
    const totalInfo = document.createElement('p');
    totalInfo.textContent = `Exercises: ${totalExercises}, Sets: ${totalSets}`;
    workoutBox.appendChild(totalInfo);
}

function showImages(plan, workoutBox) {
    // Check if the details container already exists in the workout box
    let detailsContainer = workoutBox.querySelector(".exercise-details-container");

    // If the details container already exists, toggle its visibility
    if (detailsContainer) {
        detailsContainer.style.display = detailsContainer.style.display === "none" ? "block" : "none";
        return;
    }

    // If the details container doesn't exist, create it and display the exercises
    detailsContainer = document.createElement("div");
    detailsContainer.className = "exercise-details-container";

    // Loop through the workout plan and create elements for each exercise
    for (let i = 0; i < plan.workout.length; i++) {
        let exercise = plan.workout[i];

        // Create a container div for each exercise
        let exerciseContainer = document.createElement("div");
        exerciseContainer.className = "exercise-container";

        // Create an img element for the exercise image
        let imgElement = document.createElement("img");
        imgElement.src = exercise.name.image;
        imgElement.alt = "Image " + (i + 1);
        imgElement.classList.add("small-image");

        // Create a div for exercise details
        let exerciseDetailsContainer = document.createElement("div");
        exerciseDetailsContainer.className = "exercise-details";

        // Create a paragraph element for the exercise name
        let nameElement = document.createElement("p");
        nameElement.textContent = "Exercise: " + exercise.name.name;
        nameElement.className = "exercise-name";

        // Create paragraph elements for sets, reps, and time
        let setsElement = document.createElement("p");
        setsElement.textContent = "Sets: " + exercise.name.sets;

        let repsElement = document.createElement("p");
        repsElement.textContent = "Reps: " + exercise.name.reps;

        let timeElement = document.createElement("p");
        timeElement.textContent = "Time: " + exercise.name.time + " seconds";

        // Append the name, sets, reps, and time elements to the details container
        exerciseDetailsContainer.appendChild(nameElement);
        exerciseDetailsContainer.appendChild(setsElement);
        if(exercise.name.reps !== 0){
            exerciseDetailsContainer.appendChild(repsElement);
        }
        if(exercise.name.time !== 0){
            exerciseDetailsContainer.appendChild(timeElement);
        }

        // Append the img and details container to the exercise container
        exerciseContainer.appendChild(imgElement);
        exerciseContainer.appendChild(exerciseDetailsContainer);

        // Append the exercise container to the details container
        detailsContainer.appendChild(exerciseContainer);
    }

    // Append the details container to the workout box
    workoutBox.appendChild(detailsContainer);
}



function displayWorkouts() {
    let workoutList = document.getElementById("workoutList");
    workoutList.innerHTML = "";

    for (let i = 0; i < workouts.length; i++) {
        const workout = workouts[i];

        // Create a container for each workout
        let workoutContainer = document.createElement("div");
        workoutContainer.className = "workout-container";

        // Create workout-box inside the workout-container
        let workoutBox = document.createElement("div");
        workoutBox.className = "workout-box";
        workoutContainer.appendChild(workoutBox);

        // Use h4 for the workout name
        let workoutNameElement = document.createElement("h4");
        workoutNameElement.textContent = `${workout.name}`;
        workoutBox.appendChild(workoutNameElement);

        let buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";

        // Create a button for viewing details
        let detailsButton = document.createElement("button");
        detailsButton.className = "workout-button";
        detailsButton.textContent = "Details";
        detailsButton.onclick = function () {
            showImages(workout, workoutBox);
            showInfo(workout, workoutBox);
        };
        buttonContainer.appendChild(detailsButton);

        // Create a button for starting the workout
        let startButton = document.createElement("button");
        startButton.className = "start-button";
        startButton.textContent = "Start";
        startButton.onclick = function () {
            window.location.href = "workout.html"; // Replace with your desired action
        };
        buttonContainer.appendChild(startButton);

        // Create a button for removing the workout
        let removeButton = document.createElement("button");
        removeButton.className = "remove-button";
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            removeWorkout(i);
            showImages(emptyworkout);
            showInfo(emptyworkout);
        };
        buttonContainer.appendChild(removeButton);

        workoutContainer.appendChild(buttonContainer);

        workoutBox.appendChild(buttonContainer);

        workoutList.appendChild(workoutContainer);
    }
}
function removeWorkout(index) {
    workouts.splice(index, 1);
    displayWorkouts();
}

displayWorkouts();

document.getElementById("pre-planned").addEventListener("click", function() {
    window.location.href = "../Welcome/planned.html";
});

