const body = document.querySelector(".body");
//
const playPauseButton = document.querySelector(".play-pause-button");
const backwardButton = document.querySelector(".backward");
const forwardButton = document.querySelector(".forward");
let isPlay = false;
const songs = [
  { artist: "Beyonce", songName: "Don't Hurt Yourself", audio: "beyonce.mp3" },
  {
    artist: "Dua Lipa",
    songName: "Don't Start Now",
    audio: "dontstartnow.mp3",
  },
];
const songData = document.querySelector(".songs-data");
let currentIndex = 0;

function playAudio() {
  const audio = document.querySelector("audio");
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
  playPauseButton.classList.add("play");
  playPauseButton.classList.remove("pause");
}
function pauseAudio() {
  const audio = document.querySelector("audio");
  audio.pause();
  isPlay = false;
  playPauseButton.classList.remove("play");
  playPauseButton.classList.add("pause");
}

function playPauseAudio() {
  if (isPlay) {
    pauseAudio();
  } else {
    playAudio();
  }
}

function previousAudio() {
  if (currentIndex !== 0) {
    currentIndex--;
  } else {
    currentIndex = songs.length - 1;
  }
  setAudio(currentIndex);
  playAudio()
}

function nextAudio() {
  if (currentIndex !== songs.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  setAudio(currentIndex);
  playAudio()
}

function setAudio(index) {
  let playNow = songs[index];

  const songTemplate = `
  <audio src="./assets/audio/${playNow.audio}"></audio>
    <div class="songs-artists">
      <span>${playNow.artist}</span>
    </div>
    <div class="songs-names">
    <span>${playNow.songName}</span>
    </div>
  `;

  songData.innerHTML = songTemplate;
}

setAudio(currentIndex);

body.addEventListener("click", function (event) {
  console.log(event.target);
  if (event.target === playPauseButton) {
    playPauseAudio();
  } else if (event.target === backwardButton) {
    previousAudio();
  } else if (event.target === forwardButton) {
    nextAudio();
  }
});
