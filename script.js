const audio = document.getElementById('background-audio');
const audioToggle = document.getElementById('audio-toggle');
const audioIcon = audioToggle.querySelector('i');

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        audioIcon.classList.remove('fa-volume-xmark');
        audioIcon.classList.add('fa-volume-high');
    } else {
        audio.pause();
        audioIcon.classList.remove('fa-volume-high');
        audioIcon.classList.add('fa-volume-xmark');
    }
}

// Start playing the audio when the page loads
window.onload = () => {
    audio.play();
    audioIcon.classList.remove('fa-volume-xmark');
    audioIcon.classList.add('fa-volume-high');
};
