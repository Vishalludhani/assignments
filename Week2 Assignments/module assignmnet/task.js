import {validateTitle,validatePriority,validateDueDate} from "./validator.js";

const tasks = [];
let idCounter = 1;

function addTask(title, priority, dueDate) {
  if (!validateTitle(title)) {
    return "Invalid title";
  }

  if (!validatePriority(priority)) {
    return "Invalid priority";
  }

  if (!validateDueDate(dueDate)) {
    return "Invalid Due Date";
  }

  const task = {
    id:idCounter++,
    title,
    priority,
    dueDate,
    completed:false
  };

  tasks.push(task);
  return "Task added successfully";
}

function getAllTasks() {
  return tasks;
}


function completeTask(taskId) {
  const task=tasks.find(t=>t.id===taskId);
  if (!task){
    return "Task not found";
  }

  task.completed=true;
  return "Task marked as complete";
}

export { addTask, getAllTasks, completeTask };