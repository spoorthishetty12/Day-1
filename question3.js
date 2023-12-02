/*
    3. Write a JavaScript function to calculate these things and print them to console based on the given data:
    1. Total Average of Chemistry
    2. Total Average of Maths
    3. Total Average of Commerce
*/

const studentsData = [
    { name: "Rahul", rollNo: 201, chemistry: 88, maths: 78, commerce: 92, physicalEducation: 90, moralScience: 85, totalMarks: 433, avgMarks: 86.6 },
    { name: "Priya", rollNo: 202, chemistry: 75, maths: 90, commerce: 85, physicalEducation: 94, moralScience: 88, totalMarks: 432, avgMarks: 86.4 },
    { name: "Amit", rollNo: 203, chemistry: 82, maths: 95, commerce: 88, physicalEducation: 92, moralScience: 90, totalMarks: 447, avgMarks: 89.4 },
    { name: "Neha", rollNo: 204, chemistry: 95, maths: 96, commerce: 94, physicalEducation: 99, moralScience: 99, totalMarks: 483, avgMarks: 96.6 },
    { name: "Anita", rollNo: 205, chemistry: 85, maths: 92, commerce: 89, physicalEducation: 91, moralScience: 86, totalMarks: 443, avgMarks: 88.6 }
];

const averageOfChemistry = (students) =>{
    const totalofChemistry = students.reduce((total, student) => {
        return total + student.chemistry
    },0)
    return totalofChemistry/students.length
}

console.log("Total Average of Chemistry: ", averageOfChemistry(studentsData))

const averageOfMaths = (students) =>{
    const totalofMaths = students.reduce((total, student) => {
        return total + student.maths
    },0)
    return totalofMaths/students.length
}

console.log("Total Average of Maths: ",averageOfMaths(studentsData))

const averageOfCommerce = (students) =>{
    const totalOfCommerce = students.reduce((total, student)=>{
        return total + student.commerce
    },0)
    return totalOfCommerce/students.length
}

console.log("Total Average of Commerce: ",averageOfCommerce(studentsData))