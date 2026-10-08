import { useState } from "react";


const initialForm = {
      title : "",
      price: '',
      description : "",
      category: "",
      image: "",
}

function formProduct(product){
    if(!product) return initialForm;

    return{
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,

    }
}
const AddEditModal = ({mode, product, onSave, onCancel}) => {
    const [form, setForm]= useState(formProduct(product))

    function handleChange(e){
        const {name, value}= e.target
         setForm({...form, [name]: value})
         
    }
    function handleSubmit(e){
      e.preventDefault();
        onSave(form);
    }
    
  return (
       <div className="fixed inset-0   flex flex-col items-center justify-center">
            <div className="flex flex-col  items-center gap-4 bg-white p-4 rounded-md shadow-md">
               <h1>{mode === "edit" ? "Update Product" : "Add Prodcut"}</h1>

               <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex items-center justify-between">
                   <label htmlFor="title">Title</label>
                   <input
                   id="title"
                   name="title"
                   className="border focus:outline-none rounded-md px-3 py-2"
                   type="text"
                   onChange={handleChange}
                   value={form.title}
                   placeholder="Enter product title"
                   required
                   />
                   </div>
                <div className="flex items-center justify-between">
                   <label htmlFor="Description">Description</label>
                   <input
                   id="description"
                   name="description"
                   className="border focus:outline-none rounded-md px-3 py-2"
                   type="text"
                   onChange={handleChange}
                   value={form.description}
                   placeholder="Enter product Description"
                   required
                   />
                   </div>
                <div className="flex items-center justify-between">
                   <label htmlFor="price">Price</label>
                   <input
                   id="price"
                   name="price"
                   className="border focus:outline-none rounded-md px-3 py-2"
                   type="number"
                   onChange={handleChange}
                   value={form.price}
                   placeholder="Enter product Price"
                   />
                   </div>
                <div className="flex items-center justify-between">
                   <label htmlFor="category">Category</label>
                   <input
                   id="category"
                   name="category"
                   className="border focus:outline-none rounded-md px-3 py-2"
                   type="text"
                   onChange={handleChange}
                   value={form.category}
                   placeholder="Enter product category"
                   />
                   </div>
                <div className="flex items-center justify-between">
                   <label htmlFor="image">Image</label>
                   <input
                   id="image"
                   name="image"
                   className="border focus:outline-none rounded-md px-3 py-2"
                   type="url"
                   onChange={handleChange}
                   value={form.image}
                   placeholder="Enter image url"
                   />
                   </div>
                    <div className="flex items-center justify-center gap-3">
                         <button className="bg-gray-500 cursor-pointer py-2 px-3 rounded-md shadow-md" type="button" onClick={onCancel}>Cancel</button>
                         <button className="bg-blue-500 cursor-pointer py-2 px-3 rounded-md shadow-md" type="submit">{mode ==="edit" ? "Update Product" : "Add product"}</button>
                    </div>
               </form>
            </div>
       </div>
  )
}

export default AddEditModal