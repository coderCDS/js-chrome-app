const body = document.querySelector("body");

const IMG_NUMBER = 5;

function handleImgLoad() {
  console.log("finish load");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber}.jpg`;
  //image.addEventListener("loadend", handleImgLoad);
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER + 1);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
