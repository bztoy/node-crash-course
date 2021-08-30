// Module Wrapper Function (exports)
// (function (exports, require, module, __filename, __dirname) {
// })
// console.log(__filename)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}

module.exports = () => {
    console.log(new Person('John doe', 25));
}