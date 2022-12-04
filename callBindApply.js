function saySomething() {
  const phrase = Array.from(arguments).join(" ");

  console.log(this.name + " says " + phrase);
}

const jane = {
  name: "Jane",
  age: 19,
};

const john = {
  name: "John",
  age: 34,
};

saySomething.call(jane, "hello!");
saySomething.call(john, "goodbye", "!");

saySomething.apply(jane, ["not", "goodbye", "I", "said", "hello"]);

const saySomethingBinded = saySomething.bind(jane);
saySomethingBinded(":)");
