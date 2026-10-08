import { useState } from "react";

const Name = () => {
  const [name, setName] = useState("Aman");

  function changeName() {
    setName("Ram");
  }

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">
        Welcome {name}
      </h1>

      <button
        onClick={changeName}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Change Name
      </button>
    </div>
  );
};

export default Name;