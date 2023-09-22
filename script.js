// Obtén una referencia al elemento de audio y al botón
var audio = document.getElementById("miAudio");
var botonReproducir = document.getElementById("botonReproducir");

// Agrega un evento click al botón
botonReproducir.addEventListener("click", function() {
  if (audio.paused) {
    // Si el audio está pausado, reproducelo
    audio.play();
    botonReproducir.textContent = "Pausar";
  } else {
    // Si el audio está reproduciéndose, páusalo
    audio.pause();
    botonReproducir.textContent = "Reproducir";
  }
});