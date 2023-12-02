/*
    5. Given the project details of a particular quarter of a company. Write a JavaScript function to calculate and print the following details:
    1. print the average team size
    2. print the total budget of the quarter
 */

    const projectDetails = [
        { projectName: "Project A", teamSize: 8, budget: 120000 },
        { projectName: "Project B", teamSize: 12, budget: 180000 },
        { projectName: "Project C", teamSize: 6, budget: 90000 },
        { projectName: "Project D", teamSize: 10, budget: 150000 },
        { projectName: "Project E", teamSize: 15, budget: 200000}
      ];

const averageTeamSize = (projects) =>{
    const totalTeamSize = projects.reduce((prev, curr)=>{
        return prev + curr.teamSize
    },0)
    return totalTeamSize/projects.length
}

console.log("Average Team Size:", averageTeamSize(projectDetails))

const totalBudget = (projects) =>{
    return projects.reduce((prev, curr)=>{
        return prev + curr.budget
    },0)
}

console.log("Total Budget of the quarter:", totalBudget(projectDetails))