document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const slidesContainer = document.querySelector('.slides');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function updateSlidePosition() {
        for (let i = 0; i < slides.length; i++) {
            // slides[i].style.transform = `translateX(${-100 * currentIndex}%)`;
            slides[i].style.transform = `translateX(${-currentIndex * 100}%)`;
        }
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    }

    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    updateSlidePosition(currentIndex);
});

