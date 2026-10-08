import { useState } from "react"


const useForm =(initialData)=>{
    const[form,setForm]=useState({initialData});
    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
return{form,handleChange};
};

export default useForm