function continueSurprise() {
    window.location.href = "AboutPanda.html"; // Change to the next surprise page
}

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");
    const volumeSlider = document.getElementById("volume-slider");

    // Set initial volume
    audio.volume = 0.5;

    // Play music on user interaction
    function playAudio() {
        if (audio.paused) {
            audio.play().catch(error => console.log("Playback error:", error));
        }
    }

    // Wait for a user interaction before playing the audio
    document.body.addEventListener("click", playAudio, { once: true });

    // Volume Control
    volumeSlider.addEventListener("input", function () {
        audio.volume = this.value;
    });
});
