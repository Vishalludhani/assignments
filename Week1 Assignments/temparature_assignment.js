// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

const filteredTemperatures = temperatures.filter(temp => temp > 35);
const fahrenheitTemperatures = temperatures.map(temp => (temp * 9 / 5) + 32);
const averageTemperature = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
const firstAbove40 = temperatures.find(temp => temp > 40);
const index28 = temperatures.findIndex(temp => temp === 28);


console.log("Filtered Temperatures (>35):", filteredTemperatures);
console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);
console.log("Average Temperature:", averageTemperature);
console.log("First Temperature Above 40:", firstAbove40);
console.log("Index of Temperature 28:", index28);









// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
//     4. find() the course "react"
//     5. findIndex() of "node"

const filteredCourses = courses.filter(course => course.length > 5);
const uppercaseCourses = courses.map(course => course.toUpperCase());
const courseString = courses.reduce((acc, course, index) => {
    return acc + (index === 0 ? "" : " | ") + course.toUpperCase();
}, "");
const reactCourse = courses.find(course => course === "react");
const nodeIndex = courses.findIndex(course => course === "node");


console.log("Filtered Courses (length > 5):", filteredCourses);
console.log("Uppercase Courses:", uppercaseCourses);
console.log("Course String:", courseString);
console.log("Found Course 'react':", reactCourse);
console.log("Index of 'node':", nodeIndex);











// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92
const passingMarks = marks.filter(mark => mark >= 40);
const graceMarks = marks.map(mark => mark + 5);
const highestMark = marks.reduce((max, mark) => (mark > max ? mark : max), marks[0]);
const firstBelow40 = marks.find(mark => mark < 40);
const index92 = marks.findIndex(mark => mark === 92);


console.log("Passing Marks:", passingMarks);
console.log("Marks with Grace:", graceMarks);
console.log("Highest Mark:", highestMark);
console.log("First Mark Below 40:", firstBelow40);
console.log("Index of Mark 92:", index92);