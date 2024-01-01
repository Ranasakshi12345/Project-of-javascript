// Arrow function to calculate percentage discount
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    // Calculate the discount percentage
    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount / originalPrice) * 100;
    // Round off the discount percentage to two decimal places
    return discountPercentage.toFixed(2);
};

// Example usage:
const originalPrice = 200; // Replace this with the original price of the product
const discountedPrice = 50; // Replace this with the discounted price of the product

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`Discount Percentage: ${discountPercentage}%`);
