/*8. Given the sales data of various products. Write a JavaScript function to calculate and print the following details:
    1. print the details of the products which have made a revenue of more than 19000.
    2. print the overall total number of units sold for the products that made a revenue of more than 15000.
*/

const salesData = [
    { product: "Product A", unitsSold: 120, revenue: 15000 },
    { product: "Product B", unitsSold: 180, revenue: 20000 },
    { product: "Product C", unitsSold: 90, revenue: 12000 },
    { product: "Product D", unitsSold: 150, revenue: 18000 },
    { product: "Product E", unitsSold: 200, revenue: 25000 }
  ];

function revenueMoreThan19000(products){
    const moreThan19000 = products.filter(ele=>ele.revenue > 19000)
    console.log("the details of the products which have made a revenue of more than 19000:")
    moreThan19000.forEach(product =>{
        console.log("product:",product.product)
        console.log("unitsSold:", product.unitsSold)
        console.log("revenue:", product.revenue)
    })
}

console.log(revenueMoreThan19000(salesData))

function revenueMoreThan15000(sales){
    const moreThan15000 = sales.filter(ele=>ele.revenue > 15000)
    const totalUnitsSold = moreThan15000.reduce((prev, curr)=>{
        return prev + curr.unitsSold
    },0)
    return totalUnitsSold;
}
console.log("the overall total number of units sold for the products that made a revenue of more than 15000:", revenueMoreThan15000(salesData))