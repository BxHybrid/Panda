function continueSurprise() {
    window.location.href = "Like.html"; // Change to the next surprise page
}

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
});
