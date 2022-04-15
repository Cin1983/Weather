//Init weather object
const weather = new Weather('Zaandam', 'NL');
//Init UI object
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change weather location
//weather.changeLocation('Amsterdam', 'NL');

//promise to get weather
function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results);
            //method
            ui.paint(results)
        })
        .catch(err => console.log(err));
}