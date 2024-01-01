document.addEventListener("DOMContentLoaded", function() {
    // Get the heading and button elements
    let heading = document.getElementById("heading");
    let toggleButton = document.getElementById("toggleButton");

    // Variable to track the state of the heading text
    let isOriginalText = true;

    // Function to toggle the heading text
    function toggleHeadingText() {
        if (isOriginalText) {
            heading.textContent = "PW Skills";
        } else {
            heading.textContent = "The most affordable learning platform";
        }
        // Toggle the state
        isOriginalText = !isOriginalText;
    }

    // Add click event listener to the button
    toggleButton.addEventListener("click", toggleHeadingText);
});
