var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
var randomImageSource1 = "images/Dice" + randomNumber1 + ".png"; // Corrected image path
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
var randomImageSource2 = "images/Dice" + randomNumber2 + ".png"; // Corrected image path
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Determine the winner
var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    heading.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    heading.textContent = "Player 2 Wins! 🚩";
} else {
    heading.textContent = "It's a Draw!";
}
