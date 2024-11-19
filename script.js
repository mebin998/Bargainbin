// script.js

document.addEventListener("DOMContentLoaded", () => {
    const seeMoreBtn = document.getElementById("see-more");
    let productCount = 20;

    seeMoreBtn.addEventListener("click", () => {
        productCount += 10;
        // Simulate loading more products
        alert(`Loading more products... Total: ${productCount}`);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const seeMoreBtn = document.getElementById("see-more");
    const cartCountElement = document.getElementById("cart-count"); // Get cart count display
    let cartCount = 0;
    

    // Event listener for the "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            cartCount += 1; // Increment cart count
            cartCountElement.textContent = `(${cartCount})`; // Update cart count in header
            alert(cartCount + " items successfully added to your cart!");
        });
    });

    // Event listener for the "See More" button
    seeMoreBtn.addEventListener("click", () => {
        alert("Loading more products...");
    });
});



function searchProducts() {
    // Get the value from the search bar
    const searchTerm = document.getElementById("searchBar").value.trim();

    // Check if search term is empty
    if (searchTerm === "") {
        alert("Please enter a product to search for.");
        return;
    }

    // Display the search term in an alert (for testing purposes)
    alert(`Searching for: ${searchTerm}`);

    // Optionally, redirect to a search results page
    // window.location.href = `/search?query=${encodeURIComponent(searchTerm)}`;
}
