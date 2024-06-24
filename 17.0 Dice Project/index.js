var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

const img1 = document.querySelectorAll('.player_1');
const img2 = document.querySelectorAll('.player_2');

img1[0].src = "./images/dice"+randomNumber1+".png";
img2[0].src = "./images/dice"+randomNumber2+".png";

const title = document.querySelector('h1');

var new_title = "🎲 Dice Game!";

if (randomNumber1 > randomNumber2) {
    new_title = "🚩 Player 1 Wins"
} else {
    if (randomNumber1 < randomNumber2) {
        new_title = "Player 2 Wins 🚩"
    } else {
        new_title = "Draw!"
    }
}

title.textContent = new_title;