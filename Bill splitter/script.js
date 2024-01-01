function calculateTotalBill(costPerDish, numberOfPeople) {
    // Calculate the total cost of the dishes
    let totalCost = costPerDish * numberOfPeople;

    // Calculate the amount to be paid by each person
    let amountPerPerson = totalCost / numberOfPeople;

    // Create an object to store the total bill and amount per person
    let billDetails = {
        totalBill: totalCost,
        amountPerPerson: amountPerPerson
    };

    // Return the bill details object
    return billDetails;
}

// Example usage:
let costPerDish = 30; // Cost of each dish
let numberOfPeople = 5; // Number of people sharing the dishes

let billDetails = calculateTotalBill(costPerDish, numberOfPeople);
console.log("Total Bill: " + billDetails.totalBill);
console.log("Amount to be paid per person: $" + billDetails.amountPerPerson);



