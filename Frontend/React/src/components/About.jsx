// import React from 'react'

// const About = () => {
//   return (
//     <div><h1>This is About Page</h1></div>
//   )
// }

// export default About






import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

const About = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} mt-20 h-screen`}>This is About Page</div>
  )
}

export default About










// import React from 'react'

// const About2 = () => {
//   return (
//     <div className="mt-20">This is About Page</div>
//   )
// }

// export default About2