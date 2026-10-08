import { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
   
    function increment(){
        setCount(count+1);
        // setCount((prev)=>prev +1)
        // setCount((prev)=>prev +1)
        // setCount((prev)=>prev +1)
    }
     function decrement(){
        setCount(count-1);
        //  setCount((prev)=>prev -1)
        // setCount((prev)=>prev -1)
        // setCount((prev)=>prev -1)
        if(count<=0){
            setCount(0);
        }
        console.log(count);
    }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
  <h1 className="text-4xl font-bold mb-6">Counter</h1>

  <div className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-lg">
    <button
      onClick={decrement}
      className="w-12 h-12 bg-red-500 text-white text-2xl font-bold rounded-lg hover:bg-red-600"
    >
      -
    </button>

    <h2 className="text-3xl font-bold w-12 text-center">{count}</h2>

    <button
      onClick={increment}
      className="w-12 h-12 bg-green-500 text-white text-2xl font-bold rounded-lg hover:bg-green-600"
    >
      +
    </button>
  </div>
</div>
  )
}

export default Counter