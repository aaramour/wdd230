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