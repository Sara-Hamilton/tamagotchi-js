import { Tamagotchi } from './js/tamagotchi.js';
import './styles.css';

$(document).ready(function() {
  $('#name-form').submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const location = $("#location").val();
    $("#name-form").hide();
    $(".game").show();

    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=2668c07da7e23016b049c1d4656f0af8`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showHumidity').text(`The humidity in ${location} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      },
      error: function() {
        $('.errors').text(`The weather conditions in ${location} are unknown.`)
      }
    });

    let tamagotchi = new Tamagotchi(name);
    tamagotchi.setFood();
    tamagotchi.setPlay();
    tamagotchi.setSleep();

    $("#pet-name").text(tamagotchi.name);
    $("#pet-location").text(`${tamagotchi.name} lives in ${location}`);
    $("#food").text(tamagotchi.food);
    $("#play").text(tamagotchi.play);
    $("#sleep").text(tamagotchi.sleep);
    tamagotchi.refreshView();

    $("#feed-meal").click(function() {
      tamagotchi.feedMeal();
      tamagotchi.refreshView();
    });

    $("#feed-snack").click(function() {
      tamagotchi.feedSnack();
      tamagotchi.refreshView();
    });

    $("#play-with").click(function() {
      tamagotchi.playWith();
      tamagotchi.refreshView();
    });

    $("#take-nap").click(function() {
      tamagotchi.takeNap();
      tamagotchi.refreshView();
    });

    $("#goto-sleep").click(function() {
      tamagotchi.goToSleep();
      tamagotchi.refreshView();
    });

    $("#pause-game").click(function() {
      clearInterval(tamagotchi.setFood());
      clearInterval(tamagotchi.setPlay());
      clearInterval(tamagotchi.setSleep());
    });

  });
});
