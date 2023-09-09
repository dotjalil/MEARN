/* 
4-Search for another example of liskove principle and implement it
*/

class Shape {
  calculateArea() {
    // Default implementation
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const rec1 = new Rectangle(10, 20);
const cir1 = new Circle(10);

console.log(rec1.calculateArea(), cir1.calculateArea());
