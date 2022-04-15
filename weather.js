class Weather {
    constructor(city, country) {
            this.api_key = '003b28a8bae3520e06093ffc6dfdec21'
            this.city = city;
            this.country = country;
        }
        //Fetch weather from API
    async getWeather() {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.api_key}`);

            const responseData = await response.json();

            return responseData;
        }
        //change weather location
    changeLocation(city, country) {
        this.city = city;
        this.state = country;
    }
}