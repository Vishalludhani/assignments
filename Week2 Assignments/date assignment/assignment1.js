/*Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss*/


let currentDate = new Date()


let year=currentDate.getFullYear()
let month=currentDate.getMonth() 
let date=currentDate.getDate() 
let day=currentDate.getDay() 
let hours=currentDate.getHours()
let minutes=currentDate.getMinutes()
let seconds=currentDate.getSeconds()

let monthNames = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"]

let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


console.log("Year: "+year)
console.log("Month: "+monthNames[month])
console.log("Date: "+date)
console.log("Day of week: "+dayNames[day])
console.log("Hours: "+hours)
console.log("Minutes: "+minutes)
console.log("Seconds: "+seconds)

function addzero(date){
    return date<10?"0"+date:date
}
let formatteddate=addzero(date)+"-"+(addzero(month+1))+"-"+year+" "+hours+":"+minutes+":"+seconds
console.log(formatteddate)