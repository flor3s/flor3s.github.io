// SMOOTHER SCROLLING //
function scrollSmoothly(target,duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top + 1;
  var startPosition = window.pageYOffset;
  var startTime = null;

  function animation(currentTime){
    if(startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  // easing function to dynamically update the scroll position as it moves down the page: http://gizma.com/easing/
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// scroll click
var scroll = document.querySelector('.scroll-to');
var secondContainer = document.querySelector('#two');
var navFadeHeight = secondContainer.getBoundingClientRect().top;

var header = document.querySelector('.header');

scroll.addEventListener('click', function(){
  scrollSmoothly('#two', 1000);
})

// NAV BAR //
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  // show navbar based on scroll direction
  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.classList.remove('hide-el');
    header.style.top = "-80px";
  }
  prevScrollPos = currentScrollPos;
}