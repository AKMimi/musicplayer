const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('.#title');
const cover = document.querySelector('#cover');

// Songs title
const songs = ['hey', 'summer', 'ukulele']

// keep track of d songs
let songIndex = 2;

loadSong(songs(songIndex))

// Update song details
function loadSong(song) {
    title.innerText = song
    audio.src = `music/$(song).mp3`
    cover.src = `image/$(song).jpg`
}

function playSong() {
  musicContainer.classList.add('play')
  playBtn.querySelector('i.fas').classList.remove(('fa-play'))
  playBtn.querySelector('i.fas').classList.add('fa-pause')
}

function pauseSong() {

}

// event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

