let body = document.querySelector("body");
let heart = document.querySelector(".heart");
let pinkButton = document.querySelector(".pink-button");
let blueButton = document.querySelector(".blue-button");
let greenButton = document.querySelector(".green-button");
let purpleButton = document.querySelector(".purple-button");

function pinkTheme() {
  body.classList.remove("blue");
  body.classList.remove("green");
  body.classList.remove("purple");

  heart.innerHTML = "❤️";
}

function blueTheme() {
  body.classList.remove("green");
  body.classList.remove("purple");
  body.classList.add("blue");

  heart.innerHTML = "💙";
}

function greenTheme() {
  body.classList.remove("blue");
  body.classList.remove("purple");
  body.classList.add("green");

  heart.innerHTML = "💚";
}

function purpleTheme() {
  body.classList.remove("blue");
  body.classList.remove("green");
  body.classList.add("purple");

  heart.innerHTML = "💜";
}

pinkButton.addEventListener("click", pinkTheme);
blueButton.addEventListener("click", blueTheme);
greenButton.addEventListener("click", greenTheme);
purpleButton.addEventListener("click", purpleTheme);
