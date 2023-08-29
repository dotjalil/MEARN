var word = prompt("Enter a word!");
var isSensitive = confirm("Consider case sensitivity?");
console.log(isSensitive);

if (!isSensitive) {
  word = word.toLowerCase();
}

var reverseWord = word.split("").reverse().join("");

if (reverseWord === word) {
  alert(`${word} is palindrome!`);
} else {
  alert(`${word} is not palindrome!`);
}
