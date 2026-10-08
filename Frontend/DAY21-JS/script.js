// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// ages.sort((a, b) => a - b)
// console.log(ages[0]) // Minimum age
// console.log(ages[ages.length - 1]) // Maximum age



// ages.sort((a, b) => a - b)
// median
// let middleIndex = Math.floor(ages.length / 2)
// let median = ages.length % 2 === 0 ? (ages[middleIndex - 1] + ages[middleIndex]) / 2 : ages[middleIndex]
// console.log(median) // Median age




// average
// let sum = ages.reduce((a, b) => a + b)
// let average = sum / ages.length
// console.log(average) 




// range
// let range = ages[ages.length - 1] - ages[0]
// console.log(range) // Range of ages





// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// middelcountries
// let middleIndex = Math.floor(countries.length / 2)
// let middleCountries = countries.length % 2 === 0 ? [countries[middleIndex - 1], countries[middleIndex]] : [countries[middleIndex]]
// console.log(middleCountries) // Middle countries



// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
//   'Luxembourg'
// ]


// let middle = countries.length / 2;


// let firstHalf = countries.slice(0,middle);
// let secondHalf = countries.slice(middle);



// console.log(firstHalf);
// console.log(secondHalf);














// objects
// const personAccount = {
//     firstName: "Aman",
//     lastName: "Yadav",

//     incomes: [
//         {
//             amount: 30000,
//             description: "Salary"
//         },
//         {
//             amount: 5000,
//             description: "Freelance"
//         }
//     ],

//     expenses: [
//         {
//             amount: 10000,
//             description: "Rent"
//         },
//         {
//             amount: 3000,
//             description: "Food"
//         }
//     ],

//     // Total income
//     totalIncome: function () {
//         return this.incomes.reduce((total, income) => total + income.amount, 0);
//     },

//     // Total expense
//     totalExpense: function () {
//         return this.expenses.reduce((total, expense) => total + expense.amount, 0);
//     },

//     // Account information
//     accountInfo: function () {
//         return `${this.firstName} ${this.lastName}`;
//     },

//     // Add new income
//     addIncome: function (amount, description) {
//         this.incomes.push({
//             amount: amount,
//             description: description
//         });
//     },

//     // Add new expense
//     addExpense: function (amount, description) {
//         this.expenses.push({
//             amount: amount,
//             description: description
//         });
//     },

//     // Account balance
//     accountBalance: function () {
//         return this.totalIncome() - this.totalExpense();
//     }
// };

// // Examples
// console.log(personAccount.accountInfo());

// console.log("Total Income:", personAccount.totalIncome());

// console.log("Total Expense:", personAccount.totalExpense());

// personAccount.addIncome(2000, "Gift");
// personAccount.addExpense(1000, "Transport");

// console.log("New Income:", personAccount.totalIncome());
// console.log("New Expense:", personAccount.totalExpense());

// console.log("Account Balance:", personAccount.accountBalance());










//  const users = [
//     {
//         _id: 'ab12ex',
//         username: 'Alex',
//         email: 'alex@alex.com',
//         password: '123123',
//         createdAt:'08/01/2020 9:00 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'fg12cy',
//         username: 'Asab',
//         email: 'asab@asab.com',
//         password: '123456',
//         createdAt:'08/01/2020 9:30 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'zwf8md',
//         username: 'Brook',
//         email: 'brook@brook.com',
//         password: '123111',
//         createdAt:'08/01/2020 9:45 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'eefamr',
//         username: 'Martha',
//         email: 'martha@martha.com',
//         password: '123222',
//         createdAt:'08/01/2020 9:50 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'ghderc',
//         username: 'Thomas',
//         email: 'thomas@thomas.com',
//         password: '123333',
//         createdAt:'08/01/2020 10:00 AM',
//         isLoggedIn: false
//     }
//     ];

// function signIn(username, password) {
//     const user = users.find(user => user.username === username && user.password === password);
//     if (user) {
//         user.isLoggedIn = true;
//         console.log("Welcome");
//     } else {
//         console.log("Invalid");
//     }
// }
// signIn("Asab", "123456"); 
// signIn("Asab", "123");

