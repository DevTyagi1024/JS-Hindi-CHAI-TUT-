// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("Number 5");

//     }
//     console.log(element);

// }


for (let i = 0; i < 10; i++) {
    console.log(`Outer loop ${i}`);

    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop ${j}`);
        console.log(i + '*' + j + '=' + i * j);

    }

}


const myArray = ["batman","flash","superman"]
console.log(myArray.length)

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}


// Break and Continue keyword

for (let index = 1; index <=20; index++) {
    if(index === 5){
        console.log("Number is 5 now");
        break;
        
    }
    console.log(`Value is ${index}`);
}

for (let index = 1; index <=20; index++) {
    if(index === 5){
        console.log("Number is 5 now");
        continue;
        
    }
    console.log(`Value is ${index}`);
}