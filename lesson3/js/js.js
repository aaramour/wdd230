const todaysDate = new Date(document.lastModified);
let currentYear = todaysDate.getFullYear();

document.getElementById("year").innerText = currentYear;
document.getElementById('updated').innerText = todaysDate.toLocaleString();