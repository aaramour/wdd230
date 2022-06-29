const currentTemp = document.querySelector("#currentTemp");
const weatherIcon = document.querySelector("#weatherIcon");
const windSpeed = document.querySelector('#windSpeed');
const weatherDesc = document.querySelector('#weatherDesc');


const url = `https://api.openweathermap.org/data/2.5/weather?q=
Inglis&units=Imperial&appid=3349075b3198795c47ed031fb8761419`;

apiFetch(url);

async function apiFetch(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  const temp = weatherData.main.temp;
  currentTemp.innerHTML = `${temp.toFixed(
    0
  )}°F`;
  const imagesrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  const windSpeedValue = weatherData.wind.speed;
  weatherIcon.setAttribute("src", imagesrc);
  weatherIcon.setAttribute("alt", desc);
  windSpeed.innerHTML = (`${windSpeedValue.toFixed(1)} mph`);
  weatherDesc.innerHTML = capitalize(desc);
  let windChill = windChiller(temp, windSpeedValue);
  document.querySelector("#windChill").textContent = windChill;
}

function windChiller(temp, speed) {
  if (temp <= 50 && speed > 3) {
      windChill = 35.74 + (.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (.4275 * temp) * Math.pow(speed, 0.16);
      windChill = `${windChill.toFixed(1)}°F`;
      return windChill;
  } else { return windChill = "N/A"}
}

function capitalize(string) {
    return string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  }




