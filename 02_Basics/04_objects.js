const tinderUser = {}


tinderUser.id = "21323"
tinderUser.name = "Dev"

console.log(tinderUser)

const regularUser = {
    email: "dev@gmail.com",
    fullname: {
        firstname: "Dev",
        Lastname: "Tyagi"
    }
}

console.log(regularUser.fullname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = Object.assign(obj1,obj2)

const obj3 = { ...obj1, ...obj2 }

console.log(obj3)

const Users = [
    {

    },
    {

    },
    {

    }
]

Users[1].email
console.log(tinderUser)
