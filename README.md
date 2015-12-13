# RandomGiphyImage

## About

RandomGiphyImage is an absolute silly JS library with the only purpose of put some random Giphy images on your HTML.

## Usage

Add the `random-giphy-image.js` file in your assets. You only have to do something like this on your JS:

```javascript
$(document).ready(function(){
  // Set debug mode (for console logs)
  RandomGiphyImage.debug = true;

  // Testing api key by default if you don't specify one
  RandomGiphyImage.data.api_key = 'YOUR_GIPHY_API_KEY';

  // Class of the HTML element where you want to put the gif
  RandomGiphyImage.data.element_class = 'giphyme';

  // Query or tag of your random gif
  RandomGiphyImage.data.query = 'nintendo';

  // Executes the random gif thing
  RandomGiphyImage.giphyme();
});
```
And then put one or more HTML elements in your view:

```html
<body>
  <div class="giphyme"> </div>
</body>
```

Refresh you page and... voila! :)

**Important: this library uses jQuery to work.**

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/dreamingechoes/random_giphy_image_rails. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](contributor-covenant.org) code of conduct.

## License

**RandomGiphyImage** is released under the terms of the [MIT License](http://opensource.org/licenses/MIT).
