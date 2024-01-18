function playMusic() {
  var audio = document.getElementById("audio");
  audio.play();

  var enjoy = document.querySelector("#enjoy");
  enjoy.classList.add("fade");
  
  var poster = document.getElementById("poster");
  poster.classList.add("changed");

  setTimeout(function () {
    enjoy.innerHTML = "Enjoy the Celestial Journey";
    enjoy.classList.remove("fade");
    poster.src = "https://wallpapercave.com/wp/wp1817973.jpg";
    poster.classList.remove("changed");
  }, 1500);
}