document.addEventListener("DOMContentLoaded", function() {
    // Show the changelog popup with fade in animation
    const popup = document.getElementById("changelog-popup");
    popup.style.opacity = "0"; // Set initial opacity to 0
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.opacity = "1";
    }, 100); // Delay before fading in

    // Close the popup with fade out animation when clicking on the close button
    document.querySelector(".close-btn").addEventListener("click", function() {
        popup.style.opacity = "0"; // Set opacity to 0 for fade out
        setTimeout(() => {
            popup.style.display = "none";
        }, 300); // Adjust the duration of the animation (in milliseconds) to match your CSS transition duration
    });

    // Close the popup with fade out animation when clicking outside of the popup content
    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.opacity = "0"; // Set opacity to 0 for fade out
            setTimeout(() => {
                popup.style.display = "none";
            }, 300); // Adjust the duration of the animation (in milliseconds) to match your CSS transition duration
        }
    });

    // Purchase button event listener remains the same
});

