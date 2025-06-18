const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);

}

const greetings = "Hello-world"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);

}

const map = new Map()

map.set('IN', "INDIA")
map.set('CHI', "CHINA")
map.set('RUS', "RUSSIA")

console.log(map);

for (const [key, value] of map) {
    console.log(key);
}


const myObject = {
    'game1':"Freefire",
    'game2':"Pubg"
}

for (const [Key,value] of myObject) {
    console.log(key); 
}

// Object is not iterable with the help of for of loop