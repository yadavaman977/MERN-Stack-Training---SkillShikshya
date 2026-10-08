function Card({name,age,gender}) {
  return (
    <div className="w-[300px] bg-white rounded-lg shadow-lg p-4">
      
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lqlFIkoUFC3go2XSeN2I-w5V9VbjswcysnZfdl0TbA&s=10://via.placeholder.com/300"
          alt="profile"
          className="w-full h-[200px] object-cover rounded"
        />

        <h1 className="text-xl font-bold mt-3">
          Name:{name}
        </h1>

        <p className="text-gray-600">
          Age:{age}
        </p>

        <p className="text-gray-500">
         Gender:{gender}
        </p>
      </div>

    </div>
  );
}

export default Card;












































// import React from "react";

// const Card = (props) => {
//   return (
//     <div className="border p-4 rounded-lg w-64">
//       <h2 className="text-xl font-bold">{props.name}</h2>
//       <p>Price: Rs. {props.price}</p>
//       <p>Category: {props.category}</p>
//     </div>
//   );
// };

// export default Card;