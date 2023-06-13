const products = [
    { name: 'Laptop', price: 25000, brand: 'Apple', color: 'selver' },
    { name: 'Desktop', price: 35000, brand: 'Asous', color: 'Black' },
    { name: 'Mobile', price: 5000, brand: 'realme', color: 'green' },
    { name: 'watch', price: 2000, brand: 'xomai', color: 'white' },
    { name: 'small Phone', price: 8000, brand: 'nokia', color: 'green-blue' },

];
// console.log(products);

// array of  map 

const barand = products.map(product => (product.brand));
// console.log(barand);

const price = products.map(product => product.price);
// console.log(price);
const color = products.map(product => product.color);
// console.log(color);


/*
forEach
*/


// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));

products.forEach(product => {
    // --------------
});


/*
 filter 

*/
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);


const specificName = products.filter(p => p.name.includes('c'));
// console.log(specificName);

/*
Find
*/

const special = products.find(p => p.name.includes('a'))
console.log(special);










