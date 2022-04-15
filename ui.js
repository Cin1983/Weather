class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.string = document.getElementById('w-string');
        this.desc = document.getElementById('w-desc');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }
    paint(weather) {
        this.location.textContent = weather.name;
        this.string.textContent = weather.sys.country;
        this.desc.textContent = weather.weather[0].description;
        this.details.innerText = weather.main.temp;
        // this.icon.textContent = weather.main.pressure;
        this.humidity.textContent = weather.main.humidity;
        // this.feelsLike.textContent = weather.main.feels_like;
        // this.dewpoint.textContent = weather.main.temp_max;
        // this.wind.textContent = weather.wind.deg;

    }
}
//Only use set attribute when you need to set an attribute to a specific value.
// this.icon.setAttribute('src',with link to icon);
//Check if there is a mistake.