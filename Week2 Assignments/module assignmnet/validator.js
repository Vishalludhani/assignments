//         i. validator.js - Input validation
//                       // TODO: Export these validation functions

//                       // 1. Validate task title (not empty, min 3 chars)
//                       function validateTitle(title) {
//                         // Your code here
//                       }

//                       // 2. Validate priority (must be: low, medium, high)
//                       function validatePriority(priority) {
//                         // Your code here
//                       }

//                       // 3. Validate due date (must be future date)
//                       function validateDueDate(date) {
//                         // Your code here
//                       }

function validateTitle(title) {
    if(title.length===0){
        return "Title is Empty."
    }
    if(title.length<3){
        return "Title should have atleast 3 characters."
    }
    return true;
}

function validatePriority(priority) {
    const allowed=["low","medium","high"];
    return allowed.includes(priority);
}

function validateDueDate(date) {
    const due=new Date(date);
    const today=new Date();
    return due>today;
}

export {validateTitle,validatePriority,validateDueDate }