class Shape {
  perimeter() {
    return null;
  }
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.radius = r;
  }
  perimeter() {
    return Math.PI * this.radius * 2;
  }
}

class Rectangle extends Shape {
  constructor(w, h) {
    super();
    this.width = w;
    this.height = h;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle(5);
console.log("Circle's perimeter is: ", circle.perimeter());

const rectangle = new Rectangle(2, 3);
console.log("Rectangle's perimeter is: ", rectangle.perimeter());
