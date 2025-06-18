const temperature = 41

if (temperature === 41) {
    console.log("Temperature is 41");
}

else {
    console.log("Temperature is different");

}


const balance = 1000

if (balance < 500) {
    console.log("less tham 500");

}

else if (balance < 1200) {
    console.log("less tham 1200");

}

const userLoggedIn = false
const debitCard = true
const LoggedInFromGoogle = true
const LoggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Eligible for shopping");

}

if (LoggedInFromGoogle || LoggedInFromEmail){
    console.log("logged In");

}