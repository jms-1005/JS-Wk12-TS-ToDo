"use strict";
exports.__esModule = true;
var todo_component_1 = require("./components/todo.component");
//Creating the Object of the class
var myToDoList = new todo_component_1.ToDo();
myToDoList.addTask(1, 'Pick up mail', 'today', 'medium');
myToDoList.viewTasks();
myToDoList.addTask(2, 'Do laundry', 'tomorrow', 'low');
myToDoList.viewTasks();
myToDoList.setTaskComplete(1);
myToDoList.viewTasks();
myToDoList.revertSetComplete(1);
myToDoList.viewTasks();
// myToDoList.removeTask(1);
// myToDoList.viewTasks();
myToDoList.modifyTaskTitle(2, 'New Title');
myToDoList.viewTasks();
myToDoList.modifyTask(2, 'New Title here', 'tomorrow', 'high');
myToDoList.viewTasks();
// myToDoList.removeTask(2);
// myToDoList.viewTasks();
myToDoList.viewArchivedTasks();