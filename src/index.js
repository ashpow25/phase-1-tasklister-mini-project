document.addEventListener("DOMContentLoaded", () => {
  // your code here
const form = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');

//submit event form
form.addEventListener('submit', addTask);

//delete event
taskList.addEventListener('click', removeTask);

//add task
function addTask(e){
  e.preventDefault();
}
});
