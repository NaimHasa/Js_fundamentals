/*
JSON Stringify , parse
*/
const students = {
    name: 'Naim Hasan',
    id: 150913,
    Dep: 'computer',
    favuriteMovie: [
        'Kalaka', 'canmia'
    ]
};

const studentsJson = JSON.stringify(students);
// console.log(studentsJson);

const studentsParse = JSON.parse(studentsJson);
// console.log(studentsParse);


// Object Thek keys and value gulo pete 

const keys = Object.keys(students);
// console.log(keys);
const value = Object.values(students);
// console.log(value);




/*
forEach
&&
map

*/

const numbers = [20, 10, 58, 45, 85, 48];
// numbers.forEach(num => console.log(num))
numbers.map(number => number * 2);

/*
1- for of on array like object
2- loop on an object using for in 
*/

const products = [
    { name: 'Laptop', price: 25000, brand: 'Apple', color: 'selver' },
    { name: 'Desktop', price: 35000, brand: 'Asous', color: 'Black' },
    { name: 'Mobile', price: 5000, brand: 'realme', color: 'green' },
    { name: 'watch', price: 2000, brand: 'xomai', color: 'white' },
    { name: 'small Phone', price: 8000, brand: 'nokia', color: 'green-blue' },

];

///array product add a new product 

//copy products array and than added newProduct 

const addedingNewProduct = { name: 'iPhone 14pro', price: 1500000, color: 'Black' }
const newProduct = [...products, addedingNewProduct];
// console.log(newProduct);


//remove phone means create a new array without the phone

const remaining = products.filter(p => p.name !== 'Mobile')
console.log(remaining);