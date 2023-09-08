/**
2-You have been hired to develop an application for a car shop. 
The owner of the car shop wants an easy to navigate interface with 
the ability to document all the types of vehicles that he fixes in his shop. 
On a daily basis, through his and his employers hands pass around dozen different 
types of vehicles. You need to find a clean and concise way to insert all those types 
of cars into your database.
*/

// Factory Pattern
class Car {
  constructor(make, workDone, supervisor) {
    this.make = make;
    this.workDone = workDone;
    this.supervisor = supervisor;
  }
}

class VW extends Car {
  constructor(owner, workDone, supervisor) {
    super("Volkswagen", workDone, supervisor);
    this.owner = owner;
  }
}

class Skoda extends Car {
  constructor(owner, workDone, supervisor) {
    super("Skoda", workDone, supervisor);
    this.owner = owner;
  }
}

class Siat extends Car {
  constructor(owner, workDone, supervisor) {
    super("Siat", workDone, supervisor);
    this.owner = owner;
  }
}

var car1 = new VW("Mr. Mohamed", "Changed oil", "Khaled");
var car2 = new Siat("Mr. Ahmed", "Fixed water pump", "Amin");
var car3 = new Skoda("Mr. Saad", "Cooling fan replacement", "Khaled");
var car4 = new VW("Mr. Khalifa", "New spark plugs", "Amin");

console.log(car1, car2, car3, car4);
