// import React, { useState } from "react";

// const Fruits = () => {
//   const [fruits, setfruits] = useState(["apple", "banana"]);

//   function addFruit() {
//     setfruits([...fruits, "Mango"]);
//   }

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold mb-3">Fruits</h1>

//       <ul className="mb-4">
//         {fruits.map((fruit) => (
//           <li className="text-lg mb-1">{fruit}</li>
//         ))}
//       </ul>

//       <button
//         onClick={addFruit}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Add Mango
//       </button>
//     </div>
//   );
// };

// export default Fruits;






import { useState } from "react"


 
 const Fruits = () => {
     const [fruits, setfruits] = useState(["apple", "banana"]);
   
   
     
   return (
    <>


     <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex items-center gap-5">
        <input className="border rounded-md px-2 py-2" type="text" />
        <button onClick={()=>{
            setfruits([...fruits, document.querySelector("input").value])
               document.querySelector("input").value = "";
             }}> Add New Fruit</button>
        </div>
        <h1 className="text-3xl">Fruits</h1>
        <ul className="flex flex-col items-center gap-2">
            {fruits.map((fruit, index)=> (
                <div key={index} className="flex items-center justify-between gap-5">
                <li>   {fruit}</li>
                <button className="bg-red-500 py-2 px-4 cursor-pointer hover:bg-blue-700 shadow-md rounded-md" onClick={() => setfruits(fruits.filter((_, i) => i !== index))}>Delete</button>
                </div>
            ))}
        </ul>
         
        
     </div>
     
     </>
   )
 }
 
 export default Fruits