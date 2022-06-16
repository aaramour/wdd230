
/* // Assign the URL to a variable 'requestURL' */
const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

//grab the .cards div and assign it to a variable 'cards'
const cards = document.querySelector('.cards');

// fetch the json from the url inside the fetch function
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
//   then put it in a table in the console; we can check the console at this point
  console.table(jsonObject);
  
//   then create a variable 'pokemon' to hold the whole json table we just imported. 
//   make sure we are looking at the name of the table
  const prophets = jsonObject.prophets;
// for each pokemon in the array, lets run the displayPokemon function. We'll make this function below
  prophets.forEach(displayProphets);  
});

// Let's make the function that we are doing for each pokemon in the table
function numOrderer(num) {
  let numOrdered = "";
  if (num % 10 == 1) {
    numOrdered = `${num}st`;
  }else if (num % 10 == 2) {
    numOrdered = `${num}nd`;
  }else if (num % 10 == 3) {
    numOrdered = `${num}rd`;
  } else {
    numOrdered = `${num}th`;
  } return numOrdered;
}
function displayProphets(prophets) {
//   we are inventing elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let portrait = document.createElement('img');
  let dobdiv = document.createElement('div.dob');
  let pobdiv = document.createElement('div.pob');
  let numOrder = numOrderer(prophets.order);
  let altText = `Picture of ${prophets.name} ${prophets.lastname} - ${numOrder} Latter-day President`
  
//   Let's go ahead and fill the contents of those elements
  h2.textContent = `${prophets.name} ${prophets.lastname}`;
  portrait.setAttribute('src', prophets.imageurl);
  portrait.setAttribute('alt', altText);
  portrait.setAttribute('loading', 'lazy');
  dobdiv.textContent = `Date of Birth: ${prophets.birthdate}`;
  pobdiv.textContent = `Place of Birth: ${prophets.birthplace}`;
  
//   Now we are adding them to the document
  card.appendChild(h2);
  card.appendChild(dobdiv);
  card.appendChild(pobdiv);
  card.appendChild(portrait);
  document.querySelector('div.cards').appendChild(card);
  
}