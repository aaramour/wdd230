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