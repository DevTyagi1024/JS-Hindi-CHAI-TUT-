// Two types of data types one is primitive and the other one is non-primitive

// For primitive : String, Number, Boolean, undefined, null, Symbol, BigInt

// For non-primitive (reference) : Array, Objects, Functions

// Javascript is a dynamicaly type language as we did need to statically alocating memories

const Id = Symbol('123')
const newId = Symbol('123')

console.log(Id === newId)

const BigNumber = 3242434543534n

console.log(typeof BigNumber)

// Arrays

const heros = ["thor", "Wanda"];

// Objects

let myObj = {
    name: "dev",
    age: 12
}

// Function

const MyFunction = function (){
    console.log("Hello , This is my function");
}