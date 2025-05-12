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


// Description for stackk and heap
// Basically the stack is used for priomitive data types and the heap is used for the non primitive data types 

let MyYoutube = "dev@youtube.com"

let anotherYoutube = "updated@gmail.com"
anotherYoutube = "devjs"

console.log(MyYoutube)
console.log(anotherYoutube)


// For heap it is different here the oroigional refernce will be change 

let userOne = {
    myname:"dev"
}

let userTwo = userOne;

userTwo.myname ="aman"

console.log(userOne.myname)