// (приложение "Список задач"):

// Создайте функцию-конструктор ToDo:

//  - со свойствами: list, listCompleted;
//  - c методами: add(), edit(index), remove(index), complete(index), show().

// Свойство list - массив для хранения всех невыполненных задач, а listCompleted - массив для выполненных задач.

// Метод add должен добавлять в list задачу, запрашиваемую у пользователя через prompt.

// Методы edit и remove должены выполнять редактирование и удаление, соответственно, задачи из list, найденной по index. Редактиорвание задачи должно быть реализовано с использование prompt.

// Метод complete должен по переданному index переносить задачу из list в listCompleted.

// Метод show используйте для показа в console.log всех задач, в т.ч. завершенных.

// После любых действий должен показывать alert с уведомлением об успешном действии, например: "Задача добавлена", "Редактирование успешно завершено" и т.п.


function ToDo() {
    this.list = [];
    this.listCompleted = [];

    this.add = function() {
        let a = prompt('Введите задачу:');
        this.list.push(a);
    };

    this.edit = function(index) {
        let task = promt("Отредактируй задачу: ", this.list[index]);
        this.list[index] = task; 
    };

    this.remove = function(index) {
        this.list.splice(index, 1);
    };

    this.complete = function(index) {
        let completeTask = this.list[index];
        this.listCompleted.push(completeTask);
        this.list.splice(index, 1);
    };

    this.show = function() {
        console.log(this.list);
    };

}

const todo = new ToDo();



