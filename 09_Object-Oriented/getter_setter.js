class user {
    constructor(email, password) {
        this.password = password;
        this.email = email;
    }

    // get password() {
    //     return `${this._password}name`
    // }

    // set password(value){
    //     this._password = value;
    // }

    get email() {
        return `Email is not there`;
    }

    set email(value) {
        if (!value.includes("@")) {
            console.log("Invalid email address!");
        } else {
            this._email = value;
        }
    }
}

const dev = new user("dev@gmail.com", "@dev");

// console.log(dev.password);
console.log(dev.email);

