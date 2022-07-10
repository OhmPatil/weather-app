/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
async function fetchData(query){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=50d99f6178ee7c1bef864146a9cfefe2&units=metric`, {mode: 'cors'});
    const data = await response.json();
    console.log(data);
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = form.querySelector('input').value;
    fetchData(query);
    // form.reset();
})

function displayWeather(){
    const weatherDiv = document.createElement('div');
    weatherDiv.classList.add('weather-container');

    const cityName = document.createElement('h1');
    cityName.classList.add('city-name');
    cityName.textContent = `Vadodara`;
    weatherDiv.appendChild(cityName);

    document.querySelector('#main-container').appendChild(weatherDiv);
}


displayWeather();
/******/ })()
;