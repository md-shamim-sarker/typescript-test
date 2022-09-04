// Inference

// Variable related
let title = 'Shamim';
title = 'Snigdha'; // allowed
// title = 35; // not allowed
// title = true; // not allowed
// title = []; // not allowed
// title = {}; // not allowed
// title = null; // not allowed

let details;
details = 10;  // allowed
details = 'Shamim';  // allowed
details = true;  // allowed
details = [];  // allowed
details = {};  // allowed
details = null;  // allowed

// Array related
const names = ['Shamim', 'Snigdha', 'Sneha'];
names.push('Sanin'); // allowed
// names.push(30); // not allowed

const age = [];
age.push('Shamim');
age.push(30);

// Object related
const person = {
    names: 'Shamim',
    age: 30,
    isStudent: true,
};
person.names = 'Snigdha'; // allowed
// person.names = 30; // not allowed
// person.color = 'White' // not allowed

// Function related
const myFunction = (a: number, b: number) => {
    return a + b;
};
// console.log(myFunction(10, 5));