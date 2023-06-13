/*
1. Array destructuring 

*/

const numbers = [50, 60];
// const x = numbers[0];
// const y = numbers[1];

// // console.log(x, y);


// const [x, y] = [50, 60];
const [x, y] = numbers;
console.log(x, y)



// object destructuring 



// const [name, id] = { name: 'Naim', id: 150913 };
// const [name, id] = { name: 'Naim', id: 150913 };

const studentInfo = {
    name: 'Naim Hasan',
    id: 150913,
    dep: 'Computer',
    favColor: {
        mostLike: 'Black & white',
        favMovie: {
            Name: 'Jan pakhi'
        }
    }


}

const { name, dep } = studentInfo;
const { mostLike } = studentInfo.favColor;






