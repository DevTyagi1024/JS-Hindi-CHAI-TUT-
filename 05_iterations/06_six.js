const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNum.filter((item) => {
    return item > 4
})

console.log(newNums);

// const allNums=[3,5,3,4,6,3,2,6,9]

// allNums.forEach((num)=>{
//     if(num > 4){
//         console.log(num);      
//     }
// })


const books = [
    {
        title: "Book One",
        Year: 1981,
        genre: "history"
    },

    {
        title: "Book two",
        Year: 1982,
        genre: "history"
    },

    {
        title: "Book three",
        Year: 1983,
        genre: "Science"
    },

    {
        title: "Book four",
        Year: 1984,
        genre: "Politics"
    },

    {
        title: "Book five",
        Year: 1985, 
        genre: "history"
    }
]

let userBooks = books.filter((bk) => bk.genre === 'history')

console.log(userBooks);
