
const musicData = [
    { title: "Save Your Tears", artist: "The Weeknd", cover: "cover1.jpg", duration: 180 },
    { title: "HUMBLE.", artist: "Kendrick Lamar", cover: "cover2.jpg", duration: 200 },
    { title: "SO WHAT", artist: "P!nk", cover: "cover3.jpg", duration: 220 },
];


function initializeMusicLibrary() {
    const musicLibrary = document.querySelector('.music-library');
    musicData.forEach(track => {
        const musicTrack = document.createElement('div');
        musicTrack.classList.add('music-track');
        musicTrack.innerHTML = `
            <img src="${track.cover}" alt="${track.title}">
            <p>${track.title}</p>
            <p>${track.artist}</p>
        `;
        musicLibrary.appendChild(musicTrack);
    });
}


function initializeAudioControls() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const audio = new Audio();
    let isPlaying = false;

    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        } else {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    });

    
}

function updateProgressBar() {
    const audio = document.querySelector('audio');
    const progress = document.getElementById('progress');
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + '%';
}

document.addEventListener('DOMContentLoaded', () => {
    initializeMusicLibrary();
    initializeAudioControls();
    setInterval(updateProgressBar, 500); 
});
