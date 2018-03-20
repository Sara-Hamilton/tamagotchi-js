export function getGiphy() {
  $.ajax({
    url:
     `http://api.giphy.com/v1/gifs/search?q=tamagotchi&api_key=${process.env.GiphyKey}&limit=5`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      let random = Math.floor(Math.random()* 4) + 1;
      let reply = response.data[random].images.original.url;
      $('#giphy').html(`<img class="resize" src= ${reply}>`);
    },
    error: function() {
      $('.error-image').text(`There was a problem loading your image.`)
    }
  });
}
