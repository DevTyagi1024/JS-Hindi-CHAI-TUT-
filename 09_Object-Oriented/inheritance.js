class user {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username : ${this.username}`);

    }
}

class teacher extends user {
    constructor(username, email) {
        super(username)
        this.email = email;
    }

    addCourse(){
        console.log(this.username);
        
    }
}

const chai = new teacher ("Dev","dev@gmail.com")

chai.addCourse();