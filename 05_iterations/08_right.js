const myNums = [1, 4, 5, 3]

const numSums = myNums.reduce(function (acc, currval) {
    console.log(`acc ${acc} and currval ${currval}`);

    return acc + currval
}, 0)

console.log(numSums);



const courses = [
    {
        item: "python",
        price: 1000
    },

    {
        item: "java",
        price: 3000
    },

    {
        item: "C++",
        price: 2000
    }
]

// let sum = 0
// courses.forEach((element) => {

//     sum += element.price
// });

// console.log(sum);


const priceSum = courses.reduce((acc, item) => acc + item.price, 0)
console.log(priceSum);
