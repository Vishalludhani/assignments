/*Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years*/

let dob=new Date("2000-05-15")
let currentDate=new Date()
console.log(currentDate.getFullYear()-dob.getFullYear())