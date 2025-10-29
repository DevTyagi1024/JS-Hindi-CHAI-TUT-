class user{
    constructor(username,user,password){
        this.username = username;
        this.user= user;
        this.password = password;
    }

    encryptPassword(){
        return this.password
    }

    changeUserName (){
       return  this.username.toUpperCase()
    }
}

const newUser = new user("Aman","dev","password")
console.log(newUser.changeUserName());
