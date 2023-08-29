var marblesContainer = document.querySelector(".marbles");
var marbles = document.querySelectorAll(".marble");
var currentMarble = 0;
var marbleInterval;

function animateMarbles() {
  marbleInterval = setInterval(() => {
    marbles[currentMarble].classList.add("active");
    if (currentMarble === 0) {
      marbles[marbles.length - 1].classList.remove("active");
      {
        const prevMarble = marbles[marbles.length - 1];
        prevMarble.classList.add("transition");
        setTimeout(() => {
          prevMarble.classList.remove("transition");
        }, 50);
      }
    } else {
      marbles[currentMarble - 1].classList.remove("active");
      {
        const prevMarble = marbles[currentMarble - 1];
        prevMarble.classList.add("transition");
        setTimeout(() => {
          prevMarble.classList.remove("transition");
        }, 50);
      }
    }
    if (currentMarble == marbles.length - 1) {
      currentMarble = 0;
    } else {
      currentMarble++;
    }
  }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
  animateMarbles();
});

marblesContainer.addEventListener("mouseover", () => {
  clearInterval(marbleInterval);
  marbleInterval = undefined;
});
marblesContainer.addEventListener("mouseleave", () => {
  animateMarbles();
});

setTimeout(() => {
  clearInterval(marbleInterval);
  marbleInterval = undefined;
}, 100000);
