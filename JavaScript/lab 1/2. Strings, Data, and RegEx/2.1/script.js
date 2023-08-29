const userInput = prompt("Please enter a string:");

const regex = /e/g;

const matches = userInput.match(regex);
console.log(matches);

if (matches) {
  const count = matches.length;
  alert(`The number of 'e' characters in the string is: ${count}`);
} else {
  alert("No 'e' characters found in the string.");
}
