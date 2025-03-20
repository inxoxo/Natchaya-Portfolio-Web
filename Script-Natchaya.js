// Typewriter
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typewriter-text");
    const text = " Natchaya Tampong "; 
    let index = 0;
    let isDeleting = false; 
    const typingSpeed = 150; 
    const deletingSpeed = 150; 
    const delayBetweenCycles = 1000; 

    function typeEffect() {
        textElement.innerHTML = text.substring(0, index) + `<span class="cursor" style="color: black">|</span>`;

        if (index < text.length && !isDeleting) {
            index++;
            setTimeout(typeEffect, typingSpeed);
        } else if (index > 0 && isDeleting) {
            index--;
            setTimeout(typeEffect, deletingSpeed);
        } else {
            isDeleting = !isDeleting;
            setTimeout(typeEffect, delayBetweenCycles);
        }
    }

    typeEffect();
});

// Certificates
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "grid" : "none";
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
});

