export function getCurrentWeather(location) {
  $.ajax({
    url:
    // default = kelvin
    // &unitsimperial = fahrenheit
    // &unitsmetric = celcius
     `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=2668c07da7e23016b049c1d4656f0af8&units=imperial`,
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
