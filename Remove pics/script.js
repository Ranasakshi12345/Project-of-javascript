const addToCartButtons = document.querySelectorAll(".addToCart");
const cartContainer = document.getElementById("cart");

const cartItems = new Set();

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.getAttribute("data-product-id");
    const productImageSrc = button.parentElement.querySelector("img").src;

    if (cartItems.has(productId)) {
      alert("This item is already in your cart");
      return;
    }

    cartItems.add(productId);
    const cartItem = document.createElement("div");

    const productImage = document.createElement("img");
    productImage.src = productImageSrc;
    productImage.alt = `Product ${productId}`;
    productImage.style.width = "100px"; // Adjust width as needed

    const productInfo = document.createElement("p");
    productInfo.textContent = `Product ID: ${productId}`;

    cartItem.appendChild(productImage);
    cartItem.appendChild(productInfo);

    cartContainer.appendChild(cartItem);
  });
});
