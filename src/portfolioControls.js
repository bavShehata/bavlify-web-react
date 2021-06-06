// Portfolio slideshow
var slideIndex = 0;
var slides = document.querySelectorAll(".mySlides");
var isBrowsing;
// For swiping on mobile
let portfolioContainer = document.querySelector("#portfolio .container");
let screenWidth = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
);
let usedDevice;
window.onload = function () {
  // Wait for everything to load so that we can get the offsetHeight and width accurately, then run the function of slideShowing
  var desktopVidHeight, mobileVidHeight, desktopVidWidth, mobileVidWidth;
  //listen for window resize event
  window.addEventListener("resize", function (event) {
    desktopVidHeight = slides[5].querySelector("video").offsetHeight; // aspect ratio of 1.73:1
    mobileVidHeight = slides[1].querySelector("video").offsetHeight; // aspect ratio of 11:20
    desktopVidWidth = slides[5].querySelector("video").offsetWidth; // aspect ratio of 1.73:1
    mobileVidWidth = slides[1].querySelector("video").offsetWidth; // aspect ratio of 11:20
    usedDevice = getComputedStyle(
      document.querySelector("#portfolio .container")
    ).getPropertyValue("--device");
    for (let n = 0; n < 6; n++) {
      const desktopVid = slides[n].querySelector(".desktop video");
      const img = slides[n].querySelector("img");
      if (desktopVid) {
        img.style.width = mobileVidWidth;
        img.style.height = mobileVidHeight;
      } else {
        const mobileVid = slides[n].querySelector(".mobile video");
        img.style.width = desktopVidWidth;
        img.style.height = desktopVidHeight;
      }
    }
  });
  desktopVidHeight = slides[5].querySelector("video").offsetHeight; // aspect ratio of 1.73:1
  mobileVidHeight = slides[1].querySelector("video").offsetHeight; // aspect ratio of 11:20
  desktopVidWidth = slides[5].querySelector("video").offsetWidth; // aspect ratio of 1.73:1
  mobileVidWidth = slides[1].querySelector("video").offsetWidth; // aspect ratio of 11:20
  usedDevice = getComputedStyle(
    document.querySelector("#portfolio .container")
  ).getPropertyValue("--device");

  // Images have the same width and height of the videos
  for (let n = 0; n < 6; n++) {
    const desktopVid = slides[n].querySelector(".desktop video");
    const img = slides[n].querySelector("img");
    if (desktopVid) {
      img.style.width = mobileVidWidth;
      img.style.height = mobileVidHeight;
    } else {
      const mobileVid = slides[n].querySelector(".mobile video");
      img.style.width = desktopVidWidth;
      img.style.height = desktopVidHeight;
    }
  }

  // Start from the first image
  portfolioContainer.scrollLeft = 0;
  showSlide(0);
};
// Throttling function to prevent multiple swipes
let prev = 0;

const throttleFunction = (func, delay) => {
  // Previously called time of the function
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    // If difference is greater than delay call
    // the function again.
    if (now - prev > delay) {
      prev = now;
      // "..." is the spread operator here
      // returning the function with the
      // array of arguments
      return func(...args);
    }
  };
};
// Next/previous controls
export function plusSlides(n) {
  window.clearTimeout(isBrowsing);
  showSlide((slideIndex += n));
}

function showSlide(n) {
  const maxNum = slides.length;
  if (n == -1) {
    n = 5;
  }
  n = Math.abs(n % maxNum);
  slideIndex = n;

  // Start every video from the beginning and play it
  slides[n].querySelector("video").currentTime = 0;
  slides[n]
    .querySelector("video")
    .play()
    .catch(function (e) {
      console.log("Error playing video\n", e);
    });
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("appear");
  }

  slides[n].classList.add("appear");
  // Make videos a bit slower since the vids r only 4 seconds and the slideshow is 6 seconds
  if (n != 1) slides[n].querySelector("video").playbackRate = 0.75;
  // Auto browse every 6 seconds
  isBrowsing = setTimeout(function () {
    showSlide(n + 1);
  }, 6000);
}
