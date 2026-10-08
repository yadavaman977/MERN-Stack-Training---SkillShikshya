// import Card from "./components/Card";

// function App() {
//   return (
//     <>
//     <div>
//       <Card name="John" age={30} gender="Male" />
//       <Card name="Aman" age={20} gender="Male" />
//       <Welcome/>
//     </div>
//      </>
//   );
// }

// export default App;

// import Welcome from "./components/Welcome";

// function App() {
//   return (
//     <div>
//       <Welcome />
//     </div>
//   );
// }

// export default App;

// import ProductCard from "./components/ProductCard";

// function App() {
//   return (
//     <div>
//       <ProductCard
//         name="Samsung Galaxy A35"
//         price={20000}
//         category="Mobile"
//         inStock={true}
//       />
//     </div>
//   );
// }

// export default App;

// import Welcome2 from "./components/Welcome2"

// const App = () => {
//   return (
//     <div><Welcome2 name="Aman" /></div>
//   )
// }

// export default App

// import Profile from "./components/Profile"

// const App = () => {
//   return (
//     <div><Profile/></div>
//   )
// }

// export default App

// import Header2 from "./components/Header2"
// import Content from "./components/Content"
// import Footer from "./components/Footer"
// import React from 'react'

// const App = () => {
//   return (
//     <div><Header2/><Content/><Footer/></div>
//   )
// }

// export default App

// import React from 'react'
// import Counter from "./components/Counter"

// const App = () => {
//   return (
//     <div><Counter/></div>
//   )
// }

// export default App

// import React from 'react'
// import Name from "./components/Name"

// const App = () => {
//   return (
//     <div><Name/></div>
//   )
// }

// export default App

// import React from 'react'
// import Fruits from "./components/Fruits"

// const App = () => {
//   return (
//     <div><Fruits/></div>
//   )
// }

// export default App

// import React from 'react'
// import Task from "./components/Task"

// const App = () => {
//   return (
//     <div><Task/></div>
//   )
// }

// export default App

// import { useState } from "react";

// function App() {
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div className="w-[300px] mx-auto mt-10 text-center">

//       <button
//         onClick={() => setIsVisible(!isVisible)}
//         className="bg-black text-white px-5 py-2 rounded"
//       >
//         {isVisible ? "Hide Details" : "Show Details"}
//       </button>

//       {isVisible && (
//         <div className="mt-5 p-5 bg-gray-100 rounded-lg shadow">
//           <h2 className="text-xl font-bold">
//             Aman Kumar Yadav
//           </h2>

//           <p className="text-gray-600">
//             BIM Student
//           </p>
//         </div>
//       )}

//     </div>
//   );
// }

// export default App;

// import Login from "./components/Login"
// import Dashboard from "./components/Dashboard"

// function App() {
//   const isLoggedIn = true

//   return (
//     <>
//     {isLoggedIn ?
//       <Dashboard />
//       : <Login />
//     }
//     </>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";

// const App = () => {
//   const [showPage, setShowPage] = useState("home");

//   return (
//     <div>
//       <button onClick={() => setShowPage("home")}>Home</button>

//       <button onClick={() => setShowPage("about")}>About</button>

//       <button onClick={() => setShowPage("contact")}>Contact</button>
//       {/* <h2>{showPage}</h2> */}

//        {showPage === "home" && <Home />}
//       {showPage === "about" && <About />}
//       {showPage === "contact" && <Contact />}

//     </div>
//   );
// };

// export default App;

// import LiftUp from "./components/LiftUp"

// const App = () => {
//   return (
//     <div><LiftUp/></div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const[theme,setTheme]=useState("white")

//    return (
//     <div className={theme === "light" ? "bg-white text-black" : "bg-black text-white"}>

//       <h1>Theme: {theme}</h1>

//       <button onClick={() => setTheme("light")}>
//         Light
//       </button>

//       <button onClick={() => setTheme("dark")}>
//         Dark
//       </button>

//     </div>
//   );
// };

// export default App;

// import React from 'react'
// import Form from './components/Form'

