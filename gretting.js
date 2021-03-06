const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
  event.preventDefault();
  const curVal = input.value;
  paintGreeting(curVal);
  saveName(curVal);
}

function showInput() {
  form.classList.add(SHOWING_CN);
  greeting.classList.remove(SHOWING_CN);

  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    showInput();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
