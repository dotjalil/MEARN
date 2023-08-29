function handleTurnOn() {
  var lightNum = document.querySelector("input").value;
  var lights = document.querySelectorAll(".lights > div");

  lights.forEach((light) => {
    light.classList.remove("active");
  });

  lights[Number(lightNum) - 1].classList.add("active");
}
