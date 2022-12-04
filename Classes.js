class Car {
  // properties
  model;
  power;
  color = "black";
  transmission = "manual";
  doors = 4;
  // Encapsulation
  #privateField = "top secret";

  // static properties
  static instancesCount = 0;
  // static methods
  static displayInfo() {
    const info = "This class defines properties and methods for Car objects.";
    console.log(info);
  }
  // constructor
  constructor(model, power) {
    this.model = model;
    this.power = power;

    console.log("A object of type Car was instantiated");
    Car.instancesCount++;
  }

  // Methods
  repaint(newColor) {
    this.color = newColor;
  }

  // Overriding existing method
  toString() {
    console.table(this);
  }

  // Encapsulation
  get privateField() {
    return this.#privateField;
  }
}

export default Car;
