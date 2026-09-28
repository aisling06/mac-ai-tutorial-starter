// Grab the parts of the page we need
const lights = document.querySelectorAll(".light");
const message = document.getElementById("message");
const bestText = document.getElementById("best");
const startButton = document.getElementById("start-button");

// The game is always in one of these states:
// "idle", "lightsOn", "waiting", "result", "jumpStart"
let state = "idle";

startButton.addEventListener("click", () => {
  console.log("Start clicked! Current state:", state);
  message.textContent = "Starting soon...";
});
