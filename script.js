const scoreSpan = document.getElementById("score");
const attemptsSpan = document.getElementById("attempts");
const gameDiv = document.getElementById("game");
const popup = document.getElementById("win-popup");
const restartBtn = document.getElementById("restart")

let score = 0;
let attempts = 0
const numberOfPots = 7;
const beeIndex = Math.floor(Math.random() * numberOfPots);

restartBtn.addEventListener("click", () => {
  location.reload();
});

for (let i = 0; i < numberOfPots; i++) {
  const pot = document.createElement('div');
  pot.classList.add('bee-pot');
  pot.textContent = '🍯';
  pot.dataset.index = i;

  pot.addEventListener('click', function onClick() {
    if (pot.dataset.clicked === "true") return;
    pot.dataset.clicked = "true";
    
    attempts++;
    attemptsSpan.textContent = "Versuche: " + attempts;

    if (i === beeIndex) {
      pot.textContent = '🐝';
      pot.classList.add('found');

      //score++;
      //scoreSpan.textContent = "Punkte: " + score;
    
      popup.classList.add('visible');

      const pots = document.querySelectorAll(".bee-pot");
      pots.forEach(p => p.removeEventListener("click", onClick));
    } else {
      pot.textContent = '❌';
      pot.style.background = "#ffcc00";
    }
  });

  gameDiv.appendChild(pot);
}