var tasks = [];

var taskStatus = {
    active: 'active',
    completed: 'completed'
};

function Task(id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}

function addTaskElement(task) {
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    taskEl.setAttribute('id', task.id);

    // adds text to "task" element
    taskEl.appendChild(textEl);
    listEl.appendChild(taskEl);
}
//click handler
function addTask(event) {
    var inputEl = document.getElementById('input-task');
    if (inputEl.value !== '') {
        //new tasks
        var id = 'item-' + tasks.length;

        var task = new Task(id, inputEl.value, taskStatus.active);

        tasks.push(task);
        addTaskElement(task);
        inputEl.value = '';
    }
}

function completeTask(event) {
    // gets task els
    var taskEl = event.target;
    var id = taskEl.id;

    for (var e = 0; e < tasks.length; e++) {
        if (tasks[e].id === id) {
            tasks[e].status = taskStatus.completed;
            break;
        }
    }

    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

function init() {
    document.getElementById('add-task').onclick = addTask;
    document.getElementById('active-list').onclick = completeTask;
}

init();