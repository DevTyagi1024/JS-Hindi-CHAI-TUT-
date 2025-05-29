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
