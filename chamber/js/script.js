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

// FORM
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