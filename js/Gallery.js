// Images container
var gallery = document.getElementById('gallery');
  
// JSON object using fetch, each data for the gallery are store in this JSON oject
fetch('js/Gallery.json') 
  
.then(function(res) {
    
  res.json().then(function(json) {
  
    // Loop which will go through of the date in the JSON object file
    json.forEach(function(el) {
  
      // Create a new gallery item container (a link to the image)...
      var galleryItem = document.createElement('a');
        
      // Give this div a class name
      galleryItem.setAttribute('class', 'gallery-item');
        
      // Add the href attribute to the anchor
      galleryItem.setAttribute('href', el.url);
        
      // Open the image in a new tab when you clic on them
      galleryItem.setAttribute('target', '_blank');
        
      // Create an image element
      var image = document.createElement('img');
  
      // Set some attributes,
      image.setAttribute('src', el.url);        // the url of the image,
      image.setAttribute('alt', el.caption);    // Every image need an alt caption
      image.setAttribute('title', el.caption);  // Title of the image, when you pass you mousse on an image it will show you the title of the image
        
      // Create a caption element
      var caption = document.createElement('caption');
        
      // Add text content to caption
      caption.innerText = el.caption;
  
      // Append the image and caption to our gallery item container
      galleryItem.appendChild(image);
      galleryItem.appendChild(caption);
        
      // Append the gallery item to our gallery element
      gallery.appendChild(galleryItem);
    });
  });
});
  
