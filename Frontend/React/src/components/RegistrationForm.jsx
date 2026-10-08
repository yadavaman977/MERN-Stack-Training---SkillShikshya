import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    number: "",
    address: "",
    hobbies: [],
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  if (type === "checkbox") {
    setFormData({
      ...formData,
      hobbies: checked
        ? [...formData.hobbies, value]
        : formData.hobbies.filter((hobby) => hobby !== value),
    });
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
};
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name) {
      setError({ name: "Name is required" });
      return;
    }
    if (!formData.email) {
      setError({ email: "Email is required" });
      return;
    }
    alert(
      `Form submitted with the following data: \nName: ${formData.name} \nEmail: ${formData.email} \nGender: ${formData.gender} \nNumber: ${formData.number} \nAddress: ${formData.address} \nHobbies: ${formData.hobbies.join(", ")}`,
    );
    setError({});
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center h-screen"
      >
        <div className="flex flex-col items-center gap-4 bg-gray-500 p-4 rounded-md shadow-2xl ">
          <h1>Form</h1>
          <div className="flex items-center gap-4">
            <label htmlFor="name">Name:</label>
            <input
              className="border rounded-md py-2 px-3 focus:outline-none"
              id="name"
              name="name"
              value={formData.name}
              type="text"
              placeholder="Name"
              onChange={handleChange}
            />
            {error.name && <span>{error.name}</span>}
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="email">Email:</label>
            <input
              className="border rounded-md py-2 px-3 focus:outline-none"
              id="email"
              name="email"
              value={formData.email}
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
            {error.email && <span>{error.email}</span>}
          </div>
               <div className="flex  items-center gap-4">
         <label htmlFor="address">Address</label>
            <input 
            className="border rounded-md py-2 px-3 focus:outline-none"
            id="address"
            name="address"
            value={formData.address}
            type="text"
            placeholder="Address"
            onChange={handleChange}
            />
          </div>
          <div className="flex  items-center gap-4">
         <label htmlFor="address">Number</label>
            <input 
            className="border rounded-md py-2 px-3 focus:outline-none"
            id="number"
            name="number"
            value={formData.number}
            type="text"
            placeholder="Number"
            onChange={handleChange}
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <label htmlFor="gender">Gender </label>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="gender"
                id="male"
                checked={formData.gender === "male"}
                value="male"
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                id="female"
                checked={formData.gender === "female"}
                value="female"
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4"> 
             <label htmlFor="hobbies">Hobbies</label>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="hobbies"
                id="reading"
                checked={formData.hobbies.includes("reading")}
                value="reading"
                onChange={handleChange}
              />
              <label htmlFor="reading">Reading</label>
              <input
                type="checkbox"
                name="hobbies"
                id="playing"
                checked={formData.hobbies.includes("playing")}
                value="playing"
                onChange={handleChange}
              />
              <label htmlFor="playing">Playing</label>
              <input
                type="checkbox"
                name="hobbies"
                id="coding"
                checked={formData.hobbies.includes("coding")}
                value="coding"
                onChange={handleChange}
              />
              <label htmlFor="coding">Playing</label>
            </div>
          </div>
     
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;