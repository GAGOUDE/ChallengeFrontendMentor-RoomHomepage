
/* Header section */
const menuToggle = document.querySelector('.menu-toggle');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const hamburgerMenu = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close');
const fadeElement = document.querySelectorAll('.has-fade');

menuToggle.addEventListener('click', function(){
    if(header.classList.contains('open')){ // Close Hamburger Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        hamburgerMenu.classList.toggle('active');
        closeMenu.classList.toggle('active');
        fadeElement.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    } else { // Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        hamburgerMenu.classList.toggle('active');
        closeMenu.classList.toggle('active');
        fadeElement.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});

/* Hero section */
const items = document.querySelectorAll('.slide');
const numberOfSlides = items.length;
const next = document.querySelectorAll('.right');
const previous = document.querySelectorAll('.left');
let count = 0;

//Slide next function
function slideNext(){
    items[count].classList.remove('active');
    
    if(count < numberOfSlides - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active');
}

//Slide previous function
function slidePrevious(){
    items[count].classList.remove('active');
    
    if(count > 0){
        count--;
    } else {
        count = numberOfSlides - 1;
    }

    items[count].classList.add('active');
}

//KeyPress function
function KeyPress(e){
    console.log(e);

    if(e.keyCode === 37){
        slidePrevious();
    }else if(e.keyCode === 39){
        slideNext();
    }
}
document.addEventListener('keydown', KeyPress)
