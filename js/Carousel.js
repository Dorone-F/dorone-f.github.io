// Images container, reference to our image carousel id that we set in the HTML part
var images = document.getElementById('carouselImages');
images.style.left = '0px';

// Image caption, reference to our caption carousel that we set in the HTML part
var caption = document.getElementById('carouselCaption');

// Previous image button, reference to our previous button carousel id that we set in the HTML part
var prev = document.getElementById('carouselPrev');

// Next image button, reference to our next button carousel id that we set in the HTML part
var next = document.getElementById('carouselNext');

// JSON object using fetch, each data for the carousel are store in this JSON oject
fetch('js/carousel.json') 

.then(function(res) {

  res.json().then(function(json) {

    // Loop which will go through of the date in the JSON object file
    json.forEach(function(el, i) {

      // Create a new image element
      var image = document.createElement('img');

      // Set some attributes, 
      image.setAttribute('src', el.url);        // the url of the image
      image.setAttribute('alt', el.caption);    // Every image need an alt caption
      image.setAttribute('title', el.caption);  // Title of the image, when you pass you mousse on an image it will show you the title of the image

      // Add this image to the carousel image element 
      images.appendChild(image);
    });
    
    //
    // Once our images are all loaded in, we have to set up our carousel and for that we pass our JSON object (array) to this function
    setupCarousel(json);
  });
});


/* ----------------------------------
  A function to set up our carousel
---------------------------------- */

// Function to set the interactivity of the carousel
function setupCarousel(json) {
  
  /* -------------------------------------------
    Set some variables to keep track of things
  ------------------------------------------- */

  // Number of image in the JSON object, could be set with number like 1, 2, 3... 
  // but 'var imageCount = images.childElementCount;' will count each elements for you,
  // which mean that if you want to add a new element in your JSON object you won't have to change the variable number 
  var imageCount = images.childElementCount; // 

  // Current image in view
  var currentImage = 1;

  // Width of your images, this line makes the code more adaptable in the event of modification of the width of the 1st image, 
  // rather than entering a fixed value that should be changed each time the file is modified, the value is automatically retrieved.
  // var imageWidth = images.getElementsByTagName('img')[0].clientWidth;
  var imageWidth = 700;
  
  
  /* ----------------------------------------
    Event listeners on our buttons
  ---------------------------------------- */

  // Previous button
  // calls this function when you click on the previous button (Symbol: <)
  prev.addEventListener('click', function(e) {
    e.preventDefault();

    // if you are not currently in the 1st image,
    if(currentImage != 1) {

      // decrement the current image reference, which mean now you will have the index of the previous image 
      // 'currantImage' variable is the variable which set the index of the current image in view 
      --currentImage;

      // Move the previous image into view using the marginLeft property
      images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
    }
    // else condition, do nothing if "CurrentImage" variable is equal to 1
    // which mean that you are currently display the first image (there is no image before)

    // Update our caption, display the caption of the actual display image
    caption.innerText = json[currentImage - 1].caption;
  });

  // Next button
  // calls this function when you click on the Next button (Symbol: >)
  next.addEventListener('click', function(e) {
    e.preventDefault();

    // If the image in view is not the last image...
    if(currentImage != imageCount) {

      // Increment the current image reference, which mean now you will have the index of the next image 
      ++currentImage;

      // Move the next image into view using the marginLeft property
      images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
    }
    // else condition, do nothing if "CurrentImage" variable is already equal to the index of the last image 
    // which mean that you are currently display the last image (there is no image after)


    // Update our caption, display the caption of the actual display image
    caption.innerText = json[currentImage - 1].caption;
  });
  
  // Update our caption
  caption.innerText = json[currentImage - 1].caption;
}
