class Weather {
    constructor(city, state) {
            this.apiKey = '7e1ced1c8b8048749ced1c8b801874ff'
            this.city = city;
            this.state = state;
        }
        //Fetch weather from API
    async getWeather() {
            const response = await fetch(`https://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

            const responseData = await response.json();

            return responseData.current_observation;
        }
        //change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}