const API_KEY = "241001bf13976dd3ddf8b8d9f247255e";
const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
  );
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObjg = {
    latitude: latitude,
    longitude: longitude,
  };
  saveCoords(coordsObjg);
  getWeather(latitude, longitude);
}
function handleGeoError() {
  console.log("Can't access geo location");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
  const loadedCordsd = localStorage.getItem(COORDS);

  if (loadedCordsd === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCordsd);
    getWeather(parseCoords.latitude, parseCoords.longitude);
    console.log(parseCoords);
  }
}
function init() {
  loadCoords();
}

init();
