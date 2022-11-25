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

const API_KEY = "2e0250d8cfbef9afab0dbc870f7c5385";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
const ICON_URL = "https://openweathermap.org/img/w/";
const DEFAULT_CITY = "Magura,bd";
