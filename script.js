// script.js

document.getElementById('add-task-button').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText) {
        addTask(taskText);
        document.getElementById('new-task').value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskItem.appendChild(taskSpan);

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = taskText;
    editInput.className = 'edit-task';
    taskItem.appendChild(editInput);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.addEventListener('click', function() {
        if (editInput.style.display === 'none') {
            editInput.style.display = 'inline-block';
            taskSpan.style.display = 'none';
            editButton.textContent = 'Save';
        } else {
            taskSpan.textContent = editInput.value;
            editInput.style.display = 'none';
            taskSpan.style.display = 'inline-block';
            editButton.textContent = 'Edit';
        }
    });
    taskItem.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
}
