// Menu Toggle Functionality
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
let section = document.querySelector('section');

menuToggle.onclick = function () {
    header.classList.toggle('active');
    section.classList.toggle('active');
};

// Slide Functionality
const slides = document.querySelectorAll('.slide');
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter--;
    slideImg();
};

const goNext = () => {
    counter++;
    slideImg();
};

const slideImg = () => {
    for (let i = 0; i < slides.length; i++) {
        if (counter >= slides.length) {
            slides.forEach(slide => {
                slide.style.transform = `translateX(-${counter * 0}%)`;
            });
        } else {
            slides.forEach(slide => {
                slide.style.transform = `translateX(-${counter * 100}%)`;
            });
        }
    }
};


