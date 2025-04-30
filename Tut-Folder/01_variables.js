const accountId = 44321
let accountName = "Dev Tyagi"
var accountPassword = "myname1234"
accountCity = "Deoband"

// accountId = 2  Not allowed (assignment to constant variables)
accountName = "new name"

accountPassword = "myname4321"

accountCity = "Delhi"

console.table([accountId, accountName, accountPassword, accountCity])

/*
Note : var is not prefer type due to the iossue of the block scope and functional scope
*/
