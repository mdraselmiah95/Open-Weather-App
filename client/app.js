const condition = document.getElementById("condition");
const city = document.getElementById("city");
const country = document.getElementById("country");
const mainText = document.getElementById("main");
const description = document.getElementById("description");
const temp = document.getElementById("temp");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");

const cityInput = document.getElementById("city-input");
const historyElm = document.getElementById("history");
const masterHistory = document.getElementById("master-history");

// Important KEYS and URL 🥈

const API_KEY = "00648c3df9cb0d2748fb5dbdaa57cfae";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
const ICON_URL = "http://openweathermap.org/img/wn/";
const DEFAULT_CITY = "khulna,bd";

//https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=00648c3df9cb0d2748fb5dbdaa57cfae
//http://openweathermap.org/img/wn/10d@2x.png

window.onload = function () {
  navigator.geolocation.getCurrentPosition(
    (success) => {
      getWeatherData(null, success.coords);
    },
    (error) => {
      getWeatherData(DEFAULT_CITY);
    }
  );
};

function getWeatherData(city = DEFAULT_CITY, coords) {
  let url = BASE_URL;
  city === null
    ? (url = `${url}&lat=${coords.latitude}&lon=${coords.longitude}`)
    : (url = `${url}&q=${city}`);

  axios
    .get(url)
    .then(({ data }) => {
      let weather = {
        icon: data.weather[0].icon,
        name: data.name,
        country: data.sys.country,
        main: data.weather[0].main,
        description: data.weather[0].description,
        temp: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      };
    })
    .catch((error) => {
      console.log(error);
    });
}