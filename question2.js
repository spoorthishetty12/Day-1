/*2. Write a JavaScript function that calculates and prints the following based on the provided appData.
    1. the average of rating
    2. the total downloads
*/

const appData = [
    { appName: "App 1", rating: 4, downloads: 5000 },
    { appName: "App 2", rating: 4, downloads: 8000 },
    { appName: "App 3", rating: 5, downloads: 12000 },
    { appName: "App 4", rating: 2, downloads: 3000 },
    { appName: "App 5", rating: 5, downloads: 6000 }
  ];

const averageOfRating = (apps) =>{
    const totalRating = apps.reduce((sum, app)=>{
        return sum + app.rating
    },0)
    return totalRating/apps.length
}
console.log("The average of rating: ", averageOfRating(appData))

const totalDownloads = (apps)=>{
    return apps.reduce((sum, app) => {
        return sum + app.downloads
    },0)
}

console.log("The total Downloads: ", totalDownloads(appData))