// import axios from "axios";

// const API_URL = "https://fakestoreapi.com/products";

// // Get products
// export const getProducts = async () => {
//   const response = await axios.get(API_URL);

//   return response.data;
// };

// async function getProduct() {
//     const response = await api.get("/products")
//     console.log(response.data)
    
// }
// getProduct()



import { api } from "./api";


export async function getProducts(){
   const res = await api.get("/products")
   return res.data
}

export async function addProduct(product){
   const res = await api.post("/products",product)
   return res.data
}

export async function updateProduct(product){
   const res = await api.put(`/products/${product.id}`,product)
   return res.data
}

export async function deleteProduct(id){
   const res = await api.delete(`/products/${id}`)
   return res.data
}