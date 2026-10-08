// let num = 4;
// console.log(Math.pow(num,2))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// console.log(Math.abs(num))

// for negative value
// let num1=4;
// console.log(Math.round(num1))


// random number


// random number
// let cards = ["A" , "2","3","4","5","6","7","8","9"]
// let randomCards = cards[Math.floor(Math.random()*cards.length)]
// console.log(randomCards)



// guessing game
// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let guess;
// let attempts = 0;

// while (guess !== secretNumber) {
//     guess = Number(prompt("Guess a number between 1 and 10:"));
//     attempts++;

//     if (guess < secretNumber) {
//         alert("Too low! Try again.");
//     } else if (guess > secretNumber) {
//         alert("Too high! Try again.");
//     } else {
//         alert("🎉 Correct! You guessed it in " + attempts + " attempts.");
//     }
// }



// creating a object
// let obj = {
//     name: "Aman",
//     age: 23,
//     isStudent: true,
//     skills: ["HTML", "CSS", "JavaScript"],
//     address: {
//         city: "Biratnagar",
//         country: "Nepal"
//     }
// };


// let student = {
//     name: "Aman",
//     age: 23,
//     course: "BIM"
// };



// let { name, age, course } = student;

// console.log(name);
// console.log(age);
// console.log(course);





let students = [
    {
        name: "Aman",
        age: 23,
        course: "BIM"
    },
    {
        name: "Ram",
        age: 22,
        course: "BCA"
    },
    {
        name: "Sita",
        age: 21,
        course: "BIM"
    }
];

let bimStudents = students.filter((a) => {
    return a.course === "BIM";
});

console.log(bimStudents);







