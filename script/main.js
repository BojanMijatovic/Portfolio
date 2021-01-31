// hide preloader
window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('hidePreloader');
    document.body.style.overflow = 'visible';
})

// navbar toggle
const navBtn = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.navbar-collapse');
navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('toggleNav');
})

//  typewriter

let app = document.getElementById('typeEffect');
let typewriter = new Typewriter(app, {
    loop: true
})

typewriter.typeString('I\'m Bojan Mijatovic')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I\'m Frontend Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I\'m Frontend Developer')
    .pauseFor(2500)
    .start()