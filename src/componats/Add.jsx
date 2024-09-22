import React from 'react'

function Add() {

 const number = [1,2,3,4,5,6]   
  return (
 <>
{number.map((number) => ( 
  <ul key={Math.random() * 10}>
      <li>{number}</li>
  </ul>
))}
 </>
  )
}

export default Add
