// import { Link } from "react-router-dom"


// const Header = () => {
//   return (
//     <div className="fixed top-0 left-0 w-full bg-blue-500 h-10  p-2">
//         <nav className="flex items-center justify-center">

//             <ul className="flex justify-center items-center gap-5">
//                <li> <Link to="/">Home</Link></li>
//                <li> <Link to="/about">About</Link></li>
//                <li> <Link to="/contact">Contact</Link></li>
//             </ul>
//         </nav>
//     </div>
//   )
// }

// export default Header





import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"
import { useAuthstore } from "@/store/auth-store"

const Header = () => {
  const navigate = useNavigate()
  const logout = useAuthstore((state) => state.logout)
  function handleLogout() {
    logout()
     navigate("/login")
  }
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className="fixed flex items-center justify-center gap-50 top-0 left-0 w-full bg-blue-500 h-20  p-2">
        <nav className="flex items-center justify-center">

            <ul className="flex justify-center items-center gap-5">
               <li> <Link to="/">Home</Link></li>
               <li> <Link to="/about">About</Link></li>
               <li> <Link to="/contact">Contact</Link></li>
               <li><Link to="/product">Products</Link></li>
              <li><Link to="/users">Users</Link></li>
            </ul>
        </nav>

        <button className="cursor-pointer text-4xl" onClick={toggleTheme}> {theme === "light" ? "🌛" : "☀️"} </button>
  <button className="cursor-pointer" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Header











