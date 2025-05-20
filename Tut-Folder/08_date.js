let myDate = new Date ()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let createdDate = new Date (2023,3,20)
console.log(createdDate.toDateString())


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(createdDate.getTime())

let newDate = new Date ()
console.log(newDate.getMonth())
console.log(newDate.getDay())


newDate.toLocaleString('default')