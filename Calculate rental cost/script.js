function calculateRentalCost(days, carType) {
    // Define rental costs for each car type
    const economyCostPerDay = 4000;
    const midsizeCostPerDay = 10000;
    const luxuryCostPerDay = 20000;

    // Calculate total cost based on the car type and number of days rented
    let totalCost = 0;
    switch (carType) {
        case "economy":
            totalCost = days * economyCostPerDay;
            break;
        case "midsize":
            totalCost = days * midsizeCostPerDay;
            break;
        case "luxury":
            totalCost = days * luxuryCostPerDay;
            break;
        default:
            // Invalid car type
            totalCost = 0;
            console.log("Invalid car type.");
            break;
    }

    // Return the total cost
    return totalCost;
}

// Example usage:
let numberOfDays = 5; // Number of days rented
let carType = "luxury"; // Type of car: "economy", "midsize", or "luxury"

let totalCost = calculateRentalCost(numberOfDays, carType);
console.log(`Total rental cost: Rs. ${totalCost}/-`);
