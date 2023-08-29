function fizzBuzz(n) {
  var output;
  if (n % 3 === 0 && n % 5 === 0) {
    output = "fizz buzz";
  } else if (n % 3 === 0) {
    output = "fizz";
  } else if (n % 5 === 0) {
    output = "buzz";
  }

  return output;
}

var num = Number(prompt("Eneter a valid number"));
alert(fizzBuzz(num));
