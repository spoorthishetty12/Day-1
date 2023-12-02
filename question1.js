/* 
    1. Write a JavaScript function to calculate the total marks of each student and add that marks in the object for each student. 
    1. Print the final array of objects to the console.
    2. Print only the names of all the students whose total marks is above 445.
*/

const studentsMarks = [
    { name: "Preethi", rollNo: 301, chemistry: 78, maths: 88, commerce: 90, physicalEducation: 90 },
    { name: "Priya", rollNo: 302, chemistry: 75, maths: 90, commerce: 85, physicalEducation: 94 },
    { name: "Jaya", rollNo: 303, chemistry: 82, maths: 95, commerce: 88, physicalEducation: 92 },
    { name: "Prema", rollNo: 304, chemistry: 85, maths: 96, commerce: 91, physicalEducation: 99 },
    { name: "Shreetama", rollNo: 305, chemistry: 83, maths: 92, commerce: 89, physicalEducation: 91 }
  ];

function totalMarksOfStudents(student){
    const initialValue = 0
    const subjects = Object.keys(student).filter(ele => ele !== "name" && ele!= "rollNo")
    return subjects.reduce((prevValue, currValue)=> prevValue + student[currValue], initialValue)
}

function addTotalMarksToStudents(students){
    return students.map(student=>{
        const totalMarks = totalMarksOfStudents(student)
        return {...student, totalMarks}
    })
}

console.log("Final Array of Objects: ", addTotalMarksToStudents(studentsMarks))

function namesAbove445(students){
    const above445 = students.filter(student=> student.totalMarks>445)
    const names = above445.map(student => student.name)
    return names
}

console.log("Names of students with total marks above 445: ", namesAbove445(studentsMarks))
