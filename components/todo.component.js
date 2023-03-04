"use strict";
exports.__esModule = true;
exports.ToDo = void 0;
//Encapsulate ToDo items in a class
//Properties: tasks - its an array containing all the tasks. The elements of task array are of type Task (interface)
//Methods: 
// Add new task, view all tasks, set a task as completed, revert a task from completed
var ToDo = /** @class */ (function () {
    function ToDo() {
        this.tasks = [];
    }
    ToDo.prototype.addTask = function (p_id, p_title, p_deadline, p_priority) {
        var newTask = {
            id: p_id,
            title: p_title,
            dateCreated: new Date(2018, 11, 24, 10, 33, 30, 0),
            deadline: p_deadline,
            priority: p_priority,
            isComplete: false
        };
        this.tasks.push(newTask);
    };
    ToDo.prototype.viewTasks = function () {
        console.log(this.tasks);
    };
    ToDo.prototype.setTaskComplete = function (taskID) {
        var index = this.tasks.findIndex(function (a) { return a.id === taskID; });
        // console.log('INDEX IS:', index);
        this.tasks[index].isComplete = true;
        this.tasks[index].dateCompleted = new Date();
    };
    ToDo.prototype.revertSetComplete = function (taskID) {
        var index = this.tasks.findIndex(function (a) { return a.id === taskID; });
        this.tasks[index].isComplete = false;
        // Remember to reset the date when reverting
    };
    ToDo.prototype.removeTask = function (taskID) {
        var index = this.tasks.findIndex(function (a) { return a.id === taskID; });
        this.tasks.splice(index, 1);
    };
    ToDo.prototype.modifyTask = function (taskID, p_title, p_deadline, p_priority) {
        var index = this.tasks.findIndex(function (a) { return a.id === taskID; });
        this.tasks[index].title = p_title;
        this.tasks[index].deadline = p_deadline;
        this.tasks[index].priority = p_priority;
    };
    ToDo.prototype.modifyTaskTitle = function (taskID, newTitle) {
        var index = this.tasks.findIndex(function (a) { return a.id === taskID; });
        this.tasks[index].title = newTitle;
    };
    ToDo.prototype.modifyTaskDeadline = function (taskID, newDeadline) {
        var index = this.tasks.findIndex(function (a) { return a.id === taskID; });
        this.tasks[index].title = newDeadline;
    };
    ToDo.prototype.modifyTaskPriority = function (taskID, newPriority) {
        var index = this.tasks.findIndex(function (a) { return a.id === taskID; });
        this.tasks[index].title = newPriority;
    };
    // Parse through the tasks array.
    // Look for dateCompleted
    // If dateCompleted is greater than 30 days, display them
    ToDo.prototype.viewArchivedTasks = function () {
        //Display tasks that are 3 months or older
        for (var i = 0; i < this.tasks.length; i++) {
            var dc = this.tasks[i].dateCompleted;
            var date = new Date();
            var day = date.getDate();
            if (dc === null || dc === void 0 ? void 0 : dc.getDate()) {
                if (dc.getDate() < (day - 30)) {
                    console.log(this.tasks[i]);
                }
            }
        }
    };
    return ToDo;
}());
exports.ToDo = ToDo;
