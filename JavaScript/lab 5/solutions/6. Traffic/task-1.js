var current = 0;

function turnOnAutomatically(lightNum) {
  var lights = document.querySelectorAll(".lights > div");

  lights.forEach((light) => {
    light.classList.remove("active");
  });
  lights[lightNum].classList.add("active");
}

setInterval(() => {
  turnOnAutomatically(current);
  if (current == 2) {
    current = 0;
  } else {
    current++;
  }
}, 500);
