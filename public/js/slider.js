// Slider
const slides = document.querySelectorAll(".slides li")

// Generate classes for each slides
slides.forEach((slide, i) => {
    if (i === 0) {
        slide.classList.add("current")
    } else {
        slide.classList.add("next")
    }
})

// Add logic for buttons
const nextButton = document.querySelector("#next")
const previousButton = document.querySelector("#previous")

nextButton.addEventListener("click", () => {
    const currentSlide = document.querySelector(".current")
    const nextSlide = currentSlide.nextElementSibling

    currentSlide.classList.add("previous")
    currentSlide.classList.remove("current")

    nextSlide.classList.add("current")
    nextSlide.classList.remove("next")
})

previousButton.addEventListener("click", () => {
    const currentSlide = document.querySelector(".current")
    const previousSlide = currentSlide.previousElementSibling

    currentSlide.classList.add("next")
    currentSlide.classList.remove("current")

    previousSlide.classList.add("current")
    previousSlide.classList.remove("previous")
})