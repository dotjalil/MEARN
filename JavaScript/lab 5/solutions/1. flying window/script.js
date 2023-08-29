function startGame() {
  var startSound = document.getElementById("startSound");
  var endSound = document.getElementById("deathSound");
  var flyingWindow = window.open("./fly.html", "", "width=500,height=500");
  startSound.play();
  var movementInterval = setInterval(() => {
    moveByRandomValues(flyingWindow, 100, 100);
    if (isTouchingBoundaries(flyingWindow)) {
      flyingWindow.close();
      startSound.pause();
      endSound.play();
    }
  }, 100);
  setTimeout(() => {
    clearInterval(movementInterval);
  }, 10000);
}

function isTouchingBoundaries(windowRef) {
  const windowWidth = windowRef.innerWidth;
  const windowHeight = windowRef.innerHeight;
  const screenWidth = windowRef.screen.width;
  const screenHeight = windowRef.screen.height;

  const touchingTop = windowRef.screenY === 0;
  const touchingBottom = windowRef.screenY + windowHeight === screenHeight;
  const touchingLeft = windowRef.screenX === 0;
  const touchingRight = windowRef.screenX + windowWidth === screenWidth;

  // Example actions when window touches edges
  if (touchingTop || touchingBottom || touchingLeft || touchingRight) {
    return true;
  }
}

function moveByRandomValues(windowRef, x = 50, y = 50) {
  var xCoords = Math.floor(Math.random() * x);
  var yCoords = Math.floor(Math.random() * y);
  windowRef.moveBy(xCoords, yCoords);
}

function endGame() {}
