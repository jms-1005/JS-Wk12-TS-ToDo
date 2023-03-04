import { Task } from './../interfaces/todo.interface';

//Encapsulate ToDo items in a class
//Properties: tasks - its an array containing all the tasks. The elements of task array are of type Task (interface)
//Methods: 
// Add new task, view all tasks, set a task as completed, revert a task from completed
export class ToDo{

    tasks:Task[] = [];

    addTask(p_id:number, p_title:string, p_deadline:string, p_priority: string){
        let newTask = {
            id: p_id,
            title: p_title,
            dateCreated: new Date(2018, 11, 24, 10, 33, 30, 0),
            deadline: p_deadline,
            priority: p_priority,
            isComplete: false
        }

        this.tasks.push(newTask);
    }

    viewTasks(){
        console.log(this.tasks);
    }

    setTaskComplete(taskID:number){

        const index = this.tasks.findIndex(a => a.id === taskID);
        // console.log('INDEX IS:', index);
        this.tasks[index].isComplete = true;
        this.tasks[index].dateCompleted = new Date();
    }

    revertSetComplete(taskID:number){
        const index = this.tasks.findIndex(a => a.id === taskID); 
        this.tasks[index].isComplete = false;
        // Remember to reset the date when reverting
    }


    removeTask(taskID:number){
        const index = this.tasks.findIndex(a => a.id === taskID);
        this.tasks.splice(index, 1);
    }

    modifyTask(taskID:number, p_title:string, p_deadline:string, p_priority:string){
        const index = this.tasks.findIndex(a => a.id === taskID);
        this.tasks[index].title = p_title;
        this.tasks[index].deadline = p_deadline;
        this.tasks[index].priority = p_priority;
    }

    modifyTaskTitle(taskID:number, newTitle:string){
        const index = this.tasks.findIndex(a => a.id === taskID);
        this.tasks[index].title = newTitle;
    }

    modifyTaskDeadline(taskID:number, newDeadline:string){
        const index = this.tasks.findIndex(a => a.id === taskID);
        this.tasks[index].title = newDeadline;
    }

    modifyTaskPriority(taskID:number, newPriority:string){
        const index = this.tasks.findIndex(a => a.id === taskID);
        this.tasks[index].title = newPriority;
    }

    // Parse through the tasks array.
    // Look for dateCompleted
    // If dateCompleted is greater than 30 days, display them
    viewArchivedTasks(){
        //Display tasks that are 3 months or older
        for(let i=0; i<this.tasks.length; i++){
            const dc = this.tasks[i].dateCompleted;
            let date = new Date();
            let day = date.getDate();
            if(dc?.getDate()){
                if(dc.getDate() < (day-30)){
                    console.log(this.tasks[i]);
                }
            }
        }
    }

}