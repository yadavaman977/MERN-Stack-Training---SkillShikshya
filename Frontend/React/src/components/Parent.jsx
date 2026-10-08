// import React from 'react'

// const Parent = () => {
//   return (
//     <Child name="Akil"/>
//   )
// }

// function Child({name}){
//   return(
//     <div>{name}</div>
//   )
// }

// export default Parent





// const Parent = () => {
//   return (
//     <>
//       <Child name="Akil"/>
//       <GrandChild name="Akil"/>
//     </>
//   )
// }

// function Child({name}){
//   return (
//     <div>{name}</div>
//   )
// }

// function GrandChild({name}){
//   return (
//     <div>{name}</div>
//   )
// }

// export default Parent












const Parent = ({children}) => {
  return (
    <div> <h1>Parent</h1>
    {children}

    </div>
  )
}

export default Parent