/*Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid*/

let enrollmentDeadline = new Date("2026-01-20");
let today= new Date()


if(today<enrollmentDeadline){
    console.log("Enrollment open")
}
else{
    console.log("Enrollment close")
}

// let input=new Date("2026-12-40")
// let currentmonth=input.getMonth()+2
// let highestday=new Date(2026,currentmonth-1)
// if(currentmonth<=13) console.log(input<=highestday)
// else console.log(false)
//above implementation is wrong, because after line 27, the input variable contains=2027-01-01 and not 2026-13-40


let userinput="2026-12-31"
let inputdate=new Date(userinput)

let [year,month,day]=userinput.split("-").map(Number)
let isValid=
    inputdate.getFullYear()===year && inputdate.getMonth()+1===month && inputdate.getDate()===day
console.log(isValid)