import React from 'react'

import {useState}from 'react';
import {useEffect}from 'react';
function CourUseEfect() {

    const [count, setCount] = useState(0);
    const [x, setX] = useState(0);



useEffect(() => {

       return () => {
        alert("useEffect1")
      };
      
    },[] );

    useEffect(() => {
        console.log(`useEffect2 `)
     },[]);
 

  return (
    <div>
        <h1>this is value of count is {count} </h1>
        <h1>this is value of x is {x} </h1>
        <button onClick={()=>setCount(count+1)}>increment count</button>
        <button onClick={()=>setX(x+1)}>increment X</button>


    </div>
  )
}

export default CourUseEfect