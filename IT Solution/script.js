const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let slideIndex = 0;
const slideWidth = 100; 
const totalSlides = slider.children.length;

function showSlide(index) {
    const translateX = -index * slideWidth;
    slider.style.transform = `translateX(${translateX}%)`;
}

function nextSlide() {
    if (slideIndex < totalSlides - 1) {
        slideIndex++;
        showSlide(slideIndex);
    }
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
        showSlide(slideIndex);
    }
}

prevBtn.addEventListener("click", () => {
    prevSlide();
});

nextBtn.addEventListener("click", () => {
    nextSlide();
});


slider.parentElement.style.overflowX = "hidden";

showSlide(slideIndex);
