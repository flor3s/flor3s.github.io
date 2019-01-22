// SMOOTHER SCROLLING //
function scrollSmoothly(target,duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var startTime = null;

  function animation(currentTime){
    if(startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  // easing function for smoother scrolling: http://gizma.com/easing/
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// VANILLA JS FADE IN USING ASYNC AWAIT //

function fadeIn(element) {
  var el = document.querySelector(element);
  var op = (parseFloat(el.style.opacity) || 0);

  var timer = setInterval( async function () {
    await fadeDelay(1200);
    if (op >= .7) op = clearInterval(timer);
    op += 0.1;
    el.style.opacity = op;
  }, 50);

  function fadeDelay(time, val) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(val);
      }, time)
    })
  };
};

// scroll and fade on click
var section1 = document.querySelector('.scroll-to');
var top = document.querySelector('a.navbar-item');

section1.addEventListener('click', function(){
  scrollSmoothly('#two', 1000);
  fadeIn('.header');
});

// fade on scroll position as well
 