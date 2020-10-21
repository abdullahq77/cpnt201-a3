// Creating button and path element variables with .querySelector
const path = document.querySelector('path');
const button = document.querySelector('button');

// Adding a click handler so it listens for a click
button.addEventListener('click', function(){

//This allows the arrow to get filled wit the desired colour of my choosing  
path.classList.toggle('go');  
});