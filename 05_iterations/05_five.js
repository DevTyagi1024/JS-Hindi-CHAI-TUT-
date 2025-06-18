const coding = ["JS", "C++", "C", "Python"]
coding.forEach(element => {
    // console.log(element);

});


function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe)

coding.forEach((element, index, arr) => {
    // console.log(element, index, arr);
})

const myCoding = [
    {
        name: "Dev",
        salary: 10000
    },
    {
        name: "shiva",
        salary: 100000
    },
    {
        name: "Sshubham",
        salary: 1000000
    }
]

myCoding.forEach((element) => {
    console.log(element);

})