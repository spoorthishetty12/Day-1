/*
9. Given the customer details of a state. Write a JavaScript function to calculate and print the following details:
    1. Print the total number of purchases made from city “Z”.
    2. Calculate and print the average age of the customers in the state.
    3. Print the total number of purchases made from city “X” and “Y”.
    4. Calculate and print the average age of customers residing in city “X” and “Y”.
*/

const customerData = [
    { customerName: "Eva", age: 31, address: "789 Lane", city: "X", totalPurchases: 7 },
    { customerName: "Frank", age: 29, address: "456 Street", city: "Z", totalPurchases: 8 },
    { customerName: "Grace", age: 38, address: "123 Avenue", city: "Y", totalPurchases: 12 },
    { customerName: "Henry", age: 35, address: "222 Road", city: "X", totalPurchases: 6 },
    { customerName: "Isabel", age: 42, address: "111 Boulevard", city: "Y", totalPurchases: 10 },
    { customerName: "Jack", age: 33, address: "333 Drive", city: "Z", totalPurchases: 10 },
  ];

const purchasesOfZ = (customers) =>{
    const customersInZ = customers.filter(customer=>customer.city == "Z")
    const purchases = customersInZ.reduce((prev, curr)=>{
        return prev + curr.totalPurchases
    },0)
    return purchases
}
console.log("the total number of purchases made from city Z:", purchasesOfZ(customerData))

const averageAgeOfCustomers = (customers) =>{
    const totalAge = customers.reduce((prev, curr)=>{
        return prev + curr.age
    }, 0)
    const average = totalAge/customers.length
    return average.toFixed(2)
}

console.log("the average age of the customers in the state", averageAgeOfCustomers(customerData))

const totalPurchasesOfXandY = (customers) => {
    const customersOfXandY = customers.filter(customer => customer.city == "X" || customer.city == "Y")
    const total = customersOfXandY.reduce((prev, curr)=>{
        return prev + curr.totalPurchases
    },0)
    return total
}
console.log("the total number of purchases made from city X and Y", totalPurchasesOfXandY(customerData))

const averageAgeOfXandY = (customers) =>{
    const customersOfXandY = customers.filter(customer => customer.city == "X" || customer.city == "Y")
    const totalAge = customersOfXandY.reduce((prev, curr)=>{
        return prev + curr.age
    },0)
    return totalAge/customersOfXandY.length
}

console.log("the average age of customers residing in city X and Y", averageAgeOfCustomers(customerData))


