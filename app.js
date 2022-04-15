//Init Storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();

//Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
//Init UI object
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;


    //Change weather location
    weather.changeLocation('city', 'country');

    //Set location in localstorage
    storage.setLocationData(city, country);

    //Get and display weather
    getWeather();
    //close modal
    $('#locModal').modal('hide');
});

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