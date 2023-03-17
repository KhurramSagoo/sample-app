import React from 'react'
import {useState} from 'react';
import UseSObj from './UseSObj';

export default function UseS  () {
  const khurram =() =>{

  }
  function khurrams(){}

  const [count, setCount]=useState(0);
  const [name, setName]=useState("");
  
  
  const counting=()=>{
    setCount(count+1)
  }

  return(
    <div>
      <input type="text" onChange={e=> setName(e.target.value)} />
<h1>{name} has clicked {count} times!!!</h1>
<button onClick={counting} >Press this button</button>


{/* useState with object */}
<UseSObj/>
</div>

  )

}
// export default UseS