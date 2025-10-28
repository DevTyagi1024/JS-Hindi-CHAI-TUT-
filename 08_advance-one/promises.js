new Promise(function (resolve, reject) {

    // Do an async task

    setTimeout(function () {
        console.log(alert());
        resolve();
    }, 1000)

}).then(function () {
    console.log("Promise consumed");
})


// Second promise to understand the basics

let myPromise = new Promise(function (resolve, reject) {
    let success = true;

    if (success) {
        resolve();
    }

    else {
        reject();
    }
})

myPromise
    .then(function (message) {
        console.log("Database Connected");
    })
    .catch(function (error) {
        console.log("Database is not connected");
    })
    .finally(function (error) {
        console.log("The promise is either resolved or rejected");
    });


// Third promise for some advanced information

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "Devtyagi638@gmail.com",
            Name: "Dev Tyagi",
        })
    }, 1000)
})

promiseThree
    .then(function (user) {
        console.log(user);

    });


// Fourth promise with chaining of then()

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;

        if (error == true) {
            resolve({
                username: "aman123@gmail.com",
                id: "123",
            })
        }
        else {
            reject("Error")
        }
    }, 1000)
})

promiseFour
    .then(function (user) {
        console.log(user);
        return user.username
    })
    .then(function (username) {
        console.log(username);

    })
    .catch(function (message) {
        console.log(message);
    })
    .finally(function () {
        console.log("The promise is either resolved or rejected");
    });


// Promise five


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {

        let error = true;

        if (error == true) {
            resolve({
                username: "tyagi123@gmail.com",
                id: "934",
            })
        }
        else {
            reject("New Error")
        }
    }, 1000)
});

async function consumepromise() {
    try {
        const response = await promiseFive;
        console.log(response);
    }
    catch (error) {
        console.log(error)
    }
}

consumepromise();



// Promises with the fetch()

// async function getallusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data)
//     }

//     catch {
//         console.log("Fetch error")
//     }
// }

// getallusers();

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

    })

    .catch(function (error) {
        console.log(error);
    })