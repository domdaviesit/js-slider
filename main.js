// var i = 0; // start point
// var images = [];
// var time = 3000;

// // Image list

// images[0] = '/img/image1.jpg';
// images[1] = '/img/image2.jpeg';
// images[2] = '/img/image3.jpg';

// // change image
// function changeImg() {
//   document.slide.src = images[i];

//   if (i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }

//   setTimeout('changeImg()', time);
// }

// window.onload = changeImg;

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

//// Slider 2

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

var images = ['/img/image1.jpg', '/img/image2.jpeg', '/img/image3.jpg'];

var i = 0;

function slides() {
  document.getElementById('slide-image').src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
setInterval(slides, 3000);
