const body = document.querySelector(".body");
//
const playPauseButton = document.querySelector(".play-pause-button");
const backwardButton = document.querySelector(".backward");
const forwardButton = document.querySelector(".forward");
let isPlay = false;
const songs = [
  {
    artist: "Beyonce",
    songName: "Don't Hurt Yourself",
    audio: "beyonce.mp3",
    img: "lemonade.png",
  },
  {
    artist: "Dua Lipa",
    songName: "Don't Start Now",
    audio: "dontstartnow.mp3",
    img: "dontstartnow.png",
  },
];
const songData = document.querySelector(".songs-data");
let currentIndex = 0;
const songImg = document.querySelectorAll(".song-img");
let songTime = document.querySelector(".song-time");
let time = document.querySelector(".current-time");
const progress = document.querySelector(".progress");

function playAudio() {
  const audio = document.querySelector("audio");
  // audio.currentTime = 0;
  audio.play();
  isPlay = true;
  playPauseButton.classList.add("play");
  playPauseButton.classList.remove("pause");

  audio.addEventListener("timeupdate", function () {
    console.log("FFFF");
    curtime = parseInt(audio.currentTime, 10);
    progress.value = curtime;
    progress.max = audio.duration;

    const minutes = Math.floor(curtime / 60);
    const seconds = curtime % 60;

    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
    time.textContent = formattedTime;

    const allMinutes = Math.floor(progress.max / 60);
    const allSeconds = Math.floor(progress.max) % 60;

    const allFormattedTime = `${String(allMinutes).padStart(2, "0")}:${String(
      allSeconds
    ).padStart(2, "0")}`;
    songTime.textContent = allFormattedTime;
  });
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
  playAudio();
}

function nextAudio() {
  if (currentIndex !== songs.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  setAudio(currentIndex);
  playAudio();
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

  songImg.forEach((img) => {
    img.src = `./assets/img/${playNow.img}`;
  });
}

setAudio(currentIndex);

body.addEventListener("click", function (event) {
  if (event.target === playPauseButton) {
    playPauseAudio();
  } else if (event.target === backwardButton) {
    previousAudio();
  } else if (event.target === forwardButton) {
    nextAudio();
  }
});



progress.addEventListener("change", function (event) {
  const audio = document.querySelector("audio");
  audio.currentTime = event.target.value;
  progress.max = audio.duration;
});
