const gM = document.querySelector(".galeria-modal");
const iGM = document.querySelector(".galeria-modal img");

function fecharGaleria(){
    gM.style.visibility = "hidden";
    iGM.style.transform = "scale(0)";
}

function abrirGaleria(src){
    gM.style.visibility = "visible";
    iGM.style.transform = "scale(1)";
    iGM.src = src
}

const video = document.getElementById("video");
video.addEventListener("play", handleFirstPlay, false);

let hasPlayed = true;
function handleFirstPlay(event) {
  if (!hasPlayed) {
    hasPlayed = true;

    // Remove listener so this only gets called once.
    const vid = event.target;
    vid.removeEventListener("play", handleFirstPlay);

    // Start whatever you need to do after first playback has started
  }
}