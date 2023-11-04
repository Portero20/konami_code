const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
const audioKonami = document.getElementById('konami-sound')
const resetButton = document.getElementById('reset-button');
let konamiCodePosition = 0;

document.addEventListener("keydown", (e) => {
    if (e.key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        if (konamiCodePosition === konamiCode.length) {
            activateSecret();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

resetButton.addEventListener('click', () => {

    resetSecret()

})

function activateSecret() {
    const secret = document.querySelector(".secret img");
    secret.style.display = "block";
    audioKonami.play()
    audioKonami.volume = 0.1;
    resetButton.style.display = "block";
}

function resetSecret() {

    const secret = document.querySelector(".secret img")
    secret.style.display = "none"
    resetButton.style.display = "none";

}