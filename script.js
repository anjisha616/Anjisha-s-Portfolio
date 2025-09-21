// // Toggle Mobile Menu
// const burger = document.querySelector('.burger');
// const navLinks = document.querySelector('.nav-links');

// burger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

// // Smooth Scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href'))
//                 .scrollIntoView({ behavior: 'smooth' });
//         if(navLinks.classList.contains('active')) {
//             navLinks.classList.remove('active');
//         }
//     });
// });

// // Contact Form Alert
// const form = document.getElementById('contactForm');
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     alert("Thank you! Your message has been sent.");
//     form.reset();
// });

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}