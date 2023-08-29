// 1- Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers.
// Ex: input : [1,2,3,4,5]
// Expected Output : 2,4

function find2ndLowestAndGreatest(numbers) {
  var numbersCpy = [];
  for (let i = 0; i < numbers.length; i++) {
    numbersCpy.push(numbers[i]);
  }
  numbersCpy.sort();
  numbersCpy.pop();
  numbersCpy.shift();
  return [numbersCpy[0], numbersCpy[numbersCpy.length - 1]];
}

console.log(find2ndLowestAndGreatest([1, 2, 3, 4, 5]));
