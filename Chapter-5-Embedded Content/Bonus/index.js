function playAudio(filename) {
  var audio = new Audio(filename);
  var volume = document.getElementById("volume-slider").value / 100;
  audio.volume = volume;
  audio.play();
}

function searchAudio() {
  var searchInput = document.getElementById("search-input").value.toLowerCase();
  var audioButtons = document.querySelectorAll(".audio-button");

  audioButtons.forEach(function(button) {
    var buttonText = button.innerText.toLowerCase();
    if (buttonText.includes(searchInput)) {
      button.style.display = "inline-block";
    } else {
      button.style.display = "none";
    }
  });
}

function updateVolume() {
  var volume = document.getElementById("volume-slider").value;
  document.getElementById("volume-label").innerText = "Volume: " + volume + "%";
}

