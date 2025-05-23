// Object Literals

const mySymbol = Symbol("key1")

const jsUser = {
    name : "dev",
    age : 26,
    email:"dev@gmail.com",
    "full name" : "Dev Tyagi",
    [mySymbol] : "mysym1"
}

// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySymbol])

// jsUser.email=("devupdated@gmail.com")
// Object.freeze(jsUser)
// jsUser.email=("xfszdfdf")
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Have a nice day")
}

jsUser.greeting2 = function(){
    console.log(`Hello js user ,${this.name}`)
}

console.log(jsUser.greeting2())

console.log(jsUser.greeting())