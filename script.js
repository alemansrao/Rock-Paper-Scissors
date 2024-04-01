// Initialize the cart count
let totalItemsInCart = 1;

// Function to add items to the cart
function addToCart(items) {
  totalItemsInCart += items;
  updateCartDisplay();
}

// Function to reset the cart
function resetCart() {
  totalItemsInCart = 0;
  updateCartDisplay();
}

// Update the cart display in the DOM
function updateCartDisplay() {
  const displayItemsElement = document.getElementById("display");
  displayItemsElement.textContent = totalItemsInCart;
}
