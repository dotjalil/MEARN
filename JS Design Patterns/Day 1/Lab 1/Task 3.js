// 3. decorator pattern example

// Adds a non-essential feature (decoration) to a class for better re-usibility

class HostingPlan {
  constructor(months) {
    this.duration = months;
  }
  getPrice() {
    return this.duration * 3.99;
  }
}

function addSSL(hostingPlan, years) {
  var originalHostingPrice = hostingPlan.getPrice();
  hostingPlan.getPrice = function () {
    return originalHostingPrice + years * 10;
  };
}

var myHost = new HostingPlan(10);

console.log(myHost.getPrice()); // 39.9

addSSL(myHost, 2);

console.log(myHost.getPrice()); // 59.9
