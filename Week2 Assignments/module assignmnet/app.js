
//importing other files
import {addTask,getAllTasks,completeTask} from "./task.js";


console.log(addTask("Finish assignment","high","2026-02-01"));
console.log(addTask("Buy groceries","medium","2026-01-30"));
console.log(addTask("Go for walk","low","2026-01-25"));


console.log("All Tasks:");
console.log(getAllTasks());

console.log(completeTask(2));

console.log("Updated Tasks:");
console.log(getAllTasks());
