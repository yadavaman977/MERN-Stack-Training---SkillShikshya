// call back
// function greet(name,callback){
//     console.log("Hello" + name);
//     callback();
// }

// function goodbye(){
//     console.log("goodbye")
// }
// greet ("john",goodbye)


// function getuser(id,callback){
//     setTimeout(()=>{
//         console.log("fetching data from database");
//         callback({id:id, name:"john"});
//     },2000)
// }
// function getPost(user,callback){
//         setTimeout(()=>{
//             console.log("fetching posts from database");
//             callback(["post1","post2","post3"]);
//         },2000)
// }

// function getComments(post,callback){
//     setTimeout(()=>{
//         console.log("fetching comments from database");
//         callback(["comment1","comment2","comment3"]);
//     },2000)
// }
// getuser(1,(user)=>{
//     console.log(user);
//     getPost(user,(posts)=>{
//         console.log(posts);
//         getComments(posts,(comments)=>{
//             console.log(comments);
//         })
//     })
// })

// promise
// direct value aaudaina
// promise is a object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous fashion, making it easier to read and maintain.
// promise has three states
// 1. pending: initial state, neither fulfilled nor rejected.
// 2. fulfilled: meaning that the operation completed successfully.
// 3. rejected: meaning that the operation failed.
// const promise = new Promise((resolve,reject)=>{
//     const success = true;
//     if(success){
//         resolve("data fetched successfully");
//     }else{
//         reject("error fetching data");
//     }
// })
// console.log(promise)

// // to get real value we use then and catch method
// promise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("promise is completed");
// })





// console.log("first");

// setTimeout(() => {
//     console.log("second");

//     Promise.resolve().then(() => {
//         console.log("third");
//     });

//     console.log("fourth");
// });


// sabai true hunnu parcha
// const promise1 = Promise.resolve("Task 1");
// const promise2 = Promise.resolve("Task 2");
// const promise3 = Promise.resolve("Task 3");

// Promise.all([promise1, promise2, promise3])
//     .then((result) => {
//         console.log(result);
//     });



// promise.any()-first true value



// const p1 = Promise.resolve("Task 1 completed");

// const p2 = Promise.reject("Task 2 failed");

// const p3 = Promise.resolve("Task 3 completed");

// Promise.allSettled([p1, p2, p3])
//     .then((results) => {
//         console.log(results);
//     });







// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("P1 finished");
//     }, 2000);
// });

// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("P2 finished");
//     }, 1000);
// });

// Promise.race([p1, p2])
//     .then((result) => {
//         console.log(result);
//     });









// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("P1 success");
//     }, 3000);
// });

// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("P2 success");
//     }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("P3 failed");
//     }, 500);
// });

// Promise.any([p1, p2, p3])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });





// async function hello() {
//     return "Hello Aman";
// }

// console.log(hello());



// async function getData() {

//     const result = await Promise.resolve("Data received");

//     console.log(result);
// }

// getData();



// async function getData() {

//     const user = await Promise.resolve("User data");

//     console.log(user);

//     const posts = await Promise.resolve("Post data");

//     console.log(posts);

//     const comments = await Promise.resolve("Comment data");

//     console.log(comments);
// }

// getData();








// async function getData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

//     const data = await response.json();

//     console.log(data);
// }

// getData();
