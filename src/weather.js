const API_KEY = "2bf5e79bfbd9fa95f6a76d9f71cc66c6";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json().then(data => {
        const city = document.querySelector("#weatherInfo h3:first-child");
        const weather = document.querySelector("#weatherInfo h3:last-child");

        city.innerText = `${data.name},`;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }));
    
}

function onGeoError() {
    alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);