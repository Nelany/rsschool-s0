const body = document.querySelector('.body');
const audio = document.querySelector('audio');
const playPauseButton = document.querySelector('.play-pause-button');
let isPlay = false;

function playAudio() {
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
  playPauseButton.classList.add('play');
  playPauseButton.classList.remove('pause');
}
function pauseAudio() {
  audio.pause();
  isPlay = false;
  playPauseButton.classList.remove('play');
  playPauseButton.classList.add('pause');
}

function playPauseAudio() {
if (isPlay) {
  pauseAudio()
} else {
  playAudio()
}
}

body.addEventListener('click', function(event) {
  if (event.target = playPauseButton) {
    playPauseAudio();
  }
});