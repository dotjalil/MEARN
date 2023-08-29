function locateLetter(word, letter) {
  var matches = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      matches.push(i);
    }
  }
  return matches;
}

console.log(locateLetter("This is sparta", "i"));
