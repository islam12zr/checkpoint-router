import React, { useRef } from 'react'


function Ref() {

    const firstName = useRef("islam") 
    const age = useRef() 
    const imag = useRef()

    
  return (
    <div>
        
     <input type="text"  ref={firstName}/>
        <input type="number" ref={age} />
        <input type="file" ref={imag} />
        <button onClick={()=>alert(firstName.current.value)}>firstName</button>
        <button onClick={()=>console.log(age.current.value)}>age</button>
        <button onClick={()=>console.log(imag.current.files)}>print</button>
    </div>
  )
}

export default Ref