function generateArr() {
  var results = [];
  for (var i = 0; i < 3; i++) {
    (function () {
      var j = i;
      results.push(function () {
        console.log(j);
      });
    })();
  }
  return results;
}

var myArr = generateArr();
myArr[0]();
myArr[1]();
myArr[2]();
