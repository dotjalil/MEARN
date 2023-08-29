var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

var isString = fruits.every((element) => typeof element === "string");

var startsWithA = fruits.some((element) => element[0] === "a");

var onlyStartsWithBOrS = fruits.filter(
  (element) => element[0] === "b" || element[0] === "s"
);

var iLikeArray = fruits.map((element) => `I like ${element}`);

iLikeArray.forEach((element) => console.log(element));

/**
 * Tests
 */
// console.log("isString: ", isString);
// console.log("startsWithA", startsWithA);
// console.log("onlyStartsWithBOrS", onlyStartsWithBOrS);
// console.log(onlyStartsWithBOrS);
// console.log(iLikeArray);
