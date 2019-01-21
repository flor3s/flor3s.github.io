// get modal element

var modal = document.querySelector('#simpleModal');
var modalBtn = document.querySelector('#modalBtn');

// listen for open click
modalBtn.addEventListener('click', openModal);
// listen for outside click
window.addEventListener('click', clickOutside);


function openModal(){
  modal.style.display = 'block';
}

function clickOutside(e){
  if(e.target == modal){
    modal.style.display = 'none';
    modalBtn.style.display = 'block';
  }
}

// Scrolling in jQuery, translate this

// var allowAutoScroll = true;

// function scrollTo(id) {
//   var speed = 1000;
//   var href = id;
//   var target = $(href == "#" || href == "" ? 'html' : href);
//   var position = target.get( 0 ).offsetTop;
//   $(".mdl-layout__content").animate({scrollTop:position}, speed, "swing", function() {
//     allowAutoScroll = true;
//   });
// }

// $('a.scroll').click(function(){
//   if (allowAutoScroll === true) {
//     allowAutoScroll = false;
//     scrollTo($(this).attr('href'));
//   }
// });

// $(window).on('load', function() {
//   $(".loader").fadeOut("slow");
//   window.sr = ScrollReveal();
//   sr.reveal('.me', {
//     delay: 500,
//     duration: 500,
//     distance: '10vh'
//   }, 100);
// });

