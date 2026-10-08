// let name = "AMAN";
// let age = 20;
// let isStudent = true;

// string Methods
// .length
// output-4
// const str = name.length
// console.log(str)

// .toUpperCase()
// output-AMAN
// const str = name.toUpperCase()
// console.log(str)

// .toLowerCase()
// output-aman
// const str = name.toLowerCase()
// console.log(str)

// .trim()
// output-remove white space - AMAN
// const str = name
// console.log(str.trim())

// .trimstart()
// output-remove starting white space - AMAN
// const str = name
// console.log(str.trimStart())

// .trimstart()
// output-remove end white space - AMAN
// const str = name
// console.log(str.trimEnd())

// .slice(start,end) 0 dekhi start hunxa last ko lidaina
// output- ama
// const str = name;
// console.log(str.slice(0,3))

// .slice(start,end) - ma last dekhi linxa
// output- NA
// const str = name;
// console.log(str.slice(-2))

// .replace(word,replce) - ma last dekhi linxa
// output- Yadav - replace from starting only
// const str = name;
// console.log(str.replace("AMAN","Yadav"))

// .replaceAll(word,replace) - ma last dekhi linxa
// output- Yadav - replace from starting and all
// const str = name;
// console.log(str.replaceAll("AMAN","Yadav"))




// .charAt(number) - ma last dekhi linxa
// output- 2- give one chacter output that is a
// const str = name;
// console.log(str.charAt(0))

// .charAt(number) and trim() - ma last dekhi linxa
// output- space hatayera dinxa
// const str = name;
// console.log(str.trim().charAt(0))

// includes("word")-serially hercha xa ki xaina chacter or word
// output-true
// const str = name;
// console.log(str.includes("AMAN"))



// startsWith("chacter")- start dekhiserially hercha xa ki xaina chacter or word
// output- false
// const str = name;
// console.log(str.startsWith("M"))

//endsWith("chacter")- end dekhiserially hercha xa ki xaina chacter or word
// output- false
// const str = name;
// console.log(str.endsWith("M"))

//endsWith("chacter")- end dekhiserially hercha xa ki xaina chacter or word
// output- false
// const str = name;
// console.log(str.endsWith("M"))

// indexOf - gives index from starting
// output - 1
// const str = name;
// console.log(str.indexOf("M"))


// indexOf - gives index from last
// output - 1
// const str = name;
// console.log(str.lastIndexOf("N"))


// at() - charcterAt same property - value linxa yesle
// output - N
// const str = name;
// console.log(str.at("-1"))


// split("") - string layi array ma convert gardinxa anii array method lagauna mlcha
// output - (4) ['A', 'M', 'A', 'N']
// const str = name;
// console.log(str.split(""))


// .join()- join two string
// split("Aaman").join(",")
// output aman,yadav


// repeat()- its repeat
// output = aman aman
// const str = name;
// console.log(str.repeat("2"))


// padStart(3,"0") = total ma word 005 starting ma
// output - 005
// const str = name;
// console.log(str.padStart(2,"3"))


// padEnd(3,"0") = total ma word 005 end ma
// output - 500
// const str = name;
// console.log(str.padEnd(2,"3"))




// variable kasari dekhaunne
// console.log("my name is"+""+name)
// output-my name is AMAN


// tempalete literals
// output-my name is AMAN
// console.log(`my name is ${name}`)


// output 205
// string + number is string
// console.log(`${name} +  ${age}`)


















// operators in js
// let a = 10;
// let b = 3;


// arithmetic operators
// Used for mathematical calculations


// add
// console.log(a + b); // 13
// subtract
// console.log(a - b); // 7
// multiply
// console.log(a * b); // 30
// division
// console.log(a / b); // 3.333
// modulas
// console.log(a % b); // 1
// Power
// console.log(a ** b); // 1000



// Assignment Operators
// Used to assign or update values.
// let x = 10; 

// 15
// console.log(x += 5) 

// 12
// console.log(x -= 3) 

// 24
// console.log(x *= 2 ) 

// 6
// console.log(x /= 4) 

// 2
// console.log(x %= 4)


// increment
// decrement
// pre and post
// let a = 10;
// let b = 3;


// 11-pre
// pahile incement garxa ani balla print garxa
// console.log(++a)

// 12-post
// ek choti prent garepaxi balla increment garxa
// a++
// console.log(a)



        // let name = "5"
        // let a =5
        // let b=2

// true
// value matra check garxa (==)
// console.log(name == a)

