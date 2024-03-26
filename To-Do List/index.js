function addTask(){
    var inputVal=document.getElementById("task_Input").value
    if(inputVal ===""){
        alert("please enter a task")
        return
    }
    var task={
        name:inputVal,
        completed:false,
    }
    tasks.push(task)
    document.getElementById("task_Input").value=''
    updateLists()
}

function toggleComplete(index){
    tasks[index].completed=!tasks[index].completed
    updateLists()
}

function deleteTask(index){
    tasks.splice(index,1)
    updateLists()
}
function updateLists(){
    var taskPending=document.getElementById("taskList")
    var completedList=document.getElementById("completedTaskList")
    taskPending.innerHTML=' '
    completedList.innerHTML=' '
    tasks.forEach(function(task,index){
        var li=document.createElement('li')
        var checkBox=document.createElement("input")
        checkBox.type='checkbox'
        checkBox.checked=task.completed
        checkBox.onclick=function(){
            toggleComplete(index)
        }
        var label=document.createElement('label')
        label.textContent=task.name
        if(task.completed){
            label.className='completed'
        }
        var deleteButton=document.createElement("button")
        deleteButton.textContent="Delete"
        deleteButton.className='Delete-btn'
        deleteButton.onclick=function(){
            deleteTask(index)
        }
        li.appendChild(checkBox)
        li.appendChild(label)
        li.appendChild(deleteButton)
        if(task.completed){
            completedList.appendChild(li)
        }
        else{
            taskPending.appendChild(li)
        }
     })
}
var tasks=[
    {
        name:'complete project',
        completed: false,
    },
    {
        name:'buy Ice-Creams',
        completed: true,
    }
]
updateLists()