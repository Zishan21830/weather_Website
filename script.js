//select the all necessary elemtent which are use in data handling
const input = document.getElementById("input_field");
const btn = document.getElementById("search_btn");
const temp = document.getElementById("main_temp");
const areaLoaction = document.getElementById("location");
const weather = document.getElementById("weather");
const feelLikes = document.getElementById("feels_like");
const clouds = document.getElementById("clouds");
const windSpeed = document.getElementById("wind_speed");
const humidity = document.getElementById("humidity");
let locationName = "Noida";
/**
 * create the account on the any free weather API website and recieve your own API_KEY.
 * some free weather API's websites are
 * 1 - OpenWeather (link - https://openweathermap.org/api)
 * 2 - weather api (link - https://www.weatherapi.com/)
 * 3 - visual crossing (link - https://www.visualcrossing.com/weather-api)
 */
const API_KEY = "88f9dde9cb7ac25fa558d6e8c7e1fb2e";

//A funtion which is used for fetch the weather data from API
let fetchWeatherData = async (locationName) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}`);
    let data  = await response.json();
    console.log(data);
    updateUI(data);
}

// update date in user interface
let updateUI = (data) => {
    temp.innerHTML = parseFloat((data.main.feels_like - 273.15).toFixed(2));
    areaLoaction.innerHTML = data.name;
    weather.innerHTML = data.weather[0].main;
    feelLikes.innerHTML = parseFloat((data.main.feels_like - 273.15).toFixed(2));
    windSpeed.innerText = data.wind.speed;
    humidity.innerHTML = data.main.humidity;
    clouds.innerHTML = data.clouds.all;
}

//call the `fetchWeatherData` for initial UI data
fetchWeatherData(locationName);

//call the `fetchWeatherData` when user search for specific location
btn.addEventListener("click",()=>{
    // take the input field value
    locationName = input.value;
    // call the `fetchWeatherData` function for the user entered location
    fetchWeatherData(locationName);
    input.style.backgroundColor = "transparent"
    input.value = "";
});
/**
 * for some basic animation on input field
 * when user click on the input button the background color of the
 * input field change into white and after user click on the search
 * btn background color of the input field change into transparent.
 */
input.addEventListener("click", ()=>{
    input.style.backgroundColor = "#fefefe"
    input.style.color = "#1e2229"
})
