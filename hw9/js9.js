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
    min-height: 900px;
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
    border: 2px solid transparent;
    margin: 10px;
    outline:none;
    transition: linear 0.1s;
}

.task-input:focus{
    border-color: #8bc34a;
}

.task-input:hover{
    border-color: #6bc305;
}

.tasks{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

h4{
    font-family: 'Cabin', sans-serif;
    text-align:center;
    font-size: 25px;
    margin-top: 10px;
}

.task{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    border-bottom: 2px solid black;
    margin-bottom: 5px;
    transition: linear 0.1s;
}

.task:hover{
    border-color: #8bc34a;
}

.task-checkbox{
    margin: 18px 15px 18px 15px ;
    height: 30px;
    width: 30px;
}

.task-btn{
    font-size: 20px;
    border: none;
    border-radius: 10px;
    background-color: #8bc34a;
    padding: 10px 30px;
    margin: 10px;
    transition: linear 0.1s;
}

.task-btn:hover{
    color: white;
    background-color: #6bc305;
}

.clear-btn{
    font-size: 20px;
    border: none;
    border-radius: 10px;
    background-color: #8bc34a;
    padding: 10px 30px;
    margin: 10px;
    transition: linear 0.1s;
}

.clear-btn:hover{
    color: white;
    background-color: #6bc305;
}

// .clear-btn:hover ~ .task {
//     border-color: #ef0655; 
// }

.task__btns{
    width: 20%;
    display:flex;
    justify-content: flex-end;
    align-items: center;
}

.task-text{
    font-size: 20px;
    width: 70%;
}

.fa{
    font-size: 25px;
    margin: 10px;
    transition: linear 0.1s;
}

.fa-pencil-square-o{
    padding-top: 5px;
}

.fa-trash-o:hover{
    transform: scale(1.3);
}

.fa-pencil-square-o:hover{
    transform: scale(1.3);
}

.complete p{
    text-decoration: line-through;
}

.task-edit{
    font-size: 20px;
    width: 70%;
    height: 100%;
    margin-right: 5px;
    padding: 5px 5px;
    border: 2px solid transparent;
    border-radius: 5px;
    outline:none;
}

.task-edit:hover{
    border-color: #8bc34a;
}

.task-btn_add{
    font-size: 20px;
    border: none;
    border-radius: 10px;
    background-color: #8bc34a;
    padding: 6px 6px;
    margin: 0px auto;
    transition: linear 0.1s;
}

.task-btn_add:hover{
    color: white;
    background-color: #6bc305;
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

// EDIT button 

        editbtn.addEventListener('click', function (){ 
            let addbtn = document.createElement('input');

            task__btns.insertBefore(addbtn, editbtn);
    
            addbtn.setAttribute("class", "task-btn_add");
            addbtn.setAttribute("value", "save");
            addbtn.setAttribute("type", "submit");

            taskText.remove();
            editbtn.remove();

            let editinput = document.createElement('input');

            task.insertBefore(editinput, task__btns);
    
            editinput.setAttribute("class", "task-edit");

            editinput.setAttribute("type", "text");
            
            editinput.focus();
            editinput.setAttribute("value", inputValue);

            document.querySelector('.task-edit').addEventListener('keyup', function (event){
                
                event.preventDefault();

                if(event.keyCode == '13') {
                    if (document.querySelector('.task-edit').value == inputValue){
                        editinput.remove();
    
                        addbtn.remove();
                      
                        task.insertBefore(taskText, task__btns);
    
                        taskText.setAttribute("class", "task-text");
                    
                        taskText.innerHTML = inputValue;
    
                        task__btns.insertBefore(editbtn, deletbtn);
    
                    } else {
    
                        newinputValue = document.querySelector('.task-edit').value;
                    
                        editinput.remove();
    
                        addbtn.remove();
    
                        task.insertBefore(taskText, task__btns);
    
                        taskText.setAttribute("class", "task-text");
                    
                        taskText.innerHTML = newinputValue;
    
                        todo.edit(inputValue, newinputValue);
    
                        inputValue = newinputValue;
    
                        task__btns.insertBefore(editbtn, deletbtn);
                    };
                }
            });



            document.querySelector('.task-btn_add').addEventListener('click', function (event){

                event.preventDefault();
              
                if (document.querySelector('.task-edit').value == inputValue){
                    editinput.remove();

                    addbtn.remove();
                  
                    task.insertBefore(taskText, task__btns);

                    taskText.setAttribute("class", "task-text");
                
                    taskText.innerHTML = inputValue;

                    task__btns.insertBefore(editbtn, deletbtn);

                } else {

                    newinputValue = document.querySelector('.task-edit').value;
                
                    editinput.remove();

                    addbtn.remove();

                    task.insertBefore(taskText, task__btns);

                    taskText.setAttribute("class", "task-text");
                
                    taskText.innerHTML = newinputValue;

                    todo.edit(inputValue, newinputValue);

                    inputValue = newinputValue;

                    task__btns.insertBefore(editbtn, deletbtn);
                };
                

                

                document.querySelector(".task-input").value = "";  

            });
        
        });

        deletbtn.addEventListener('click', function (){ 
            task.remove();
            todo.remove(inputValue);
        
        });
           
        checkbox.addEventListener('change', function(){
            task.classList.toggle('complete');
            // todo.complete(inputValue);
         });

    };
    
    // this.update = function () {

    //     document.querySelector('.tasks').innerHTML = '';

    //     this.list.forEach (elem => {
    //         this.add(elem);
    //     })
    // }

    this.clearList = function() {
        this.list = [];
    };

    this.edit = function(inputValue, newinputValue) {
        let changeindex = this.list.indexOf(inputValue);



        this.list[changeindex] = newinputValue; 
    };

    this.remove = function(inputValue) {
            let deletIndex = this.list.indexOf(inputValue);

            this.list.splice(deletIndex, 1);
            // this.update();
    };
        
    // this.complete = function(inputValue) {
    //     let completeindex = this.list.indexOf(inputValue);

    //     // this.list.splice(completeindex, 1);

    //     // document.getElementById(completeindex).setAttribute('class', 'task complete');
    // };


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
    document.querySelector('.task-input').focus();
    document.querySelector(".task-input").value = "";  

});


document.querySelector('.clear-btn').addEventListener('click', function (event){

    event.preventDefault();

    let arr = document.querySelectorAll('.task');

    for(let i = arr.length; i > 0; i--) {
        document.querySelector('.task').remove();
    }

    todo.clearList();

    document.querySelector('.task-input').focus();
    document.querySelector(".task-input").value = "";  

});



document.querySelector('.task-input').addEventListener('keyup', function (event){

    if(event.keyCode == '13') {
        if (document.querySelector('.task-input').value == ""){
        
        } else {
            todo.add(document.querySelector('.task-input').value);
            
        }
        document.querySelector('.task-input').focus();
        document.querySelector(".task-input").value = "";  
    };

});