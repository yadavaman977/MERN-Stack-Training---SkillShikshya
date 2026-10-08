// import React from 'react'

// const Contact = () => {
//   return (
//     <div><h1>This is Contact Page</h1></div>
//   )
// }

// export default Contact






import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Contact = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} h-screen mt-20`}>This is Contact Page</div>
  )
}

export default Contact