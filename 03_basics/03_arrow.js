const user = {
    username: "Dev",
    price: 2000,

    WelcomeMessage() {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }
}
user.WelcomeMessage()
user.username="Aman"
user.WelcomeMessage()


const chai = () =>{
    let username = "Dev"
    console.log(this.username);
    
}

chai()






// const addTwo = (num1,num2)=>{
//     return num1+num2
// }


const addTwo = (num1,num2)=>({user:"Ram"})

console.log(addTwo(2,5));