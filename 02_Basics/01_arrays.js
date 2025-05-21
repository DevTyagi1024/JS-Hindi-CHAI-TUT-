const myArr = [2, 4, 6, 2]
// console.log(myArr[2])

const myHeros = ["thor", "wanda"]

// Array methods


myArr.push(9)
// myArr.pop()

myArr.unshift(8)
// myArr.shift()

const newArr = myArr.join()


// console.log(myArr)
// console.log(typeof newArr)

// Slice and splice

console.log("A", myArr)
const myArr1 = myArr.slice(1,3)
console.log(myArr1)


console.log("B", myArr)
const myArr2 = myArr.splice(1,3)
console.log(myArr2)
console.log("C", myArr)  // For splice the actual value is changed that is the main difference between the slice and the splice