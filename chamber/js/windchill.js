const currentTemp = document.querySelector("#currentTemp");
const weatherIcon = document.querySelector("#weatherIcon");
const windSpeed = document.querySelector('#windSpeed');
const weatherDesc = document.querySelector('#weatherDesc');


const url = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&appid=3349075b3198795c47ed031fb8761419`;

apiFetch(url);

async function apiFetch(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(
    0
  )}°F`;
  const imagesrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  const windSpeedValue = weatherData.wind.speed;
  weatherIcon.setAttribute("src", imagesrc);
  weatherIcon.setAttribute("alt", desc);
  windSpeed.innerHTML = (`${windSpeedValue.toFixed(1)} mph`);
  weatherDesc.innerHTML = capitalize(desc);
}


// let temp = parseFloat(document.querySelector("#temp").textContent);
let windSpeedValue = parseFloat(document.querySelector("#windSpeed").textContent);
let windChill = "";
let windChillText = "";

if (currentTemp <= 50 && windSpeedValue > 3) {
    windChill = 35.74 + (.6215 * currentTemp) - (35.75 * Math.pow(windSpeedValue, 0.16)) + (.4275 * currentTemp) * Math.pow(windSpeedValue, 0.16);
    windChill = `${Math.round(windChill)}°F`;
} else { windChill = "N/A"}

function capitalize(string) {
    return string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  }

document.querySelector("#windChill").textContent = windChill;


