// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

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
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;
  const imagesrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  weatherIcon.setAttribute("src", imagesrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.innerHTML = desc;
}
