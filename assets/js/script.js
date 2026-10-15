// Facts the button can display
const facts = [
  "The main character is a mercenary named V.",
  "The game takes place in Night City.",
  "Keanu Reeves plays Johnny Silverhand.",
  "You can choose between three starting lifepaths.",
  "Players can customize V with cybernetic upgrades."
];

// Find the button and paragraph
const factButton = document.getElementById("fact-button");
const factText = document.getElementById("fact");

// Display a random fact when the button is clicked
factButton.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factText.textContent = facts[randomIndex];
});