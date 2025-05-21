const myname = "dev"

const myRepoCount = 50

console.log(myname + myRepoCount)  //Old way of writing the console 

console.log(`My repo county is ${myRepoCount}`)  // This the new way of writing the console

const newString = new String('dev-hc-com')

console.log(newString[1])
console.log(newString.length)
console.log(newString.toUpperCase())
console.log(newString.indexOf('v'))

const anotherString = newString.substring(0,4)
console.log(anotherString)

const secondString = newString.slice(-4,4)
console.log(secondString)

const newStringOne = "   dev    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://dev%20gmail.com"

console.log(url.replace('%20','-'))

const finalString = newString.split('-')
console.log(finalString)