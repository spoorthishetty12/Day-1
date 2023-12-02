/*
    6. Given the employee details of a company. Write a JavaScript function to calculate and print the following details:
    1. print the average age of the employees in the company
    2. print the details of the employee with maximum experience
*/

const employeeData = [
    { employeeName: "John Doe", age: 35, department: "HR", experience: 7 },
    { employeeName: "Jane Smith", age: 42, department: "Finance", experience: 12 },
    { employeeName: "Michael Johnson", age: 30, department: "IT", experience: 5 },
    { employeeName: "Emily Williams", age: 45, department: "Sales", experience: 15 },
    { employeeName: "David Brown", age: 38, department: "Marketing", experience: 9 }
  ];

  const averageAge = (employees) =>{
    const totalAge = employees.reduce((prev, curr)=>{
        return prev + curr.age
    },0)
    return totalAge/employees.length
}

console.log("The average age of the employees in the company:", averageAge(employeeData))

const maxExperience= (employees) =>{
    const employee = employees.reduce((prev, curr)=>{
        return prev.experience > curr.experience ? prev : curr
    })
    console.log("The details of employee with maximum experience:")
    console.log("Name:", employee.employeeName)
    console.log("Age:", employee.age)
    console.log("Department:", employee.department)
    console.log("Experience:", employee.experience)
}

maxExperience(employeeData)