import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthstore } from "./store/auth-store";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = useAuthstore((state) => state.login);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      if (login(email, password)) {
        navigate("/", { replace: true });
      }
    };

  return (
    <div className="flex flex-col items-center h-screen justify-center">
       <form onSubmit={handleSubmit} className="bg-gray-300 rounded-md shadow-lg flex flex-col gap-3 p-4">
         <h1 className="text-center">Login Form</h1>
      <div className="flex items-center gap-4 ">

        <label htmlFor="email">Email</label>
        <input
        className="border focus:outline-none border-black py-2 px-3 rounded-md"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-4">
        <label htmlFor="password">Password</label>
        <input
        className="border focus:outline-none border-black py-2 px-3 rounded-md"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="bg-black text-white py-2 px-3 rounded-md shadow-md cursor-pointer" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;