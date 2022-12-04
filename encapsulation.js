class PrivateClass {
  #id;
  #firstName;
  #lastName;
  #details = "";

  static #count = 0;

  constructor(firstName, lastName) {
    this.#id = PrivateClass.#count++;
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get id() {
    return this.#id;
  }

  /**
   * @param {string} description
   */
  set details(description) {
    this.#details = description;
  }

  getPersonInfo() {
    return `${this.#firstName} ${this.#lastName}: ${this.#details}`;
  }
}

// const person = new PrivateClass("John", "Doe");
// console.log(person.firstName);
// console.log(person.#firstName);
// console.log(person.id);
// person.details = "35 years old, taxi driver.";
// console.log(person.getPersonInfo());
