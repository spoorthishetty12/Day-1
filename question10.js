/*
10. Given the employee details of a company. Write a JavaScript function to calculate and print the following details:
    1. Print the total number of projects in progress by employees from the "Marketing" department.
    2. Print the total number of projects completed by employees from the "Marketing" and "Sales" departments.
    3. Calculate and print the average age of employees working in the "Sales" department.
*/

const employeeData = [
    { employeeName: "Alex", age: 28, department: "Development", projectsCompleted: 5, projectsInProgress: 3 },
    { employeeName: "Beth", age: 35, department: "Marketing", projectsCompleted: 8, projectsInProgress: 5 },
    { employeeName: "Charlie", age: 40, department: "Sales", projectsCompleted: 12, projectsInProgress: 4 },
    { employeeName: "David", age: 32, department: "Development", projectsCompleted: 6, projectsInProgress: 13 },
    { employeeName: "Emily", age: 45, department: "Sales", projectsCompleted: 10, projectsInProgress: 3 },
    { employeeName: "Frank", age: 37, department: "Marketing", projectsCompleted: 10, projectsInProgress: 5 },
  ];

const projectsInProgressFromMarketing = (employees) =>{
    const marketingEmployees= employees.filter(employee => employee.department == "Marketing")
    const totalProjects = marketingEmployees.reduce((prev, curr)=>{
        return prev + curr.projectsInProgress
    },0)
    return totalProjects
}

console.log("the total number of projects in progress by employees from the Marketing department", projectsInProgressFromMarketing(employeeData))

const projectscompletedFromMarketingAndSales = (employees) =>{
    const marketingAndSalesEmployees= employees.filter(employee => employee.department == "Marketing" || employee.department =="Sales" )
    const totalProjects = marketingAndSalesEmployees.reduce((prev, curr)=>{
        return prev + curr.projectsCompleted
    },0)
    return totalProjects
}

console.log("the total number of projects completed by employees from the Marketing and Sales departments:", projectscompletedFromMarketingAndSales(employeeData))

const averageAgeSales = (employees) =>{
    const salesEmployees= employees.filter(employee => employee.department == "Sales")
    const totalAge = salesEmployees.reduce((prev, curr)=>{
        return prev + curr.age
    },0)
    return totalAge/salesEmployees.length
}

console.log("the average age of employees working in the Sales department", averageAgeSales(employeeData))