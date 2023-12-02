/*
4. Write a JavaScript function to calculate and print the following details:
    1. Print the app name, downloads, category and rating of the app with the highest rating.
    2. Print the average user age.
    3. Print the details of medicine app which has more than 10000 downloads.
*/

const appsData = [
    { appName: "App 1", rating: 4.2, minUserAge: 12, downloads: 4000, category: "games" },
    { appName: "App 2", rating: 4.5, minUserAge: 18, downloads: 9000, category: "education" },
    { appName: "App 3", rating: 4.7, minUserAge: 10, downloads: 11000, category: "medicine" },
    { appName: "App 4", rating: 3.1, minUserAge: 18, downloads: 4000, category: "medicine" },
    { appName: "App 5", rating: 4.3, minUserAge: 18, downloads: 7000, category: "fitness" }
  ];

function highestRatingApp(apps){
    const highRateApp = apps.reduce((prev, curr)=>{
        return curr.rating > prev.rating ? curr : prev
    })
    console.log("Highest rating app: ")
    console.log("App name: ",highRateApp.appName)
    console.log("Rating: ", highRateApp.rating)
    console.log("MinUserAge: ", highRateApp.minUserAge)
    console.log("downloads: ", highRateApp.downloads)
    console.log("category: ", highRateApp.category)
}

highestRatingApp(appsData)

function averageUserAge(apps){
    const totalAge = apps.reduce((prev, curr)=>{
        return prev + curr.minUserAge
    },0)
    return totalAge/apps.length
}

console.log("The average User age", averageUserAge(appsData))

function medicineAppOver10000(apps){
    const over10000 = apps.filter(ele => ele.downloads > 10000)
    over10000.filter(ele =>{
        console.log("Details of medicine app over 10000 downloads")
        console.log("App name: ", ele.appName)
        console.log("Rating: ", ele.rating)
        console.log("MinUserAge: ", ele.minUserAge)
        console.log("downloads: ", ele.downloads)
        console.log("category: ", ele.category)
    })
}

medicineAppOver10000(appsData)