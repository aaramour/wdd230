let url = "..//temples.json"

async function getTemples() {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

getTemples().then(data => console.log(data));