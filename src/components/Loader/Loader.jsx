import React from 'react'



function TextComponent ({ condition }){
    return <h2>{condition === true ? "Condition is true" :
                                     "Condition is false"}</h2>;c
}

export default function Loader() {
  return (
    <div>Loader</div>
  )
}
