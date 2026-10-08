

import { useState } from "react";

const LiftUp = () => {
    const[text,setText] = useState("");
  return (
    <div>
        <Input value={text} onChange={(text)=> setText(text)} />
        <Display text={text}/>
    </div>
  )
}
function Input({text,onChange}){
    return(
        <input type="text" value={text} onChange={(e)=> onChange(e.target.value)} />
    )
}
function Display({text}){
    return(
        <h1>You Typed:{text}</h1>
    )
}

export default LiftUp