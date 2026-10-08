// import React, { useEffect, useState } from "react";

// const Product = () => {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     async function GetProduct() {
//       try {
//         const res = await fetch(
//           "https://fakestoreapi.com/products"
//         );

//         const data = await res.json();

//         setProduct(data);
//       } catch (error) {
//         console.log("Something went wrong");
//       }
//     }

//     GetProduct();
//   }, []);

//   return (
//     <div>
//       <h1>Products</h1>

//      <table className="border border-black">
//   <thead>
//     <tr>
//       <th className="border border-black">ID</th>
//       <th className="border border-black">Image</th>
//       <th className="border border-black">Title</th>
//       <th className="border border-black">Price</th>
//       <th className="border border-black">Category</th>
//     </tr>
//   </thead>

//   <tbody>
//     {product.map((item) => (
//       <tr key={item.id}>
//         <td className="border border-black">{item.id}</td>
//         <td className="border border-black">{item.title}</td>
//         <td className="border border-black">${item.price}</td>
//         <td className="border border-black">{item.category}</td>
//         <td className="border border-black">
//           <img
//             src={item.image}
//             alt={item.title}
//             className="w-20 h-20 object-contain"
//           />
//         </td>

//       </tr>
//     ))}
//   </tbody>
// </table>
//     </div>
//   );
// };

// export default Product;

















// import { useEffect, useState } from "react";
// import AddEditModal from "./AddEditModal";

// const Product = () => {
//   const API_URL = "https://fakestoreapi.com/products";
//   const [products, setProducts] = useState([]);
//   const [openModal, setOpenModal] = useState(false);
//   const [mode, setMode] = useState("edit");
//   const [loading, setLoading] = useState(true);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   useEffect(() => {
//     try {
//       async function getProduct() {
//         const res = await fetch(API_URL);
//         const data = await res.json();
//         setProducts(data);
//         setLoading(false);
//       }
//       getProduct();
//     } catch {
//       alert("Error");
//     }
//   }, []);

//   function openAddModal() {
//     setOpenModal(true);
//     setMode("add");
//     setSelectedProduct(null);
//   }
//   function openEditModal(product) {
//     setOpenModal(true);
//     setMode("edit");
//     setSelectedProduct(product);
//   }

//   function handleSave(product) {
//     try {
//       setLoading(true);
//       async function saveProduct(product) {
//         const res = await fetch(
//           mode === "add" ? API_URL : `${API_URL}/${selectedProduct.id}`,
//           {
//             method: mode === "add" ? "POST" : "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(product),
//           },
//         );
//         const data = await res.json();

//         const savedProduct = { ...product, ...data };
//         if (mode === "add") {
//           setProducts([...products, savedProduct]);
//         } else {
//           setProducts(
//             products.map((item) =>
//               item.id === selectedProduct.id ? savedProduct : item,
//             ),
//           );
//         }
//         setOpenModal(false);
//         setLoading(false);
//       }
//       saveProduct(product);
//     } catch {
//       alert("Error");
//       setLoading(false);
//     }
//   }
//   function handleDelete(id) {
//     setProducts(products.filter((item) => item.id !== id));
//   }

//   function closeModal() {
//     setOpenModal(false);
//   }

//   return (
//     <>
//       {loading && (
//         <div className="flex items-center justify-center h-screen">
//           <p>Loading...</p>
//         </div>
//       )}
//       <div className="flex items-center gap-5 p-10">
//         <h1>Product Table</h1>
//         <button
//           onClick={openAddModal}
//           className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md"
//         >
//           Add Product
//         </button>
//       </div>
//       <table className="w-full">
//         <thead>
//           <tr className="border">
//             <th className="border border-r py-2">Id</th>
//             <th className="border border-r py-2">Name</th>
//             <th className="border border-r py-2">Description</th>
//             <th className="border border-r py-2">Category</th>
//             <th className="border border-r py-2">Price</th>
//             <th className="border border-r py-2">Image</th>
//             <th className="border border-r py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((item) => (
//             <tr key={item.id} className="border text-center">
//               <td className="border max-w-[20px] border-r py-2 px-4">
//                 {item.id}
//               </td>
//               <td className="border max-w-[200px] border-r py-2 px-4">
//                 {item.title}
//               </td>

//               <td className="border max-w-[400px] truncate border-r py-2 px-4">
//                 {item.description}
//               </td>

//               <td className="border border-r py-2 px-4">{item.category}</td>

//               <td className="border border-r py-2 px-4">{item.price}</td>

