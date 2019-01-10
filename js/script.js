function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const pad = document.querySelector(`.pad[data-key="${e.keyCode}"`);
    if (!audio) return; // stop the function

    audio.currentTime = 0; // allows sound to be played over and over again

    audio.play();
    pad.classList.add("playing");
}


function removeTransition(e) {

    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

const pads = document.querySelectorAll(".pad");

pads.forEach(pad => {
    pad.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playSound);