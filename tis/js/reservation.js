const todayIs = new Date();
let url = "https://aaramour.github.io/wdd230/tis/temples.json";

fetch(url)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
//   then put it in a table in the console; we can check the console at this point
  console.table(jsonObject);
  const temples = jsonObject.temple;
  temples.forEach(displayTempleNames);

});

function displayTempleNames(data) {
    let dropdown = document.querySelector("#location");
    console.log(dropdown);
    const option = `<option value="${data.zip}">${data.name}</option>`;
    console.log(option);
    dropdown.innerHTML += option;
}


// today.toISOString.split('T')[0];
console.log(todayIs.toISOString);

document.querySelector("#date").setAttribute("min", todayIs.toISOString().split('T')[0]);
document.querySelector("#date").setAttribute("value", todayIs.toISOString().split('T')[0]);