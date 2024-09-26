const getWeather = async (cityName) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=b4c426c91009e3429c4af53c61fd6e9c&q=${cityName}&units=metric`);
    let res = await req.json();
    console.log(res);
    ui(res);
};

const handleLocation = async (lat, lon) => { // Added lat and lon parameters
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`); // Added units=metric
    let res = await req.json();
    console.log(res);
    ui(res);
}

const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        console.log(position);
        handleLocation(lat, lon); // Pass lat and lon to handleLocation

    }, (error) => {
        console.error("Error getting location: ", error); // Added error handling
    });
}

const ui = (data) => {
    let cityName = data.name;
    let temperature = data.main.temp;
    let condition = data.weather[0].main;
    let humidity = data.main.humidity;
    let windSpeed = data.wind.speed;

    // Update the inner HTML correctly
    document.getElementById("box").innerHTML = `
        <div class="weather-icon">🌤️</div>
        <div id="temperature" class="temperature">Temperature: ${Math.round(temperature)}°C</div>
        <div id="city-name" class="city-name">City: ${cityName}</div>
        <div id="condition" class="condition">Condition: ${condition}</div>
        <div class="weather-details">
            <div id="humidity">Humidity: ${humidity}%</div>
            <div id="wind-speed">Wind Speed: ${windSpeed} km/h</div>
        </div>`;

    document.getElementById("weatherApp").style.animation = "fadeInUp 1s forwards";
};

const handleSubmit = (e) => {
    e.preventDefault();
    let cityName = document.getElementById("cityname").value;

    getWeather(cityName);

};

document.getElementById("form").addEventListener("submit", handleSubmit);

// Automatically get location on page load
getLocation();
