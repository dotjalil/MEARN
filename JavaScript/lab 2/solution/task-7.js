function gimmeRandomElement(list) {
  return Math.floor(Math.random() * list.length);
}

function guess2RandomElements(list) {
  var firstRandomIndex = gimmeRandomElement(list);
  var secondRandomIndex;
  do {
    secondRandomIndex = gimmeRandomElement(list);
  } while (firstRandomIndex == secondRandomIndex);
  return [list[firstRandomIndex], list[secondRandomIndex]];
}

var arr = ["Hoisting", "Closure", "Prototypal Inheritance", "Data Types"];

console.log(guess2RandomElements(arr));
