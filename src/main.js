import { Tamagotchi } from './js/tamagotchi.js';
import './styles.css';

$(document).ready(function() {
  $('#name-form').submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();

    let tamagotchi = new Tamagotchi(name);
    tamagotchi.setFood();
    tamagotchi.setPlay();
    tamagotchi.setSleep();

    $("#pet-name").text(tamagotchi.name);
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

  });
});
