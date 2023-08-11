function pinkTheme() {
  body.classList.remove("blue");
  body.classList.remove("yellow");
  body.classList.remove("purple");

  heart.innerHTML = "❤️";
}

function blueTheme() {
  body.classList.add("blue");
  body.classList.remove("yellow");
  body.classList.remove("purple");

  heart.innerHTML = "💙";
}

function yellowTheme() {
  body.classList.add("yellow");
  body.classList.remove("blue");
  body.classList.remove("purple");

  heart.innerHTML = "🧡";
}

function purpleTheme() {
  body.classList.add("purple");
  body.classList.remove("blue");
  body.classList.remove("yellow");

  heart.innerHTML = "💜";
}

let body = document.querySelector("body");
let heart = document.querySelector(".heart");
let pinkButton = document.querySelector(".pink-button");
let blueButton = document.querySelector(".blue-button");
let yellowButton = document.querySelector(".yellow-button");
let purpleButton = document.querySelector(".purple-button");

pinkButton.addEventListener("click", pinkTheme);
blueButton.addEventListener("click", blueTheme);
yellowButton.addEventListener("click", yellowTheme);
purpleButton.addEventListener("click", purpleTheme);
