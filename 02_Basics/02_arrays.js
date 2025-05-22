const marvel_heros = ["thor" , "wanda"]

const dc_heros = ["batman","superman"]

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)

const allnewheros = [...marvel_heros,...dc_heros]
console.log(allnewheros)

const anotherarray = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

const realarray = anotherarray.flat(Infinity)
console.log(realarray)

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))