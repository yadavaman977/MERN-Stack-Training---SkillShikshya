import { useState } from "react";

const Task = () => {
  const [task, setTask] = useState("");

  return (
    <div>
      <input className="border-2" type="text"/>
      <button onClick={() => { setTask(document.querySelector("input").value);}}>
        Add Task
      </button>
      <h2>{task}</h2>
      
    </div>
  );
};

export default Task;
