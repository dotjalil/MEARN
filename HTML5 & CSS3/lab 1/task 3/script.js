const heading = document.getElementById("heading");
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

function updateTextColor() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;

  const textColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  heading.style.color = textColor;
}

redSlider.addEventListener("input", updateTextColor);
greenSlider.addEventListener("input", updateTextColor);
blueSlider.addEventListener("input", updateTextColor);
