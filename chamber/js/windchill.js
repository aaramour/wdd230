let temp = parseFloat(document.querySelector("#temp").textContent);
let windSpeed = parseFloat(document.querySelector("#windSpeed").textContent);
let windChill = "";
let windChillText = "";

if (temp <= 50 && windSpeed > 3) {
    windChill = 35.74 + (.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (.4275 * temp) * Math.pow(windSpeed, 0.16);
    windChill = `${Math.round(windChill)}°F`;
} else { windChill = "N/A"}

document.querySelector("#windChill").textContent = windChill;


