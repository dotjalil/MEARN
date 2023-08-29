var result = 0;
var userInput;

while (result < 100 && Number(userInput) !== 0) {
  userInput = prompt("Enter a number!");
  result += Number(userInput);
}

alert(result);
