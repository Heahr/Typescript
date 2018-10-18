"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.data = data;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "20020202", "", "Hi", 123456);
let blockchain = [genesisBlock];
console.log(blockchain);
/*
class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const sik = new Human("sik", 24, "male");

const sayhi = (person: Human): string => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayhi(sik));

export {};

인터페이스는 자바스크립만 쓸경우에 ts쪽에서 좀 더 안정적이라고 함.
private는 javascript에서 했던것 처럼 내부에서 접근가능. 외부에서 접근, 사용불가. 이로인해서 속성 보호등에 좀더 신경을 쓸수가 있음.
만약 react, express, node 등등에서는 class 가 좀더 안정적임.

-> 결과

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const sik = new Human("sik", 24, "male");
const sayhi = (person) => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayhi(sik));
*/
/*
interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: "chang",
    age: 24,
    gender: "male",
};

const sayhi = (person: Human): string => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayhi(person));

export {};

->결과

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
*/ 
//# sourceMappingURL=index.js.map