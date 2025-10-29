function SetUsername(username){
    this.username=username;
}

function CreateUser(username,email,password){
    SetUsername.call(this,username);
    this.email = email;
    this.password = password;

}

const chai = new CreateUser("Dev","dev@gmail.com","dev@123");
console.log(chai);
