

let url = "http://aaramour.github.io/wdd230/tis/temples.json"
const cards = document.querySelector('.cards');
// async function getTemples() {
//     let response = await fetch(url);
//     let temples = await response.json()
//     return temples;
// }

// getTemples()
// .then(temples => console.log(temples));


fetch(url)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
//   then put it in a table in the console; we can check the console at this point
  console.table(jsonObject);
  const temples = jsonObject.temple;
  temples.forEach(displayTemples);

});

// console.log(temple.name);
//EDIT ALL OF THIS BELOW
function displayTemples(data) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let pStreet = document.createElement('p');
    let pStreet2 = document.createElement('p');
    // let img = document.createElement('img');
    let picture = document.createElement('img');
    let addressDiv = document.createElement('div');
    let altText = `${data.name}}`
    let scheduleDiv = document.createElement('div');
    // let scheduleList = document.createElement('p');
    
  //   Let's go ahead and fill the contents of those elements
    card.innerHTML = `<div class="likeIcon"><img src="images/like.png" alt="like ${data.name}" /></div>`;
    h2.textContent = `${data.name}`;
    picture.setAttribute('src', data.image);
    picture.setAttribute('alt', altText);
    picture.setAttribute('loading', 'lazy');
    picture.setAttribute('class', 'templeImage');
    addressDiv.setAttribute('class', 'address');
    addressDiv.innerHTML = `<h3>Contact:</h3><p>Phone: ${data.telephone}</p>`;
    pStreet.textContent =`${data.address}`;
    pStreet2.textContent =`${data.city}, ${data.state} ${data.zip}`;
    card.setAttribute('class', 'card');
    scheduleDiv.innerHTML = `<h3>Services:</h3>`;
    
    
  //   Now we are adding them to the document
    card.appendChild(picture); 
    // card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(addressDiv);
    card.appendChild(scheduleDiv);
    addressDiv.appendChild(pStreet);
    addressDiv.appendChild(pStreet2);
    for (var i = 0; i < data.services.length; i++) {
      scheduleDiv.innerHTML += `<p>${data.services[i]}</p>`;
    }
    
    
    document.querySelector('div.cards').appendChild(card);

}
// let liked = window.localStorage.getItem("liked-ls")

// const likeBtn = document.querySelectorAll(".likeIcon");


// This doesn't work:

document.getElementsByClassName("likeIcon").forEach(element =>
  element.addEventListener("click", () => {
    // element.classList.add("liked");
    // element.removeAttribute("src");
    // element.setAttribute("src", "images/liked.png")
    console.log(element);
    console.log("HI");
    element.innerHTML=`<img src="images/liked.png" alt="liked temple" />`;
    alert();
  }
    ))
  