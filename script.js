//select the all necessary elemtent which are use in data handling
const input = document.getElementById("input_field");
const btn = document.getElementById("search_btn");
const temp = document.getElementById("main_temp");
const areaLoaction = document.getElementById("location");
const weather = document.getElementById("weather");
const img = document.getElementById("img");
const feelLikes = document.getElementById("feels_like");
const visibility = document.getElementById("visibility");
const pricipitation = document.getElementById("pricipitation");
const humidity = document.getElementById("humidity");
let locationName = "Noida";
/**
 * create the account on the any free weather API website and recieve your own API_KEY.
 * some free weather API's websites are
 * 1 - OpenWeather (link - https://openweathermap.org/api)
 * 2 - weather api (link - https://www.weatherapi.com/)
 * 3 - visual crossing (link - https://www.visualcrossing.com/weather-api)
 */
const API_KEY = "a192158e7d9d453cb5912522240206";

//A funtion which is used for fetch the weather data from API
let fetchWeatherData = async (locationName) => {
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${locationName}&aqi=no`);
    let data  = await response.json();
    updateUI(data);
}

// update date in user interface
let updateUI = (data) => {
    temp.innerHTML = data.current.feelslike_c;
    areaLoaction.innerHTML = data.location.name;
    weather.innerHTML = data.current.condition.text;
    img.src = data.current.condition.icon;
    feelLikes.innerHTML = data.current.feelslike_c;
    pricipitation.innerText = data.current.precip_in;
    humidity.innerHTML = data.current.humidity;
    visibility.innerHTML = data.current.vis_km;
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