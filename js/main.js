// js file
/* STEP 1 Select the element that will be clicked on to show or hide the nav. In our 
case it will be the button. It will always be the button. We gave it a class
of "toggle-nav"  */
const btn = document.querySelector('.toggle-nav')


/* STEP 2 add a click event to that button icon */
btn.addEventListener('click', function(){
    document.querySelector('nav').classList.toggle('show-nav');
});

// when the button is clicked, show the nav element by adding the class name 
    // .show-nav to it 