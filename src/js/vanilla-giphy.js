export function getVanillaGiphy() {
  let xhr =
  $.get(`http://api.giphy.com/v1/gifs/search?q=tamagotchi&api_key=${process.env.GiphyKey}&limit=5`);
  // xhr.done(function(results) { console.log("success got results", results); });
  xhr.done(function(results) { $('#giphy').html(`<img class="resize" src= ${results.data["0"].images.original.url}>`); });
}
