// scope
// globol , block , function


// Global Scope
// output - Aman
// output-Hello Aman 
// let name = "Aman"
// function Greet(){
//     console.log("Hello"  + " " +name)
// }
// console.log(name)
// Greet()


// function scope
// output for console.log(name)  -name is not defined
// output for Greet() - Hello Aman
// function Greet(){
//     let name = "Aman"
//     console.log("Hello"  + " " +name)
// }
// console.log(name)  
// Greet()




// block scope
// output-hello yadav
// output - name is not defined
// if(1>5){
//     let name = "aman";
//     console.log("Hello" + " " + name)
// }
// else{
//      let name = "yadav";
//     console.log("Hello" + " " + name)

// }
// console.log(name)



// closures
// inner function le outer function ko variable access garna dinxa
// output-Hello John
// function Outer(){
//     let name = "John"
// function Inner(){
//     console.log("Hello"+" "+name)
// }
// Inner()
// }
// Outer()



// output-hello john
// when we add return function then we call function like this Outer()()
// output - Hello John
// function Outer(){
//     let name = "John"
// return function Inner(){
//     console.log("Hello"+" "+name)
// }
// }
// outer() not output
// Outer()()



// output 1 1 1 1
// function Counter(){
//     let count = 0
//     count ++
//     console.log(count)
// }
// Counter()
// Counter()
// Counter()
// Counter()


// yo ni aaudaina because address vaneko xain aso we use variable
// function Counter(){
//     let count = 0
// function Increment{
//     count ++
//     console.log(count)
// }
// return Increment    
// }
// Counter()()
// Counter()()
// Counter()()
// Counter()()

// output 1 2 3
// function Counter(){
//     let count = 0
// function Increment(){
//     count ++
//     console.log(count)
// }
// return Increment    
// }

// const  increment = Counter()
// increment()
// increment()
// increment()



// decrement
// output 1 2 1 0
// function Counter(){
//     let count = 0
// function Increment(){
//     count ++
//     console.log(count)
// }
// function Decrement(){
//     count --
//     console.log(count)

// } 
// return{
//     Increment,
//     Decrement
// }   
// }

// const  counter = Counter()
// counter.Increment()
// counter.Increment()
// counter.Decrement()
// counter.Decrement()






// Hello Aman
// lexical enviromnet bta linxa
// we cannot use this in arrow function 
// const obj= {
//     name : "Aman",
//     age : 20,
//     greet:()=>{
//         console.log("Hello"+" "+this.name)
//     } 
// }
// obj.greet()






// Hello Aman
// const obj= {
//     name : "Aman",
//     age : 20,
//     greet(){
//        setTimeout(()=> {
//           console.log("Hello"+" "+this.name)

//        },1000

//        )
//     } 
// }
// obj.greet()






// DOM

















