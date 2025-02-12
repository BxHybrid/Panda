document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");
    const volumeSlider = document.getElementById("volume-slider");

    // Set initial volume
    audio.volume = 0.5;

    // Try to play automatically
    audio.play().catch(() => {
        console.log("Autoplay blocked, waiting for user interaction.");
    });

    // Volume Control
    volumeSlider.addEventListener("input", function () {
        audio.volume = this.value;
    });

    // Fallback: Play on first user interaction if autoplay is blocked
    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        }
    });

    // Confetti Effect
    function createConfettiPiece() {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // Randomize properties
        confetti.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        confetti.style.animationDuration = 2 + Math.random() * 3 + "s"; // Random fall speed
        confetti.style.backgroundColor = getRandomColor(); // Random color

        document.body.appendChild(confetti);

        // Remove confetti after it falls
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    function getRandomColor() {
        const colors = ["red", "blue", "yellow", "green", "purple", "orange", "pink"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Continuously generate confetti
    setInterval(createConfettiPiece, 200);
});
