const inputText = document.querySelector('#input_text');
const submitTask = document.querySelector('#submit_task');
const taskList = document.querySelector('#task_list');
const toDoForm = document.querySelector('#to_do_form');


function addTask() {
    if (inputText.value) {
        const newTask = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '💀';
        newTask.textContent = inputText.value
        taskList.appendChild(newTask);
        newTask.appendChild(deleteButton);
    } else {
        alert('You can\'t create an empty task!')
    }
    saveData();
}
taskList.addEventListener('click', function (event) {
    event.target.tagName === 'BUTTON' && event.target.parentElement.remove();
    saveData();
});
toDoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTask();
});

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function saveData() {
    localStorage.setItem('taskList', taskList.innerHTML);
}
function loadData() {
    taskList.innerHTML = localStorage.getItem('taskList');
}
loadData();