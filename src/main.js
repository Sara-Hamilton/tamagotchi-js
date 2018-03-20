import { Tamagotchi } from './js/tamagotchi.js';
import './styles.css';
import { getCurrentWeather } from './js/weather.js';
import { getGiphy } from './js/giphy.js';

$(document).ready(function() {
  $('#name-form').submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const location = $("#location").val();
    $("#name-form").hide();
    $(".game").show();

    getCurrentWeather(location);

    //javascript, jQuery method
    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=tamagotchi&api_key=Igbr3fBtwa40uV6k99W47MTTplp9CxLa&limit=5");
    // xhr.done(function(results) { console.log("success got results", results); });
    // xhr.done(function(results) { $('#giphy').html(`<img class="resize" src= ${results.data["0"].images.original.url}>`); });

    // AJAX method
    getGiphy();
    let changePics = setInterval(getGiphy, 3000);


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
