function myName() {
    console.log("D");
    console.log("E");
    console.log("V");
}

myName()

function addition(num1, num2) {
    let result = num1 + num2;
    return result;
}

const result = addition(10, 3)
console.log("Result :", result)


function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} Just logged In`
}

console.log(loginUserMessage("Dev"));


function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 300, 22, 3, 24,));





const User ={
    name:"Dev",
    salary: 400000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and the salary is ${anyobject.salary}`);
}

console.log(handleObject({
    name:"Aman",
    salary:2000000
}));



const myArray = [200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray));




