async function fetchData(query){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=50d99f6178ee7c1bef864146a9cfefe2&units=metric`, {mode: 'cors'});
    const data = await response.json();
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
    fetchData(query);
    // form.reset();
})

function displayWeather(_city_, _country_, _temp_, _feelslike_, _humidity_, _weathertitle_, _weatherdesc_){

    if(document.querySelector('.weather-container')){
        document.querySelector('.weather-container').remove();
    }

    const weatherDiv = document.createElement('div');
    weatherDiv.classList.add('weather-container');

    const location = document.createElement('h1');
    location.classList.add('city-name');
    location.textContent = `${_city_}, ${_country_}`;
    weatherDiv.appendChild(location);

    const currentTemp = document.createElement('h2');
    currentTemp.classList.add('current-temp');
    currentTemp.textContent = `Current temp: ${_temp_}°C`;
    weatherDiv.appendChild(currentTemp);

    const feelsLike = document.createElement('h3');
    feelsLike.classList.add('feels-like');
    feelsLike.textContent = `Feels like: ${_feelslike_}°C`;
    weatherDiv.appendChild(feelsLike);

    const humidity = document.createElement('h3');
    humidity.classList.add('humidity');
    humidity.textContent = `Humidity: ${_humidity_}%`;
    weatherDiv.appendChild(humidity);

    const weatherTitle = document.createElement('h3');
    weatherTitle.classList.add('weather-title');
    weatherTitle.textContent = `${_weathertitle_}`;
    weatherDiv.appendChild(weatherTitle);

    const weatherDesc = document.createElement('h3');
    weatherDesc.classList.add('weather-desc');
    weatherDesc.textContent = `${_weatherdesc_}`;
    weatherDiv.appendChild(weatherDesc);

    document.querySelector('#main-container').appendChild(weatherDiv);
}