// false
// value and type  check garxa (===)
// console.log(name === a)

// true
// value and !-is not equal to  check garxa (==)
// console.log(name !== a)


// true
// greater than or equal to
// console.log(a>=b)



// false
// less than or equal to
// console.log(a<=b)














// comparison operators
// Used to compare two values. They return true or false.
// Important: Prefer === and !== because they check both value and data type.
// let a = 10;
// let b = 5;

// console.log(a > b);   // true
// console.log(a < b);   // false
// console.log(a >= b);  // true
// console.log(a <= b);  // false
// console.log(a == b);  // false
// console.log(a != b);  // true
// console.log(a === b); // false
// console.log(a !== b); // true






// Logical Operators
// Used to combine conditions.


// AND &&
// Both conditions must be true.
// let age = 20;
// console.log(age >= 18 && age <= 30);
// true



// OR ||
// At least one condition must be true.
// let age = 16;
// console.log(age < 18 || age > 60);
// true






// NOT !
// Reverses the result.
// let isStudent = true;
// console.log(!isStudent);
// false




// 5.Increment and Decrement
// let count = 5;

// count++;
// console.log(count); // 6

// count--;
// console.log(count); // 5
// ++ → increase by 1
// -- → decrease by 1









// Ternary Operator

// Short way of writing if...else.

// let age = 20;

// let result = age >= 18 ? "Adult" : "Minor";

// console.log(result);
// Adult

// Syntax:

// condition ? valueIfTrue : valueIfFalse






//  String Operator

// + can join strings.

// let firstName = "Aman";
// let lastName = "Yadav";

// console.log(firstName + " " + lastName);
// Aman Yadav








// Type Operators
// typeof

// Checks the data type.

// let name = "Aman";
// let age = 23;

// console.log(typeof name); // string
// console.log(typeof age);  // number





// instanceof

// Checks whether an object belongs to a particular type/class.

// let fruits = [];

// console.log(fruits instanceof Array);
// true











// typeconversion
// String → Number
// Number()
// let age = "20";

// let result = Number(age);

// console.log(result);        // 20
// console.log(typeof result); // number





// Number → String
// String()
// let age = 20;

// let result = String(age);

// console.log(result);        // "20"
// console.log(typeof result); // string


// You can also use:

// let age = 20;

// let result = age.toString();

// console.log(result); // "20"











// alert
// alert-like popup
// alert("hello world")






// promt -  used to give input to the user
// prompt() always returns a string.
// prompt() → takes input → String
// Number(prompt()) → takes input → Number

// let name = prompt("Enter your name:");

// console.log(name);








// Convert prompt input to Number
// let age = Number(prompt("Enter your age:"));

// console.log(age);
// console.log(typeof age);
















// Conditionals in JavaScript

// Conditionals are used to make decisions in a program.





// if Statement

// The if statement runs code only when the condition is true.

// let age = 20;

// if (age >= 18) {
//     console.log("You are an adult");
// }

// Output: You are an adult







// if...else

// Used when there are two possibilities.

// let age = 16;

// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

// Output: Minor





// if...else if...else

// Used when you have multiple conditions.

// let marks = 75;

// if (marks >= 80) {
//     console.log("A");
// } else if (marks >= 60) {
//     console.log("B");
// } else if (marks >= 40) {
//     console.log("C");
// } else {
//     console.log("Fail");
// }

// Output: B






// Nested if

// An if inside another if.

// let age = 20;
// let hasLicense = true;

// if (age >= 18) {
//     if (hasLicense) {
//         console.log("You can drive");
//     }
// }

// Output:You can drive











// Using &&

// Both conditions must be true.

// let age = 20;
// let hasLicense = true;

// if (age >= 18 && hasLicense) {
//     console.log("You can drive");
// }









// Using ||

// At least one condition must be true.

// let day = "Saturday";

// if (day === "Saturday" || day === "Sunday") {
//     console.log("Holiday");
// }

// Output:Holiday







// Ternary Operator

// A short way to write if...else.

// let age = 20;

// let result = age >= 18 ? "Adult" : "Minor";

// console.log(result);

// Output:Adult

// condition ? true result : false result








// switch Statement

// Useful when checking one value against many possible values.

let day = 2;

switch (day) {
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}

// Output: Monday











// break vs continue

// break → Stops the loop completely.

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) break;
//   console.log(i);
// }

// Output: 1 2

// continue → Skips the current iteration.

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// Output: 1 2 4 5









































































































