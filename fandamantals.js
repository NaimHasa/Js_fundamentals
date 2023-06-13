/*
1- How to declare a variable using let and const 


*/

const fatherName = 'Mr.Jamal';
let season = 'rainy';
season = 'winter';

/*

6-basic condition: >, <, === , !==, <=, >= 
Multiple conditions: &&, || 


*/

if (fatherName === 'Mr.Jamal' && season === 'hemonto') {
    console.log('Success You login');
}
else {
    console.log("User and pass Don't match")
}


/*

3- Array
--- index,
---length,
---push


*/

// declear Array

const name = ['Naim', 'Tanvir', 'Sadman', 'Hossain']


// declear for loop

for (let i = 0; i < name.length; i++) {
    const names = name[i];
    console.log(names)
};

/*
5. function -------

*/
function multiple(num1, num2) {

    const result = num1 * num2
        ;
    return result;
}

const output = multiple(25, 5);
console.log(output);

/*
6.Object 
3.way to access property by name 

-----------------------

*/

const students = {
    name: 'Naim Hasan',
    id: 150913,
    Dep: 'computer',
    favuriteMovie: [
        'Kalaka', 'canmia'
    ]
};

const myVariable = 'dep';

console.log(students.favuriteMovie[0]); //direct by property
console.log(students['id']); //Access vai property name string
console.log(students[myVariable]); // access vai property name in a variable





















