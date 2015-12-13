$(document).ready(function(){
  // Set debug mode (for console logs)
  RandomGiphyImage.debug = true;

  // Class of the HTML element where you want to put the gif
  RandomGiphyImage.data.element_class = 'giphyme';

  // Query or tag of your random gif
  RandomGiphyImage.data.query = 'nintendo';

  // Executes the random gif thing
  RandomGiphyImage.giphyme();
});
