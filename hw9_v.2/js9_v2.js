

function ToDo() {
    this.list = [];
  

    this.add = function () {
        if(document.querySelector('.task-input').value == "") {
            document.querySelector('.task-input').focus();
            return
        }
        else {
            let now = new Date().toLocaleString();
            let newTuskText = document.querySelector('.task-input').value;
            let notComplete = "NotComplete"
            let newTaskValue = {value: newTuskText, date: now, status: notComplete};
            this.list.push(newTaskValue);
            this.clearTasks();
            this.update();
            };

        document.querySelector('.task-input').focus();
        document.querySelector(".task-input").value = "";  
    };


    this.clearList = function() {
        this.list = [];
    };  

    this.clearTasks = function () {
        document.querySelector('.tasks').innerHTML = '';
        document.querySelector('.task-input').focus();
    };

    this.clearOneTask = function () {
        this.task.remove();
    }

    this.update = function () {
        
        this.list.forEach(elem => {

            let task = document.createElement("div");
            document.querySelector('.tasks').appendChild(task);
            task.setAttribute("class", "task");

            let checkbox = document.createElement('input');
            task.appendChild(checkbox);
            checkbox.setAttribute("class", "task-checkbox");
            checkbox.setAttribute("type", "checkbox");
            
            let taskText = document.createElement('p');
            task.appendChild(taskText);
            taskText.setAttribute("class", "task-text");
            taskText.innerHTML = elem.value;

            let task__btns = document.createElement('div');
            task.appendChild(task__btns);
            task__btns.setAttribute("class", "task__btns");
            let editbtn = document.createElement('i');

            task__btns.appendChild(editbtn);
            editbtn.setAttribute("class", "fa fa-pencil-square-o");
            editbtn.setAttribute("aria-hidden", "true");

            let deletbtn = document.createElement('i');
            task__btns.appendChild(deletbtn);
            deletbtn.setAttribute("class", "fa fa-trash-o");
            deletbtn.setAttribute("aria-hidden", "true");

            let addDate = document.createElement('p');
            task.appendChild(addDate);
            addDate.setAttribute("class", "date");
            addDate.innerHTML = 'Created  ' + elem.date;

               
            // checkbox
    
            checkbox.addEventListener('change', function(){
                taskText.classList.toggle('complete');
                // todo.complete(inputValue);
             });
        });
    };



    this.deletetasks = function () {
        this.clearList();
        this.clearTasks();
    };
    
    this.complete = function () {

    };

    this.uncomplete = function () {

    };

    this.show = function() {
        console.log(this.list);

    };

    document.querySelector('.task-btn').addEventListener('click', function (event){
        event.preventDefault();
        todo.add();
    });

    document.querySelector('.task-input').addEventListener('keyup', function (event){
        if (event.code != "Enter") {
        }
        else {
            todo.add();
        }
    });

    document.querySelector('.clear-btn').addEventListener('click', function (){
        todo.deletetasks();
    });

    document.querySelector('.clear-btn').addEventListener('mouseenter', function (){
        let allTasks =  document.querySelectorAll('.task');
        allTasks.forEach(function (elem) {
        elem.classList.add('red-border');
        });
    });

    document.querySelector('.clear-btn').addEventListener('mouseleave', function (){
        let allTasks =  document.querySelectorAll('.task');
        allTasks.forEach(function (elem) {
        elem.classList.remove('red-border');
        });
    });


    // кнопка удаления таска

    document.querySelector('.fa-trash-o').addEventListener('click', function (){
        todo.clearOneTask();
    });


};

const todo = new ToDo();