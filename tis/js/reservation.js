let url = "..//temples.json";

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

const today = new Date();
// today.toISOString.split('T')[0];
console.log(today.toISOString);

document.querySelector("#date").setAttribute("min", today.toISOString().split('T')[0]);
document.querySelector("#date").setAttribute("value", today.toISOString().split('T')[0]);