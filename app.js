//Init weather object
const weather = new Weather('Zaandam', 'NL');
//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change weather location
//weather.changeLocation('Amsterdam', 'NL');

//promise to get weather
function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results);
        })
        .catch(err => console.log(err));
}