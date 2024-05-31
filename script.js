document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("changelog-popup");
    popup.style.opacity = "0";
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.opacity = "1";
    }, 100); 

    document.querySelector(".close-btn").addEventListener("click", function() {
        popup.style.opacity = "0";
        setTimeout(() => {
            popup.style.display = "none";
        }, 300);
    });

    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.opacity = "0";
            setTimeout(() => {
                popup.style.display = "none";
            }, 300);
        }
    });

});
