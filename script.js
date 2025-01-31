// Timer variables
let working = true;
let startingMins = 25;
let time = startingMins * 60;

// Get all HTML elements
const countdown = document.getElementById('timer');
const displayArea = document.getElementById('displayText');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Timer update function
setInterval(update, 1000);

function update() {
    const mins = Math.floor(time/60);
    let seconds = time % 60;
    
    // Add leading zero for seconds less than 10
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdown.innerHTML = `${mins}:${seconds}`;
    time--;
    
    if(time < 0) {
        working = !working;
        if(working === false) {
            startingMins = 5;
            time = startingMins * 60;
            displayArea.innerHTML = taskText
            alert("good job, take a break now!")
        }
        else if(working === true) {
            startingMins = 25;
            time = startingMins * 60;
            displayArea.innerHTML = "nothing, have a break :)"
            alert("back to work now!")
        }
    }
}

// To-do list functionality
function addTask() {
    const taskText = taskInput.value;
    
    if (taskText === '') {
        return;
    }

    const li = document.createElement('li');
    
    // Make task text clickable
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.style.cursor = 'pointer';
    
    // When clicked, move to "now doing"
    taskSpan.onclick = function() {
        doing.value = taskText;
        displayArea.textContent = taskText;
        li.remove();
    };
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '×';
    deleteButton.onclick = function() {
        li.remove();
    };
    
    // Add both task text and delete button
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);
    
    taskList.appendChild(li);
    taskInput.value = '';
}

// Allow adding tasks with Enter key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});