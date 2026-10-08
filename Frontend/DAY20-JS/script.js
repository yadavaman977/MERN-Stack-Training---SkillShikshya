// const arr = ["apple", "banana", "orange"];

// const a = arr.splice(2, 0, "orange", "orange");

// console.log(arr);


// decending order
// let arr = [5, 2, 8, 1, 10];

// arr.sort((a, b) => b - a);

// console.log(arr);



//ascending 
// .sort




















// let arr = [5, 2, 8, 1, 10];
// const numbers = [1, 3, 5, 8, 10];

// const result = numbers.some((num) => num > 5);

// console.log(result);




// let arr = [5, 2, 8, 1, 10];
// const result = arr.some((num) => num > 5);
// console.log(result);









// const name = ["ram","shyam","hari"]

// const result = names.map(name =>
//   name.charAt(0).toUpperCase() + name.slice(1)
// );

// console.log(result);



// const names = ["ram", "shyam", "hari"];


// names.forEach(name => {
//     console.log(name[0].toUpperCase() + name.slice(1));
// });




// objects

const students = [
    {
        name: "John",
        age: 24,
        isStudent: true,
        address : {
          city: "New York",
          state: "NY"
        }
    },
    {
        name: "Jane",
        age: 25,
        isStudent: true,
        address : {
          city: "Kathmandu",
          state: "Bagmati"
        }
    },
    {
        name: "Bob",
        age: 26,
        isStudent: true,
        address : {
          city: "Kathmandu",
          state: "Bagmati"
        }
    }
]


// decending order
// let arr = [5, 2, 8, 1, 10];

// arr.sort((a, b) => b - a);

// console.log(arr);


const bagmatiStudents = 
    students.age.sort((a, b) => b - a);



const names = bagmatiStudents.map(student => {
    return student.name;
});
console.log(names)






// const bagmatiStudents = students.filter(student => {
//     return student.address.state === "Bagmati";
// });


// const names = bagmatiStudents.map(student => {
//     return student.name;
// });
// console.log(names)




// names.forEach(name => {
//     console.log(name);
// });

// let b = students.filter((a) => {
//     return a.state === "Bagmati";
//     return a.map(student => student.name);

// });

// console.log(b);

// const result = students
//     result.filter(student => student.address.state === "Bagmati")
//     result.map(student => student.name);

// console.log(result);




// const students = [
//     {
//         name: "John",
//         age: 24,
//         isStudent: true,
//         address: {
//             city: "New York",
//             state: "NY"
//         }
//     },
//     {
//         name: "Jane",
//         age: 25,
//         isStudent: true,
//         address: {
//             city: "Kathmandu",
//             state: "Bagmati"
//         }
//     },
//     {
//         name: "Bob",
//         age: 26,
//         isStudent: true,
//         address: {
//             city: "Kathmandu",
//             state: "Bagmati"
//         }
//     }
// ];

// students
//     .filter(student => student.address.state === "Bagmati")
//     .forEach(student => console.log(student.name));










