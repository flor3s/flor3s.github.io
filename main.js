// // MODALS

// // get modal element

// var modal = document.querySelector('#simpleModal');
// var modalBtn = document.querySelector('#modalBtn');

// // listen for open click
// modalBtn.addEventListener('click', openModal);
// // listen for outside click
// window.addEventListener('click', clickOutside);


// function openModal(){
//   modal.style.display = 'block';
// }

// function clickOutside(e){
//   if(e.target == modal){
//     modal.style.display = 'none';
//     modalBtn.style.display = 'block';
//   }
// }

// SCROLLING
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

var section1 = document.querySelector('.scroll-to');

section1.addEventListener('click', function(){
  scrollSmoothly('.second', 1000);
})