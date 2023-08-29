function Shape(shapeName) {
  this.name = shapeName;
  this.area = this.getArea();
  this.perimeter = this.getPerimeter();
}

Shape.prototype.getArea = function () {
  if (this.type === "circle") {
    return Math.PI * Math.pow(this.diameter / 2, 2);
  } else if (this.type === "square") {
    return this.side * this.side;
  } else if (this.type === "triangle") {
    return 0.5 * (this.base * this.height);
  }
};

Shape.prototype.getPerimeter = function () {
  if (this.type === "circle") {
    return Math.PI * this.diameter;
  } else if (this.type === "square") {
    return 4 * this.side;
  } else if (this.type === "triangle") {
    return this.base + this.s1 + this.s2;
  }
};

Shape.toString = function () {
  return "Hello :))";
};

function Circle(d) {
  this.diameter = d;
  this.type = "circle";
  Circle.count++;
  Shape.call(this);
}

Circle.prototype = Object.create(Shape.prototype);
Circle.count = 0;

function Square(s) {
  this.side = s;
  this.type = "square";
  Square.count++;
  Shape.call(this);
}

Square.prototype = Object.create(Shape.prototype);
Square.count = 0;

function Triangle(b, h, s1, s2) {
  this.base = b;
  this.height = h;
  this.type = "triangle";
  Triangle.count++;
  Shape.call(this);
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.count = 0;

var c1 = new Circle(10);
var c2 = new Circle(10);
console.log(c1.area);
console.log(c1.perimeter);
console.log(Circle.count);
