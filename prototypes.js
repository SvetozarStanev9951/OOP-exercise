import Bmw from "./inheritance.js";

let bmw = new Bmw("M5 Competition", 632);

function showPrototypeChain(object) {
  console.warn("");
  do {
    object = Object.getPrototypeOf(object);
    console.log(object);
  } while (object);
}

showPrototypeChain(bmw);

const myObj = {
  name: "John",
  age: 35,
  sayHi: () => console.log("Hello"),
};

const anotherObj = Object.create(myObj, {
  name: {
    value: "Jake",
  },
  age: {
    value: 55,
  },
});

anotherObj.sayHi();

showPrototypeChain(anotherObj);
showPrototypeChain(myObj);