// const App = () => {
//   return (
//     <div><Form/></div>
//   )
// }

// export default App

// import React from 'react'
// import RegistrationForm from './components/RegistrationForm'

// const App = () => {
//   return (
//     <div><RegistrationForm/></div>
//   )
// }

// export default App

// import Product from "./components/Product"
// const App = () => {
//   return (
//     <div><Product/></div>
//   )
// }

// export default App

// import User from "./components/User"
// const App = () => {
//   return (
//     <div><User/></div>
//   )
// }

// export default App

// import Watch from "./components/Watch"

// const App = () => {
//   return (
//     <div><watch/></div>
//   )
// }

// export default App

// import React, { useState } from "react";

// function App() {
//   const [isVisible, setIsVisible] = useState(false);

//   function handleShowDetails() {
//     setIsVisible((prev) => !prev);
//   }

//   return (
//     <div className="p-5">
//       <button
//         onClick={handleShowDetails}
//         className={
//           isVisible
//             ? "bg-red-500 text-white px-4 py-2 rounded"
//             : "bg-blue-500 text-white px-4 py-2 rounded"
//         }
//       >
//         {isVisible ? "Hide Details" : "Show Details"}
//       </button>

//       {isVisible && (
//         <div className="mt-4">
//           <h1 className="text-2xl font-bold">My Details</h1>
//           <p>Name: Aman</p>
//           <p>Course: BIM</p>
//           <p>Skill: MERN Stack</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import Parent from './components/Parent'

// const App = () => {
//   return (
//     <div><Parent/></div>
//   )
// }

// export default App

// import React from 'react'
// import Parent from './components/Parent'

// const App = () => {
//   return (
//     <div><Parent>
//       <h1>This is a Child</h1>
//       {/* <Card/> */}
//       </Parent>
//       </div>
//   )
// }

// export default App

// // useeffect
// // infinity loop

// import { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setCount(count + 1);
//     document.title = `${count} times`;
//   })

//   return (
//    <div></div>
//   );
// }
// export default App

// useeffect
// dependency array

// import { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setCount(count + 1);
//     document.title = `${count} times`;
//   },[])

//   return (
//    <div></div>
//   );
// }
// export default App

// import { useEffect, useState } from "react"

// const Home = () => {
//   const [count, setCount] = useState(0)
//   const [time, setTime] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(time + 1)
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [time])

//   return (
//     <div>This is Home Page
//       <p>Time: {time}</p>
//     </div>
//   )
// }

// export default Home

// useref le render garna didINA
// import { useRef } from "react"

// const Form = () => {

//   const divRef = useRef(null)

//   function handleClick() {
//     // console.log(divRef.current);
//     divRef.current.style.color="red";
//   }

//   console.log("rendered")

//   return (
//     <>
//       <div ref={divRef}>Form</div>
//       <button onClick={handleClick}>Click</button>
//     </>
//   )
// }

// export default Form

import { RouterProvider } from "react-router-dom";

import { Routes } from "./Routes";

function App() {

  return (
    <RouterProvider router={Routes} />
  );
}

export default App;

// import React from "react";
// import Card2 from "./components/Card2";

// const App = () => {
//   return (
//     <div className="flex gap-4 p-5">
//       <Card2
//         name="Laptop"
//         price="80000"
//         category="Electronics"
//       />

//       <Card2
//         name="Mobile"
//         price="30000"
//         category="Smartphone"
//       />

//       <Card2
//         name="Headphones"
//         price="5000"
//         category="Accessories"
//       />
//     </div>
//   );
// };

// export default App;

// import React from 'react'
// import GetProduct from './components/GetProduct'

// const App = () => {
//   return (
//     <div><GetProduct/></div>
//   )
// }

// export default App

// import React from 'react'
// import Product2 from './components/Product2'

// const App = () => {
//   return (
//     <div><Product2/></div>
//   )
// }

// export default

// import GetUsers from "./components/GetUsers";


// function App() {
//   return (
//     <div>
//       {/* Show User Management */}
//       <GetUsers />
//     </div>
//   );
// }

// export default App;
