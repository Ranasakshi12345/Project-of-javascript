// Sample customer cart array containing objects with unit price and quantity
const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 3 },
    { unitPrice: 8, quantity: 1 }
];

// Arrow function to calculate the total cost of items in the cart
const calculateTotalCost = cart => {
    // Using reduce() to calculate the total cost
    const totalCost = cart.reduce((accumulator, item) => {
        // Multiply unit price with quantity and add it to the accumulator
        return accumulator + (item.unitPrice * item.quantity);
    }, 0); // Initial value of accumulator is set to 0

    return totalCost;
};

// Calculate total cost of items in the cart
const totalCost = calculateTotalCost(cart);

console.log(`Total cost of items in the cart: $${totalCost}`);
