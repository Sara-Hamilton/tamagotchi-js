import { Tamagotchi } from './js/tamagotchi.js';
import './styles.css';

$(document).ready(function() {
  $('#name-form').submit(function(event) {
    event.preventDefault();
    const name = $('#name').val

    let tamagotchi = new Tamagotchi(name);

    $("#food").text(tamagotchi.food);
    $("#play").text(tamagotchi.play);
    $("#sleep").text(tamagotchi.sleep);

  });
});
