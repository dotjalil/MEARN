function Rectangel(width, height) {
  this.area = width * height;
  this.perimeter = (width + height) * 2;
}

Rectangel.prototype.toString = function () {
  return `This rectangle has an Area of: ${this.area} and a Perimeter of: ${this.perimeter}`;
};

var myRect = new Rectangel(5, 8);
console.log(myRect.toString());
