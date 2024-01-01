// // Function to fix the cart bug by doubling the quantity of each item
// function fixCartBug(cart) {
//     // Create a new array to store the corrected quantities
//     let correctedCart = [];
    
//     // Iterate through the original cart array and double the quantity of each item
//     for (let i = 0; i < cart.length; i++) {
//         let correctedQuantity = cart[i] * 2;
//         correctedCart.push(correctedQuantity);
//     }
    
//     // Return the corrected cart array
//     return correctedCart;
// }

// // Example usage:
// let cart = [1, 2, 3, 4]; // Sample cart array with quantities of items
// let correctedCart = fixCartBug(cart);
// console.log("Corrected Cart:", correctedCart); // Output: [2, 4, 6, 8]





document.addEventListener("DOMContentLoaded", function() {
    // Sample cart array with quantities of items (bugged)
    let cart = [1, 2, 3, 4];

    // Function to fix the bug by doubling the quantity of each item in the cart
    function fixCartBug(cart) {
        for (let i = 0; i < cart.length; i++) {
            cart[i] = cart[i] * 2;
        }
        return cart;
    }

    // Fix the cart bug
    let fixedCart = fixCartBug(cart);

    // Display fixed cart items in the HTML
    let cartItemsElement = document.getElementById("cart-items");
    fixedCart.forEach(quantity => {
        let listItem = document.createElement("button");
        listItem.textContent = `Quantity: ${quantity}`;
        cartItemsElement.appendChild(listItem);
    });
});

