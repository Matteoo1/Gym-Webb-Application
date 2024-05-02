// Declares variables for managing the timer
let currentInterval = 0;  // Tracks the current interval/set (Exercise/Pause)
let intervals = [];       // Array storing durations of exercises and pauses
let intervalTimer;        // Timer object for controlling intervals
let currentSet = 0;       // Tracks the current set
let currentTime = 0;      // Duration left for the current interval in milliseconds
let timerState= "stopped"; // Keeps track of the timer's state (stopped, running, paused)

// Prepares and starts the timer by user inputs
function startTimer() {
    timerState = "stopped";
    resetTimer();

    const amountSets = document.getElementById("amountSets").value;
    const exerciseTime = document.getElementById("exerciseTime").value * 1000;
    const pauseTime = document.getElementById("pauseTime").value * 1000;

    for (let i = 0; i < amountSets; i++)
    {
        intervals.push(exerciseTime, pauseTime);
    }

    intervalFunction();
}

// Callback function to proceed to the next set
function timeoutCallback() {
    currentInterval++;
    intervalFunction();
}

// Stops the active timer and updates display to show completion
function stopTimer() {
    clearInterval(intervalTimer);
    timerState = "stopped";
    document.getElementById("display").innerText = "Finished";
    document.getElementById("timeLeft").innerText = "0s";
}

// Resets all timer variables to initial state
function resetTimer() {
    currentInterval = 0;
    intervals = [];
    currentSet = 0;
    currentTime = 0;
}

// Toggles the state between paused and running (Pause / Resume button)
function togglePauseResume() {
    if (timerState === "running")
    {
        clearInterval(intervalTimer);
        timerState = "paused";
        document.getElementById('display').textContent = 'Paused';
    }
    else if (timerState === "paused")
    {
        timerState = "running";
        intervalTimer = setInterval(updateCountdownDisplay, 1000);
    }
}

// Updates the display with the current set and time left
function updateCountdownDisplay() {
    currentTime -= 1000;
    // Checks if the current interval is an exercise or rest
    if (currentInterval % 2 === 0)
    {
        document.getElementById("display").innerText = "Exercise";
    }
    else
    {
        document.getElementById("display").innerText = "Rest";
    }

    // Makes sure we wont display a negative number for time left
    if (currentTime >= 0)
    {
        document.getElementById("timeLeft").innerText = currentTime / 1000 + "s";
    }
    else
    {
        document.getElementById("timeLeft").innerText = "0s";
    }

    if (currentTime <= 0)
    {
        clearInterval(intervalTimer);
        timeoutCallback();
    }
}

// Manages the sets by starting, pausing, or stopping them
function intervalFunction() {
    clearInterval(intervalTimer);

    if (currentInterval < intervals.length)
    {
        timerState = "running";
        currentTime = intervals[currentInterval];

        if (currentInterval % 2 === 0)
        {
            currentSet++;
            document.getElementById('currentSet').innerText = currentSet;
        }

        updateCountdownDisplay();
        intervalTimer = setInterval(updateCountdownDisplay, 1000);
    }
    else
    {
        stopTimer();
        resetTimer();
    }
}
