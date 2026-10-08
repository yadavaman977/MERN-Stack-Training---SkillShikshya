// array
// let num = [1,2,3,4,5,6,7,8,9,10];
// console.log(num)
// console.log(num[0])
// console.log(num.length)


// let fruits = ["apple", "banana", "cherry",  "elderberry"]


// fruits.splice(3,0,"mango","orange")
// console.log(fruits)


// let fruits = ["apple", "banana", "cherry", "elderberry"];
// let result = fruits.map(fruit => fruit.length);

// console.log(result);
// let result = fruits.reduce((max, fruit) =>
//     fruit.length > max.length ? fruit : max
// );

// console.log(result);

let fruits = ["apple", "banana", "cherry", "blueberry"];

let result = fruits.reduce((max, fruit) => {
    if (fruit.length > max.length) {
        return fruit;
    } else {
        return max;
    }
});

console.log(result);