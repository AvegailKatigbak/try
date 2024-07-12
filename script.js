// script.js

document.addEventListener("DOMContentLoaded", function() {
    const toggleMenu = document.getElementById("toggleMenu");
    const navLinks = document.querySelector(".nav-links");

    toggleMenu.addEventListener("click", function() {
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            console.log("Menu hidden");
        } else {
            navLinks.classList.add("active");
            console.log("Menu shown");
        }
    });
});




