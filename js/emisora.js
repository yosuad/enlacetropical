const audioPlayer = document.getElementById("audioPlayer");
const audio = document.getElementById("audio");
const icono = document.getElementById("icono");
const loader = document.querySelector(".request-loader");



let isPlaying = false;
loader.classList.add("efecto");

audioPlayer.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    audioPlayer.classList.remove("paused");
    // Remplazar boton de Play por stop
    icono.classList.replace("fa-stop", "fa-play");
    icono.classList.add("ms-1");
    // Remplazar boton de Play por stop   
      //    AGREGAR EFECTO
      loader.classList.add("efecto");
  } else {
    //   SI ES IGUAL A PAUSE
    audio.play();
    audioPlayer.classList.add("paused");
    // Remplazar boton de stop  por Play
    icono.classList.replace("fa-play", "fa-stop");
    icono.classList.remove("ms-1");
    // Remplazar boton de stop  por Play
    loader.classList.remove("efecto");
  }
  isPlaying = !isPlaying;
});
