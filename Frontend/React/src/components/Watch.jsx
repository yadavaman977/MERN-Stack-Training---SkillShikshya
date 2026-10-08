import { useRef, useState } from "react"


const StopWatch = () => {
    const [ time, setTime ] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    const intervalId = useRef(null)

    function startTimer(){

       if(isRunning) return;

       intervalId.current = setInterval(() => {
        setTime(prevTime => prevTime + 1)
       }, 1000)
       setIsRunning(true)
    }

    function stopTimer(){
        clearInterval(intervalId.current)
        setIsRunning(false)
    }
    function resetTimer(){
        clearInterval(intervalId.current)
        setIsRunning(false)
        setTime(0)
    }
    function formatTime(num) {
  const hour = Math.floor(num / 3600);

  const min = Math.floor((num % 3600) / 60);

  const sec = num % 60;

  return `${hour.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}
  return (
    <div className="flex flex-col item-center justify-center h-screen gap-4">
          <h1 className="text-4xl text-center font-monospace">{formatTime(time)}</h1>
          <div className="flex items-center justify-center gap-4">
              {isRunning ? <button className="bg-red-500 py-3 px-2 rounded-md cursor-pointer " onClick={stopTimer}>Stop</button> : <button className="bg-green-500 py-3 px-2 rounded-md cursor-pointer " onClick={startTimer}>Start</button>}
              <button className="bg-gray-500 py-3 px-2 rounded-md cursor-pointer " onClick={resetTimer}>Reset</button>
          </div>
    </div>
  )
}

export default StopWatch