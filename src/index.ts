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