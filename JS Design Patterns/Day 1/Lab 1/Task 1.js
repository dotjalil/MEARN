// 1-You have been asked to develop an application for a company X.
// The company has only one chief executive officer (CEO) . The
// application store some information a bout the CEO like: name,
// age and address. You need to find a clean and concise
// implementation of the CEO class in the application .

// Singleton pattern
var ceo = null;

class CEO {
  constructor(name, age, address) {
    if (ceo) return ceo;
    this.name = name;
    this.age = age;
    this.address = address;
    ceo = this;
  }
}

var myCeo = new CEO("Mohamed", 37, "Maadi");
var newCeo = new CEO("Ahmed", 37, "Maadi"); // Also returns CEO { name: 'Mohamed', age: 37, address: 'Maadi' }

console.log(myCeo, newCeo);
