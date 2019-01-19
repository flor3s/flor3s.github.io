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