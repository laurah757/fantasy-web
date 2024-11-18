function toggleAudio() {
  const audio = document.getElementById("fire-audio");
  if (audio.paused) {
    audio.play();
  }
  else {
    audio.pause();
  }
}