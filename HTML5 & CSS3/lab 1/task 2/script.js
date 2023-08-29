var trackTitle = document.querySelector("#title");
var track = document.querySelector("#track");
var thumbnail = document.querySelector(".thumb");
var tracks = document.querySelectorAll(".playlist button");
var volumeControl = document.getElementById("volume");
var timelineControl = document.getElementById("timeline");

function playSong(src, title, thumb, e) {
  timelineControl.value = "0";
  var volumeValue = parseFloat(volumeControl.value);

  tracks.forEach((track) => {
    track.className = "";
  });

  e.target.className = "active";
  trackTitle.innerText = title;

  thumb ? (thumbnail.src = thumb) : (thumbnail.src = "./img/placeholder.jpg");

  track.src = src;
  track.volume = volumeValue;
  track.play();
}

function resumeTrack() {
  track.play();
}

function pauseTrack() {
  track.pause();
}

function stopTrack() {
  track.load();
  track.pause();
  timelineControl.value = "0";
}

volumeControl.addEventListener("input", () => {
  const volumeValue = parseFloat(volumeControl.value);
  track.volume = volumeValue;
});

function updateTimeline() {
  const newTime = (timelineControl.value / 100) * track.duration;
  track.currentTime = newTime;
}

timelineControl.addEventListener("input", updateTimeline);

track.addEventListener("timeupdate", () => {
  const currentTime = (track.currentTime / track.duration) * 100;
  if (!currentTime) {
    timelineControl.value = "0";
  } else {
    timelineControl.value = currentTime;
  }
});
