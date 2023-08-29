var radius = Number(prompt("Enter the circle radius"));
alert("Total area of the circle is: " + Math.PI * Math.pow(radius, 2));

var calcSqrt = Number(prompt("Enter a number to find the square root"));
alert("Square root of: " + calcSqrt + " is: " + Math.sqrt(calcSqrt));

var calcCos = Number(prompt("Enter an angle to find its cosin"));
document.getElementById("content").innerHTML =
  "<p>Cosin of angle " +
  calcCos +
  "° is " +
  Math.cos((calcCos * Math.PI) / 180).toFixed(4);
