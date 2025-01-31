let working = true;
let startingMins = 25;
let time = startingMins * 60;

const countdown = document.getElementById('timer');
const displayArea = document.getElementById('displayText');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

setInterval(update, 1000);

function update() {
   const mins = Math.floor(time/60);
   let seconds = time % 60;
   
   seconds = seconds < 10 ? '0' + seconds : seconds;

   countdown.innerHTML = `${mins}:${seconds}`;
   time--;
   
   if(time < 0) {
       working = !working;
       if(working === false) {
           startingMins = 5;
           time = startingMins * 60;
           alert("Good job, take a break now!");
           displayArea.textContent = "nothing, have a break :)";
       }
       else if(working === true) {
           startingMins = 25;
           time = startingMins * 60;
           alert("Back to work now!");
           displayArea.textContent = "nothing yet";
       }
   }
}

function addTask() {
   const taskText = taskInput.value;
   
   if (taskText === '') {
       return;
   }

   const li = document.createElement('li');
   
   const taskSpan = document.createElement('span');
   taskSpan.textContent = taskText;
   taskSpan.style.cursor = 'pointer';
   
   taskSpan.onclick = function() {
       displayArea.textContent = taskText;
       li.remove();
   };
   
   const deleteButton = document.createElement('button');
   deleteButton.textContent = '×';
   deleteButton.onclick = function() {
       li.remove();
   };
   
   li.appendChild(taskSpan);
   li.appendChild(deleteButton);
   
   taskList.appendChild(li);
   taskInput.value = '';
}

taskInput.addEventListener('keypress', function(event) {
   if (event.key === 'Enter') {
       addTask();
   }
});
