let a = 300

if (true) {
    let a = 10
    console.log("Inner:", a);
}

console.log(a);



function one() {
    const username = "dev"

    function two() {
        const website = "Youtube"
        console.log(username);

    }

    // console.log(website);

    two()
}

one()


if (true) {
    const username = "aman "

    if (username === "aman ") {
        const website = "google.com"
        console.log(username + website);
    }

    // console.log(website);

}

// console.log(username);


// Imteresting


console.log(addOne(5));
function addOne(num) {
    return num + 1
}



console.log(addTwo(2));
const addTwo = function (num) {
    return num + 2
}




