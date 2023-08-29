$(document).ready(function () {
  const gridItems = $(".grid-item img");
  const sliderContainer = $(".slider-container");
  const sliderImage = $("#slider-img");
  let currentSlideIndex = 0;

  gridItems.on("click", function () {
    showSlider(gridItems.index(this));
  });

  function showSlider(index) {
    sliderContainer.addClass("show");
    currentSlideIndex = index;
    updateSliderContent();
  }

  $(".close-btn").on("click", function () {
    closeSlider();
  });

  function closeSlider() {
    sliderContainer.removeClass("show");
  }

  $(".next-btn").on("click", function () {
    nextSlide();
  });

  $(".prev-btn").on("click", function () {
    prevSlide();
  });

  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % gridItems.length;
    updateSliderContent();
  }

  function prevSlide() {
    currentSlideIndex =
      (currentSlideIndex - 1 + gridItems.length) % gridItems.length;
    updateSliderContent();
  }

  function updateSliderContent() {
    sliderImage.attr("src", gridItems.eq(currentSlideIndex).attr("src"));
  }
});
