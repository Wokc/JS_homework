document.querySelector('html').setAttribute("lang", "en");

document.head.appendChild(document.createElement("meta"));

document.querySelector('meta').setAttribute("charset", "UTF-8");

// document.head.appendChild(document.createElement("link"));

// document.querySelector('link').setAttribute("id", "link_1");

// document.getElementById('link_1').setAttribute("rel", "stylesheet");

// document.getElementById('link_1').setAttribute("href", "https://fonts.googleapis.com/css2?family=Cabin:wght@500&display=swap");

document.head.appendChild(document.createElement("title"));

document.querySelector('title').innerHTML = "JSHw9";

let style = document.body.appendChild(document.createElement("style"));

style.innerHTML = `
body {
    margin: 0px;
    padding: 0px;
}

h1,h2,h3,h4,h5{
    margin: 0px;
    padding: 0px;
}

.content{
    width: 1200px;
    margin: 0px auto;
    background-color: #e4e4e4;
}

.header{
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   
}

h1{
    font-family: 'Cabin', sans-serif;
    font-size: 30px;
    text-align: center;
    padding: 50px 0px;
    display: block;
    background-color: #8bc34a;
    width: 100%;
}

.task-input{
    width: 40%;
    height: 40px;
    font-size: 20px;
    padding: 10px 10px;
    border-radius: 5px;
    border: 2px solid;
    margin: 10px;
}

.tasks{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

h4{
    text-align:center;
    font-size: 25px;
}

.task{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
}

.task-checkbox{
    margin-right: 20px;
    height: 40px;
    width: 40px;
}

.task-btn{
    font-size: 20px;
    border-radius: 10px;
    background-color: #8bc34a;
    padding: 10px 30px;
    margin: 10px;
}

.task__btns{
    width: 15%;
    display:flex;
    justify-content: space-around;
    align-items: center;
}

.task-text{
    font-size: 20px;
    width: 70%;
}

.fa{
    font-size: 30px;
    margin: 5px;
}

.complete p{
    text-decoration: line-through;
}
`;



function ToDo() {
    this.list = [];
    this.listCompleted = [];

    this.add = function(inputValue) {
  
        this.list.push(inputValue);

        // let idNumber = this.list.length - 1;

        let task = document.createElement("div");

        document.querySelector('.tasks').appendChild(task);

        task.setAttribute("class", "task");

        // task.setAttribute("id", idNumber);

        let checkbox = document.createElement('input');

        task.appendChild(checkbox);

        checkbox.setAttribute("class", "task-checkbox");
        checkbox.setAttribute("type", "checkbox");
        

        let taskText = document.createElement('p');

        task.appendChild(taskText);

        taskText.setAttribute("class", "task-text");
    
        taskText.innerHTML = inputValue;
 
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

        console.log(inputValue);

        console.log(this.list.indexOf(inputValue));

        deletbtn.addEventListener('click', function (){
      
            todo.remove(inputValue);
        
        });
           
        checkbox.addEventListener('change', function(){

                todo.complete(inputValue);
         });

    };
  

    // this.edit = function(index) {
    //     let task = promt("Отредактируй задачу: ", this.list[index]);
    //     this.list[index] = task; 
    // };

    this.remove = function(inputValue) {
            let deletIndex = this.list.indexOf(inputValue);
            console.log('---------');
            console.log(deletIndex);
            this.list.splice(deletIndex, 1);
            document.getElementById(deletIndex).remove();
    };

        
    this.complete = function(inputValue) {
        let completeindex = this.list.indexOf(inputValue);
        console.log(completeindex);
        this.list.splice(completeindex, 1);
        document.getElementById(completeindex).setAttribute('class', 'task complete');
    };


    this.show = function() {
        console.log(this.list);
        console.log(this.listCompleted);

    };
};


const todo = new ToDo();

document.querySelector('.task-btn').addEventListener('click', function (event){

    event.preventDefault();

    if (document.querySelector('.task-input').value == ""){

    } else {
        todo.add(document.querySelector('.task-input').value);
    }
    
    document.querySelector(".task-input").value = "";  

});
