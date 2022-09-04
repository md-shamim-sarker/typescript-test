let a: string; // explicit type
let b: string[] = []; // explicit type
let c: (string | number)[] = []; // union type
let d: string | number | boolean;
let e: object; // array is one kind of object
let f: {
    name: string,
    age: number,
    adult: boolean;
};

a = 'Shamim';
b = ['Shamim', 'Sneha'];
c = ['Shamim', 30];

console.log(c);