//               <td className="border max-w-[50px] border-r py-2 px-4">
//                 <img
//                   className="h-[100px] w-[100px] object-contain"
//                   src={item.image}
//                   alt="product image"
//                 />
//               </td>
//               <td className="max-w-[250px] flex h-[10vh] items-center justify-center ">
//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={() => openEditModal(item)}
//                     className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(item.id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded-md">
//                     Delete
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {openModal && (
//         <AddEditModal
//           mode={mode}
//           onSave={handleSave}
//           onCancel={closeModal}
//           product={selectedProduct}
//         />
//       )}
//     </>
//   );
// };

// export default Product;










// import { useEffect, useState } from "react";
// import { getProducts } from "../api/product";
// import toast from "react-hot-toast";

// const Product = () => {
//   // Store products
//   const [products, setProducts] = useState([]);

//   // Run when component loads
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Get products
//   const fetchProducts = async () => {
//     try {
//       const data = await getProducts();

//       console.log(data);

//       setProducts(data);

//       toast.success("Products fetched successfully!");
//     } catch (error) {
//       console.log(error);

//       toast.error("Failed to fetch products");
//     }
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold mb-5">
//         Products
//       </h1>

//       <table className="w-full border">
//         <thead>
//           <tr>
//             <th className="border p-2">ID</th>
//             <th className="border p-2">Image</th>
//             <th className="border p-2">Title</th>
//             <th className="border p-2">Price</th>
//             <th className="border p-2">Category</th>
//           </tr>
//         </thead>

//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td className="border p-2">
//                 {product.id}
//               </td>

//               <td className="border p-2">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-16 h-16 object-contain"
//                 />
//               </td>

//               <td className="border p-2">
//                 {product.title}
//               </td>

//               <td className="border p-2">
//                 ${product.price}
//               </td>

//               <td className="border p-2">
//                 {product.category}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Product;

















// import { useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { getProducts } from "../api/Product";
// import toast from "react-hot-toast";

// const Product = () => {
//   const {
//     data: products = [],
//     isLoading,
//     isError,
//     isSuccess,
//   } = useQuery({
//     queryKey: ["products"],
//     queryFn: getProducts,
//     enabled: true,
//   });

//   useEffect(() => {
//     if (isSuccess) {
//       toast.success("Products fetched successfully!");
//     }

//     if (isError) {
//       toast.error("Failed to fetch products");
//     }
//   }, [isSuccess, isError]);

//   return (
//     <div className="p-5 pt-24">
//       <h1 className="text-2xl font-bold mb-5">
//         Products
//       </h1>

//       {/* Loading */}
//       {isLoading && (
//         <h2 className="mb-5">
//           Loading products...
//         </h2>
//       )}

//       {/* Error */}
//       {isError && (
//         <h2 className="text-red-500 mb-5">
//           Failed to fetch products
//         </h2>
//       )}

//       {/* Table */}
//       {products.length > 0 && (
//         <table className="w-full border">
//           <thead>
//             <tr>
//               <th className="border p-2">ID</th>
//               <th className="border p-2">Image</th>
//               <th className="border p-2">Title</th>
//               <th className="border p-2">Price</th>
//               <th className="border p-2">Category</th>
//             </tr>
//           </thead>

//           <tbody>
//             {products.map((product) => (
//               <tr key={product.id}>
//                 <td className="border p-2">
//                   {product.id}
//                 </td>

//                 <td className="border p-2">
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="w-16 h-16 object-contain"
//                   />
//                 </td>

//                 <td className="border p-2">
//                   {product.title}
//                 </td>

//                 <td className="border p-2">
//                   ${product.price}
//                 </td>

//                 <td className="border p-2">
//                   {product.category}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Product;











import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../api/Product";
import { useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import AddEditModal from "./Modals/AddEditModal";
import { ThemeContext } from "./context/ThemeContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";



const Product = () => {
  const {theme} = useContext(ThemeContext)
  const isDark = theme === "dark";
  const queryClient = useQueryClient();
  const [mode, setMode] = useState("add");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [serach, setSerach] = useState("");
  const {
    data: products = [],
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Products fetched successfully!");
    }

    if (isError) {
      toast.error("Failed to fetch products");
    }
  }, [isSuccess, isError]);

  const addMutation = useMutation({
    mutationFn: (product) => addProduct(product),
    onSuccess: (newProduct) => {
      queryClient.setQueryData(["products"], (oldProducts) => [
        newProduct,
        ...oldProducts,
      ]);
      toast.success("Product added successfully");

    },
  });

  const updateMutation = useMutation({
    mutationFn: (product) => updateProduct(product),
    onSuccess: (updatedProduct) => {
      queryClient.setQueryData(["products"], (oldProducts) =>
        oldProducts.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product,
        ),
      );
      toast.success("Product updated successfully");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: (_, id) => {
      queryClient.setQueryData(["products"], (oldProducts) =>
        oldProducts.filter((product) => product.id !== id),
      );
      toast.success("Product deleted successfully");
    },
  });

  const serachedProduct =useMemo(() => products.filter((product) =>
    product.title.toLowerCase().includes(serach.toLowerCase()),
  )
  , [products, serach]);

  // Current table is commented out and replaced with shadcn table below

  function showAddModal() {
    setSelectedProduct(null);
    setMode("add");
    setShowModal(true);
  }
  function showEditModal(product) {
    setSelectedProduct(product);
    setMode("edit");
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function handleSave(product) {
    if (mode === "add") {
      addMutation.mutate(product);
    } else if (mode === "edit") {
      updateMutation.mutate(product);
    }
    closeModal();
  }

  function removeProduct(id) {
    deleteMutation.mutate(id);
  }

  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} pt-30 px-20`}>
      <div className="flex items-center justify-between p-4">
        <h1>Product Table</h1>

         <input 
         type="text"
         placeholder="Search"
         value={serach}
         onChange={(e) => setSerach(e.target.value)}
         className="border focus:outline-none rounded-md px-3 py-2"
         />
        <button
          className="bg-blue-400 py-2 px-3 rounded-md shadow-md cursor-pointer"
          onClick={showAddModal}
        >
          Add Product
        </button>
      </div>

      {isLoading && <p role="status">Loading products...</p>}
      
{/*
<table className="w-full border-collapse border">
  <thead>
    <tr>
      <th className="border p-2">ID</th>
      <th className="border p-2">Title</th>
      <th className="border p-2">Description</th>
      <th className="border p-2">Price</th>
      <th className="border p-2">Category</th>
      <th className="border p-2">Image</th>
      <th className="border p-2">Action</th>
    </tr>
  </thead>

  <tbody>
    {serachedProduct.map((product) => (
      <tr key={product.id}>
        <td className="border p-2">{product.id}</td>
        <td className="border p-2">{product.title}</td>
        <td className="border p-2 max-w-[300px] truncate">{product.description}</td>
        <td className="border p-2">${product.price}</td>
        <td className="border p-2">{product.category}</td>
        <td className="border p-2">
          <img
            src={product.image}
            alt={product.title}
            className="w-16 h-16 object-contain"
          />
        </td>
        <td className="border p-2">
          <button
            className="bg-blue-400 px-3 py-2 rounded-md mr-2"
            onClick={() => showEditModal(product)}
          >
            Edit
          </button>
          <button
            className="bg-red-400 px-3 py-2 rounded-md"
            onClick={() => removeProduct(product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
*/}

<div
  className={`overflow-x-auto rounded-md border shadow-sm ${
    isDark ? "border-slate-700 bg-slate-950 text-white" : "border-slate-200 bg-white text-black"
  }`}
>
  <Table className={isDark ? "bg-slate-950 text-white" : "bg-white text-black"}>
    <TableHeader className={isDark ? "bg-slate-900" : "bg-slate-50"}>
      <TableRow className={isDark ? "border-slate-700" : "border-slate-200"}>
        <TableHead className={isDark ? "text-slate-200" : "text-slate-700"}>ID</TableHead>
        <TableHead className={isDark ? "text-slate-200" : "text-slate-700"}>Title</TableHead>
        <TableHead className={isDark ? "text-slate-200" : "text-slate-700"}>Description</TableHead>
        <TableHead className={isDark ? "text-slate-200" : "text-slate-700"}>Price</TableHead>
        <TableHead className={isDark ? "text-slate-200" : "text-slate-700"}>Category</TableHead>
        <TableHead className={isDark ? "text-slate-200" : "text-slate-700"}>Image</TableHead>
        <TableHead className={isDark ? "text-right text-slate-200" : "text-right text-slate-700"}>Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {serachedProduct.map((product) => (
        <TableRow
          key={product.id}
          className={isDark ? "border-slate-700 hover:bg-slate-900" : "border-slate-200 hover:bg-slate-100"}
        >
          <TableCell className={isDark ? "text-slate-200" : "text-slate-700"}>{product.id}</TableCell>
          <TableCell className={isDark ? "text-slate-200" : "text-slate-700"}>{product.title}</TableCell>
          <TableCell className={`max-w-[300px] truncate ${isDark ? "text-slate-200" : "text-slate-700"}`}>
            {product.description}
          </TableCell>
          <TableCell className={isDark ? "text-slate-200" : "text-slate-700"}>${product.price}</TableCell>
          <TableCell className={isDark ? "text-slate-200" : "text-slate-700"}>{product.category}</TableCell>
          <TableCell>
            <img
              src={product.image}
              alt={product.title}
              className="h-16 w-16 object-contain"
            />
          </TableCell>
          <TableCell className="text-right">
            <button
              className="mr-2 rounded-md bg-blue-400 px-3 py-2 text-white"
              onClick={() => showEditModal(product)}
            >
              Edit
            </button>
            <button
              className="rounded-md bg-red-400 px-3 py-2 text-white"
              onClick={() => removeProduct(product.id)}
            >
              Delete
            </button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>

            {showModal && (
        <AddEditModal
          mode={mode}
          product={selectedProduct}
          onSave={handleSave}
          onCancel={closeModal}
        />
      )}
    </div>
  );
};

export default Product;