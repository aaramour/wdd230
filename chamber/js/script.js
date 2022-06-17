function toggleMenu() {
    // console.log("It worked!")
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}

const x = document.getElementById('hamburger');

x.onclick = toggleMenu;

const dateSnapshot = new Date(document.lastModified);
const todaysDate = new Date();
let currentYear = todaysDate.getFullYear();

document.getElementById("year").innerText = currentYear;
document.getElementById('updated').innerText = dateSnapshot.toLocaleString();
document.getElementById('currentDate').innerText = todaysDate.toLocaleDateString('en-us', {weekday:"long", day:"numeric", month:"long", year:"numeric"}   );

const banner = document.getElementById("banner");
if (todaysDate.getDay() === 1 || todaysDate.getDay() === 2) {
    banner.style.display = "block";
}

const close = document.querySelector('#close');
close.addEventListener('click', () => {
    banner.style.display = "none";
});

const imagesToLoad = document.querySelectorAll("[data-src]");

const imgOptions = {
    threshold: 0, 
    rootMargin: "0px 0px -300px 0px"
};

const loadImages = (image) => {
    let src = image.getAttribute('data-src');
    image.setAttribute('src', src);
    image.removeAttribute('data-src');};


if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);


    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });

}

else {

}

// -------------Begin Join FORM -----------------
let activePage = document.querySelector("li.active");
if(activePage.innerText == "Join") {
    let businessTitle = document.querySelector('input[name="businessTitle"]');
    businessTitle.oninvalid = function(e) {
        e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                if (e.target.value.length == 0) {
                    e.target.setCustomValidity("This field is required");
                            } else {
        e.target.setCustomValidity("7 or more characters, A-Z, space, or hyphen only.");
            }}
        };

    let formDate = document.querySelector('input[name="currentDate"]');
    formDate.value = todaysDate;
    }
//-------------------End Form--------------------

// ---------------Begin Directory Page JS-------------
else if(activePage.innerText == "Directory") {
const requestURL = "https://aaramour.github.io/wdd230/chamber/data.json";

const cards = document.querySelector('.cards');

fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);
  
  const businesses = jsonObject.businesses;
  businesses.forEach(displayBusinesses);  
});

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
function displayBusinesses(businesses) {
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let coLogo = document.createElement('img');
  let altText = `Logo of ${businesses.company}`;
  let coAddressDiv = document.createElement('div');
  let coPhoneDiv = document.createElement('div');
  let coSiteDiv = document.createElement('a');
  
  h2.textContent = `${businesses.company}`;
  card.setAttribute('class', 'businessCard')
  coLogo.setAttribute('class', 'companyLogo');
  coLogo.setAttribute('src', businesses.picture);
  coLogo.setAttribute('alt', altText);
  coLogo.setAttribute('loading', 'lazy');
  coAddressDiv.setAttribute('class', 'companyInfo');
  coAddressDiv.textContent = `${businesses.address}`;
  coPhoneDiv.setAttribute('class', 'companyInfo');
  coPhoneDiv.textContent = `${businesses.phone}`;
  coSiteDiv.setAttribute('class', 'companyInfo');
  coSiteDiv.setAttribute('href',`https://${businesses.site}`)
  coSiteDiv.innerHTML = `<div class="businessInfo"> ${businesses.site}</div>`;
  
  
  card.appendChild(coLogo);
  card.appendChild(h2);
  card.appendChild(coPhoneDiv);
  card.appendChild(coAddressDiv);
  card.appendChild(coSiteDiv);
  document.querySelector('div.cards').appendChild(card);
  
}}

// --------------End Directory Page JS -------------------

// function normalize(phone) {
//     //normalize string and remove all unnecessary characters
//     phone = phone.replace(/[^\d]/g, "");

//     //check if number length equals to 10
//     if (phone.length == 10) {
//         //reformat and return phone number
//         return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
//     }

//     return null;
// }

// var phone = '(123)4567890';
// phone = normalize(phone); //(123) 456-7890

// OR 

// function formatPhoneNumber(phoneNumberString) {
//     var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
//     var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
//     if (match) {
//       var intlCode = (match[1] ? '+1 ' : '');
//       return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
//     }
//     return null;
//   }
//   formatPhoneNumber('+12345678900') // => "+1 (234) 567-8900"
//   formatPhoneNumber('2345678900')   // => "(234) 567-8900"