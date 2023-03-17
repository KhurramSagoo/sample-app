import React from 'react'
import {useState,useEffect} from 'react';
import UseSObj from './UseSObj';

// useEfect with out dependency

export default function UseEffect  () {
  
  const [count, setCount]=useState(0);
  
  useEffect(() =>{
    document.title= `${count} new message!`;
  }
  )
  
  
  const counting=()=>{
    setCount(count+1)
  }

  return(
    <div>

<h3 >{count}new message</h3>
<button onClick={()=> setCount (count+1)} >Press this button</button>

</div>

  )

}
// export default UseS