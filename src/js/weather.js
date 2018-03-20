export function getCurrentWeather(location) {
  $.ajax({
    url:
    // default = kelvin
    // &unitsimperial = fahrenheit
    // &unitsmetric = celcius
     `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${process.env.WeatherKey}&units=imperial`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $('.showHumidity').text(`The humidity in ${location} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in ${location} is ${response.main.temp} fahrenheit.`);
    },
    error: function() {
      $('.errors').text(`The weather conditions in ${location} are unknown.`)
    }
  });
}
