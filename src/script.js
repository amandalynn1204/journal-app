function pinkTheme() {
  body.classList.remove("blue");
  body.classList.remove("green");
  body.classList.remove("purple");

  heart.innerHTML = "❤️";
}

function blueTheme() {
  body.classList.add("blue");
  body.classList.remove("green");
  body.classList.remove("purple");

  heart.innerHTML = "💙";
}

function greenTheme() {
  body.classList.add("green");
  body.classList.remove("blue");
  body.classList.remove("purple");

  heart.innerHTML = "💚";
}

function purpleTheme() {
  body.classList.add("purple");
  body.classList.remove("blue");
  body.classList.remove("green");

  heart.innerHTML = "💜";
}

let body = document.querySelector("body");
let heart = document.querySelector(".heart");
let pinkButton = document.querySelector(".pink-button");
let blueButton = document.querySelector(".blue-button");
let greenButton = document.querySelector(".green-button");
let purpleButton = document.querySelector(".purple-button");

pinkButton.addEventListener("click", pinkTheme);
blueButton.addEventListener("click", blueTheme);
greenButton.addEventListener("click", greenTheme);
purpleButton.addEventListener("click", purpleTheme);
