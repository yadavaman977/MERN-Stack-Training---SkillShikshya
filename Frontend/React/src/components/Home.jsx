// // import React from 'react'

import useForm from "@/hooks/useForm";

// import useForm from "@/hooks/useForm";

// // const Home = () => {
// //   return (
// //     <div><h1>This is Homepage</h1></div>
// //   )
// // }

// // export default Home

// // import React from 'react'

// // const Home2 = () => {
// //   return (
// //     <div>This Is Home Page</div>
// //   )
// // }

// // export default Home2

// import useForm from "@/hooks/useForm";
// // import { useContext } from "react";

// // import { ThemeContext } from "./context/ThemeContext";
// // import toast from "react-hot-toast";
// // import useFetch from "../hooks/useFetch";

// const Home = () => {
//    const { form, handleChange } = useForm({
//     name: "",
//     email: "",
//   });

//   };
//   // const { theme } = useContext(ThemeContext);

//   // const { data, loading, error } = useFetch(
//   //   "https://jsonplaceholder.typicode.com/todos",
//   // );

//   // function handleClick() {
//   //   toast.success("Button Clicked");
//   // }

//   return (
//     <div>
//       <div>
//       <h1>My Form</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter your name"
//           value={form.name}
//           onChange={handleChange}
//         />

//         <br />

//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={form.email}
//           onChange={handleChange}
//         />

//         <br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>

//     </div>
//     //   className={`${
//     //     theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
//     //   } min-h-screen mt-20 p-10`}
//     // >
//     //   <h1 className="text-2xl mb-5">This is Home Page</h1>

//     //   <button onClick={handleClick}>Click me</button>

//     //   <h2 className="text-xl mt-5 mb-3">Users</h2>

//     //   {loading && <p>Loading...</p>}

//     //   {error && <p>{error}</p>}

//     //   {data && (
//     //     <table className="border border-gray-400">
//     //       <thead>
//     //         <tr>
//     //           <th className="border p-2">Id</th>
//     //           <th className="border p-2">Title</th>
//     //           <th className="border p-2">completed</th>
//     //           {/* <th className="border p-2">Email</th> */}
//     //         </tr>
//     //       </thead>

//     //       <tbody>
//     //         {data.map((todo) => (
//     //           <tr key={todo.id}>
//     //             <td className="border p-2">{todo.id}</td>
//     //             <td className="border p-2">{todo.title}</td>
//     //             <td className="border p-2">{todo.completed}</td>

//     //             {/* <td className="border p-2">{user.email}</td> */}
//     //           </tr>
//     //         ))}
//     //       </tbody>
//     //     </table>
//     //   )}

//   );

// export default Home;

const Home = () => {
  const { form, handleChange } = useForm({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(form);
  };

  return (
    <div>

      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
        />

        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />

        <br />

        <button type="submit">Submit</button>
      </form> */}
      hello
    </div>
  );
};

export default Home;
