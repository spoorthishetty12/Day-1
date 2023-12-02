/*7. Given the customer details of a state. Write a JavaScript function to calculate and print the following details:
    1. print the total number of purchases made from city “A”.
    2. print the average age of the customers of the state.
    3. print the total number of purchases made from city “D” and “C”.
    4. print the average age of customers of city “D”.*/

    const customerData = [
        { customerName: "Alice", age: 28, address: "123 Street", city: "A", totalPurchases: 5 },
        { customerName: "Bob", age: 35, address: "456 Avenue", city: "D", totalPurchases: 8 },
        { customerName: "Charlie", age: 40, address: "789 Road", city: "C", totalPurchases: 12 },
        { customerName: "Daisy", age: 32, address: "111 Lane", city: "D", totalPurchases: 6 },
        { customerName: "Emily", age: 45, address: "222 Boulevard", city: "A", totalPurchases: 10 },
          { customerName: "Charmie", age: 37, address: "113 Lane", city: "D", totalPurchases: 10 },
      ];

function purchaseOfA(customers){
    const customer = customers.filter(ele => ele.city == "A")
    return customer.length
}

console.log("the total number of purchases made from city A:", purchaseOfA(customerData))

function averageAgeOfState(customers){
    const totalAge = customers.reduce((prev, curr)=>{
        return prev + curr.age
    }, 0)
    const average = totalAge/customers.length
    return average.toFixed(2)
}

console.log("the average age of the customers of the state:", averageAgeOfState(customerData))

function purchaseOfDandC(customers){
    const customer = customers.filter(ele => ele.city == "D" || ele.city == "C")
    return customer.length
}

console.log("the total number of purchases made from city D and C:",purchaseOfDandC(customerData))

function averageAgeOfD(customers){
    const customer = customers.filter(ele => ele.city == "D")
    const totalAge = customer.reduce((prev, curr)=>{
        return prev + curr.age
    },0)
    return (totalAge/customer.length).toFixed(2)
}
console.log("the average age of customers of city D:", averageAgeOfD(customerData))