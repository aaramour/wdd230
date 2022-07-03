const requestURL = "https://aaramour.github.io/wdd230/chamber/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);

    const businesses = jsonObject.businesses;

    const goldSilverBusinesses = businesses.filter(isGoldSilver);
  
    const spotLightBusinesses = randomFromArray(3, goldSilverBusinesses);
    
  const sl1 = document.querySelector("#spotLight1");
  const sl2 = document.querySelector("#spotLight2");
  const sl3 = document.querySelector("#spotLight3");

  const sl1Name = sl1.querySelector("h2");
  const sl2Name = sl2.querySelector("h2");
  const sl3Name = sl3.querySelector("h2");

  const sl1Phone = sl1.querySelector("h3");
  const sl2Phone = sl2.querySelector("h3");
  const sl3Phone = sl3.querySelector("h3");

  const sl1Logo = sl1.querySelector("img");
  const sl2Logo = sl2.querySelector("img");
  const sl3Logo = sl3.querySelector("img");

  const sl1Site = sl1.querySelector("a > div");
  const sl2Site = sl2.querySelector("a > div");
  const sl3Site = sl3.querySelector("a > div");

  const sl1SiteLink = sl1.querySelector("a");
  const sl2SiteLink = sl2.querySelector("a");
  const sl3SiteLink = sl3.querySelector("a");

    sl1Name.innerText = spotLightBusinesses[0][0].company;
    sl1Phone.innerText = spotLightBusinesses[0][0].phone;
    sl1Logo.setAttribute("src", spotLightBusinesses[0][0].picture);
    sl1Logo.setAttribute("alt", `${spotLightBusinesses[0][0].company} logo`);
    sl1Site.innerText = spotLightBusinesses[0][0].site;
    sl1SiteLink.setAttribute("href", `http://${spotLightBusinesses[0][0].site}`);

    sl2Name.innerText = spotLightBusinesses[1][0].company;
    sl2Phone.innerText = spotLightBusinesses[1][0].phone;
    sl2Logo.setAttribute("src", spotLightBusinesses[1][0].picture);
    sl2Logo.setAttribute("alt", `${spotLightBusinesses[1][0].company} logo`);
    sl2Site.innerText = spotLightBusinesses[1][0].site;
    sl2SiteLink.setAttribute("href", `http://${spotLightBusinesses[1][0].site}`);

    sl3Name.innerText = spotLightBusinesses[2][0].company;
    sl3Phone.innerText = spotLightBusinesses[2][0].phone;
    sl3Logo.setAttribute("src", spotLightBusinesses[2][0].picture);
    sl3Logo.setAttribute("alt", `${spotLightBusinesses[2][0].company} logo`);
    sl3Site.innerText = spotLightBusinesses[2][0].site;
    sl3SiteLink.setAttribute("href", `http://${spotLightBusinesses[2][0].site}`);



});

function isGoldSilver(array) {
  if(array.membership == "g" || array.membership == "s") {
    return array;
  }
}

function randomFromArray(needed, array) {
  const newArray=[];
  for (let i = 0; i < needed; i++){
    let randInt = Math.floor(Math.random() * array.length);
    let element = array.splice(randInt,1);
   
    newArray.push(element);
  }
  
  return newArray;
}