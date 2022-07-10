async function getWeather(query){
    console.log('fetching....');
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=50d99f6178ee7c1bef864146a9cfefe2&units=metric`, {mode: 'cors'});
    const data = await response.json();
    console.log(data);
    const city = data.name;
    const country = data.sys.country;
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;
    const weatherTitle = data.weather[0].main;
    const weatherDesc = data.weather[0].description;

    displayWeather(city, country, temp, feelsLike, humidity, weatherTitle, weatherDesc);
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = form.querySelector('input').value;
    getWeather(query);
    form.reset();
})

function displayWeather(_city_, _country_, _temp_, _feelslike_, _humidity_, _weathertitle_, _weatherdesc_){

    if(document.querySelector('.weather-container')){
        document.querySelector('.weather-container').remove();
    }

    const weatherDiv = document.createElement('div');
    weatherDiv.classList.add('weather-container');

    const location = document.createElement('h1');
    location.classList.add('location');
    location.textContent = `${_city_}, ${_country_}`;
    weatherDiv.appendChild(location);

    const currentTemp = document.createElement('h2');
    currentTemp.classList.add('current-temp');
    currentTemp.textContent = `${_temp_}°C`;
    weatherDiv.appendChild(currentTemp);

    const feelsLike = document.createElement('p');
    feelsLike.classList.add('feels-like');
    feelsLike.textContent = `Feels like: ${_feelslike_}°C`;
    weatherDiv.appendChild(feelsLike);

    const humidity = document.createElement('p');
    humidity.classList.add('humidity');
    humidity.textContent = `Humidity: ${_humidity_}%`;
    weatherDiv.appendChild(humidity);

    const weather = document.createElement('p');
    weather.classList.add('weather');
    weather.textContent = `${_weathertitle_} | ${_weatherdesc_}`;
    weatherDiv.appendChild(weather);

    document.querySelector('#main-container').appendChild(weatherDiv);
}

// displayWeather('London', 'UK', '10', '10', '10', 'Sunny', 'Sunny');