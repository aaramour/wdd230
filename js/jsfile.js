const todaysDate = new Date(document.lastModified);
let currentYear = todaysDate.getFullYear();
document.getElementById("year").innerText = currentYear;
let currentDay = todaysDate.getDate();
let currentMonth = todaysDate.getMonth() + 1;
let currentTime = todaysDate.getTime();
let currentHour = todaysDate.getHours();
let currentMinutes = todaysDate.getMinutes();
if (currentHour > 12) {
    currentHour += -12;
    AMorPM = "PM";
} else AMorPM = "AM"
if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`
}
todaysDateTime = `${currentMonth}/${currentDay}/${currentYear} ${currentHour}:${currentMinutes} ${AMorPM}`

document.getElementById("updated").innerText = todaysDateTime;


// let days = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday]


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