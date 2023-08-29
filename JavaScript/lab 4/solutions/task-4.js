var slides = document.querySelectorAll(".slider-item");
var slidesSize = slides.length;
var sliderInterval;

function prevSlide() {
  for (let i = 0; i < slidesSize; i++) {
    if (slides[i].classList.contains("active")) {
      if (i === 0) {
        setActiveSlide(slidesSize - 1);
      } else {
        setActiveSlide(i - 1);
      }
      break;
    }
  }
}

function nextSlide() {
  for (let i = 0; i < slidesSize; i++) {
    if (slides[i].classList.contains("active")) {
      if (i === slidesSize - 1) {
        setActiveSlide(0);
      } else {
        setActiveSlide(i + 1);
      }
      break;
    }
  }
}

function setActiveSlide(i) {
  slides.forEach((slide, j) => {
    if (i === j) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function play() {
  if (sliderInterval) {
    return;
  } else {
    sliderInterval = setInterval(() => {
      nextSlide();
    }, 500);
  }
}

function pause() {
  clearInterval(sliderInterval);
  sliderInterval = undefined;
}
