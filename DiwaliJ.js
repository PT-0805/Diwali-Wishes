// Display message, play sound, and start animations
function displayMessage() {
    const message = document.getElementById("message");
    const fireworkSound = document.getElementById("firework-sound");
    const shareBtn = document.getElementById("share-btn");

    message.classList.remove("hidden");
    shareBtn.classList.remove("hidden");

    // Play sound effect if supported
    fireworkSound.play().catch(error => {
        console.log("Sound playback not supported on this device:", error);
    });
}

// Function to create a continuous but limited sparkler effect in the background
function createContinuousSparkler() {
    const fireworks = document.querySelector(".fireworks");

    // Limit sparkle frequency for better mobile performance
    setInterval(() => {
        if (document.querySelectorAll('.sparkle').length < 30) { // Limit to 30 sparkles
            const sparkle = document.createElement("div");
            sparkle.classList.add("sparkle");

            // Random position for each sparkle
            sparkle.style.left = `${Math.random() * 100}vw`;
            sparkle.style.top = `${Math.random() * 100}vh`;
            fireworks.appendChild(sparkle);

            // Remove sparkle after animation
            setTimeout(() => sparkle.remove(), 1500); // Match sparkle animation duration
        }
    }, 500); // Frequency reduced for better performance on mobile
}

// Initialize continuous sparkler effect
createContinuousSparkler();

// Share functionality for mobile and desktop
function shareDiwali() {
    const text = "Happy Diwali! 🎆 Wishing you a wonderful Diwali filled with light, love, and joy!";
    const url = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: 'Diwali Wishes',
            text: text,
            url: url,
        }).catch((error) => console.log("Error sharing:", error));
    } else {
        alert("Copy and share this link: " + url);
    }
}
