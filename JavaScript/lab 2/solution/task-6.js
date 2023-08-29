function whoAmI() {
  var doFly = confirm("Do you fly?");
  if (doFly) {
    // does fly
    var isWild = confirm("Are you wild?");
    if (isWild) {
      // flies and wild
      alert("You're an Eagle");
    } else {
      // flies and not wild
      alert("You're a Parrot");
    }
  } else {
    // doesn't fly
    var isUnderSea = confirm("Do you live under the sea?");
    if (isUnderSea) {
      // lives under the sea
      var isWild = prompt("Are you wild?");
      if (isWild) {
        // lives under sea and is wild
        alert("You're a Shark");
      } else {
        // Lives under the sea but not wild
        alert("You're a Dolphin");
      }
    } else {
      // doesn't live under the sea
      var isWild = confirm("Are you wild?");
      if (isWild) {
        alert("You're a Lion");
      } else {
        alert("You're a cute Cat");
      }
    }
  }
}

whoAmI();
