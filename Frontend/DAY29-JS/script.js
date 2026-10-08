const form = document.getElementById("weatherForm");

const cityInput = document.getElementById("cityInput");

const message = document.getElementById("message");

const cityName = document.getElementById("cityName");
const country = document.getElementById("country");

const weatherIcon = document.getElementById("weatherIcon");

const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const feelsLike = document.getElementById("feelsLike");

const minTemp = document.getElementById("minTemp");
const maxTemp = document.getElementById("maxTemp");

const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");

const windSpeed = document.getElementById("windSpeed");
const windDirection = document.getElementById("windDirection");

const cloudiness = document.getElementById("cloudiness");
const visibility = document.getElementById("visibility");

const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");

const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");


const API_KEY = "f4407f2df8eeaf6c9065d559f74fb894";


form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const city = cityInput.value.trim();

    if (city === "") {
        message.textContent = "Please enter a city name.";
        return;
    }


    message.textContent = "Loading weather...";


    try {

        const url =
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;


        const response = await fetch(url);


        if (!response.ok) {
            throw new Error("City not found");
        }


        const data = await response.json();


        console.log(data);


        // Location

        cityName.textContent = data.name;

        country.textContent = data.sys.country;


        // Main weather

        temperature.textContent =
            `${Math.round(data.main.temp)}°C`;

        description.textContent =
            data.weather[0].description;

        feelsLike.textContent =
            Math.round(data.main.feels_like);


        // Temperature

        minTemp.textContent =
            `${Math.round(data.main.temp_min)}°C`;

        maxTemp.textContent =
            `${Math.round(data.main.temp_max)}°C`;


        // Humidity & pressure

        humidity.textContent =
            `${data.main.humidity}%`;

        pressure.textContent =
            `${data.main.pressure} hPa`;


        // Wind

        windSpeed.textContent =
            `${data.wind.speed} m/s`;

        windDirection.textContent =
            `${data.wind.deg}°`;


        // Cloud & visibility

        cloudiness.textContent =
            `${data.clouds.all}%`;

        visibility.textContent =
            `${(data.visibility / 1000).toFixed(1)} km`;


        // Coordinates

        latitude.textContent =
            data.coord.lat;

        longitude.textContent =
            data.coord.lon;


        // Weather icon

        const iconCode = data.weather[0].icon;

        weatherIcon.src =
            `https://openweathermap.org/img/wn/${iconCode}@2x.png`;


        // Sunrise

        sunrise.textContent =
            new Date(data.sys.sunrise * 1000)
                .toLocaleTimeString();


        // Sunset

        sunset.textContent =
            new Date(data.sys.sunset * 1000)
                .toLocaleTimeString();


        message.textContent = "";


    } catch (error) {

        console.error(error);

        message.textContent =
            "Unable to find weather for this city.";

    }

});