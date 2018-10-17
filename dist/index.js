"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "chang",
    age: 24,
    gender: "male",
};
const sayhi = (person) => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayhi(person));
//# sourceMappingURL=index.js.map