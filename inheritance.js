import Car from "./Classes.js";

class Bmw extends Car {
  brand = "BMW";

  static instancesCount = 0;
  static displayInfo() {
    const info =
      "This class defines properties and methods for BMW cars that inherit from Car";
    console.log(info);
  }

  constructor(model, power) {
    super(model, power);
    console.log("A BMW was created");
    Bmw.instancesCount++;
  }
}

export default Bmw;
