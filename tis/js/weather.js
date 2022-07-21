const url = `https://api.openweathermap.org/data/2.5/weather?lat=38.87&lon=-77.02&units=Imperial&appid=3349075b3198795c47ed031fb8761419`;

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

const weatherDiv = document.querySelector("#weatherCard div");

function displayResults(weatherData) {
  const temp = weatherData.main.temp;
  const imagesrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].main;
  const longdesc = weatherData.weather[0].description;
  const city = weatherData.name;
  const id = weatherData.weather[0].id;
  
  weatherDiv.innerHTML += `<img src=${imagesrc} alt="${city}weather" /><span>${temp.toFixed(
    0
  )}°F, ${desc}</span>`;
  document.querySelector("#weatherCard").innerHTML += `<h3>${city} Weather</h3>`
  const banner = document.getElementById("banner");
const bannerP = document.querySelector("#banner p");
if (id === 212 || id === 504 || id === 602 || id === 781 ) {
    banner.style.display = "block";
    bannerP.innerText += `Warning: Severe Weather Alert. Condition: ${longdesc}`
}

const close = document.querySelector('#close');
close.addEventListener('click', () => {
    banner.style.display = "none";
});

}



