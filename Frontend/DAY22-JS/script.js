// setitems
// localStorage.setItem("name", "Aman");



// get item
// let name = localStorage.getItem("name");

// console.log(name);
// console.log(typeof name)




const user = {
    name: "Aman",
    age: 24
};

localStorage.setItem("user", JSON.stringify(user));



// const data = JSON.parse(localStorage.getItem("user"));

// console.log(data.name);
// console.log(data.age);
