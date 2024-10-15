const audio = document.getElementById('background-audio');
const audioToggle = document.getElementById('audio-toggle');
const audioIcon = audioToggle.querySelector('i');

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        audioIcon.classList.remove('fa-volume-xmark');
        audioIcon.classList.add('fa-volume-high');
        localStorage.setItem('audioPlaying', 'true');
    } else {
        audio.pause();
        audioIcon.classList.remove('fa-volume-high');
        audioIcon.classList.add('fa-volume-xmark');
        localStorage.setItem('audioPlaying', 'false');
    }
    localStorage.setItem('audioTime', audio.currentTime);
}

function initAudio() {
    const audioPlaying = localStorage.getItem('audioPlaying');
    const audioTime = localStorage.getItem('audioTime');

    // Check if we are on index.html
    const isIndexPage = window.location.pathname.endsWith('index.html');

    if (isIndexPage) {
        // Start from the beginning on index.html
        audio.currentTime = 0;
        if (audioPlaying !== 'false') {
            audio.play().catch(e => console.log('Audio play failed:', e));
            audioIcon.classList.remove('fa-volume-xmark');
            audioIcon.classList.add('fa-volume-high');
        }
    } else {
        // Restore previous state for other pages
        if (audioTime) {
            audio.currentTime = parseFloat(audioTime);
        }
        
        if (audioPlaying === 'true') {
            audio.play().catch(e => console.log('Audio play failed:', e));
            audioIcon.classList.remove('fa-volume-xmark');
            audioIcon.classList.add('fa-volume-high');
        } else {
            audio.pause();
            audioIcon.classList.remove('fa-volume-high');
            audioIcon.classList.add('fa-volume-xmark');
        }
    }
}

// Initialize audio as soon as the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAudio);
} else {
    initAudio();
}

// Update audio time in localStorage
audio.addEventListener('timeupdate', () => {
    localStorage.setItem('audioTime', audio.currentTime);
});

// Save audio state before unloading the page
window.addEventListener('beforeunload', () => {
    localStorage.setItem('audioTime', audio.currentTime);
    localStorage.setItem('audioPlaying', !audio.paused);
});

// Automatically play the audio on page load for index.html
window.onload = function() {
    if (window.location.pathname.endsWith('index.html')) {
        // Start from the beginning and play
        audio.play().catch(e => console.log('Audio play failed:', e));
    }
};
