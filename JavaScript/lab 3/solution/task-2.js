// ========================
// 2- Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Ex: input: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

function capitalizeSentence(sentence) {
  var words = sentence.split(" ");
  var output = "";
  for (let i = 0; i < words.length; i++) {
    output += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    output += " ";
  }
  return output.trim();
}

console.log(capitalizeSentence("the quick brown fox"));
