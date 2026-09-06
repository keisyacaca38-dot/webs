// Logika Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Efek Ripple saat Layar Disentuh / Di-klik
document.addEventListener('click', function (e) {
    const circle = document.createElement('div');
    circle.classList.add('ripple');
    
    circle.style.left = `${e.clientX - 25}px`;
    circle.style.top = `${e.clientY - 25}px`;
    circle.style.width = '50px';
    circle.style.height = '50px';

    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 600);
});