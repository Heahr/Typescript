import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    //method만들건데, 이것은 static method이며, class block 안에있으며 클래스가 생성되지 않았어도 호출할수있는 method이다. -> 클래스안에서 자유롭게사용가능.
    //ex) Block.calculateBlockHash 이가능 -> 없으면 let a = new Block 이후에 a.calculateBlockHash 으로 가능.
    static calculateBlockHash = (
        index: number, 
        previousHash: string, 
        timestamp: number, 
        data: string
    ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
        this.index = index;
        this.hash = hash;
        this.data = data;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
    }
}

/*
블록체인
데이터 분산 처리 기술. -> 네트워크에 참여하는 모든 사용자가 모든 거래 내역 등의 데이터를 분산, 저장하는 기술.
거래가 계속 이루어지다보면 모든 사용자는 거래내역을 보유하고 있어서 거래내역을 확인할 때는 모든 사용자가 보유한 장부를 대조해야한다. 그래서 공공거래장부, 분산거래장부라고 불리기도 한다고함.

출처 : https://brunch.co.kr/@banksalad/228
*/

const genesisBlock: Block = new Block(0, "20020202", "", "Hi", 123456);

let blockchain: Block[] = [genesisBlock];

console.log(blockchain);
//yarn add crypto-js 추가사용

const getBlockchain = () : Block[] => blockchain;

const getLatesBlock = () : Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export {};

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