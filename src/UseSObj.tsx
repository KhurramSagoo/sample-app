import React, {useState} from 'react';

const UseSObj = () => {

        const [details, setDetails]=useState({counter:0,name:""});
        

    function increaseCounter(){
            setDetails((prev)=>({
                ...prev, counter:prev.counter+1
            }));
    }
  return (
    <div>

<input type="text" onChange={(e)=> (e.target.value)} />
<h1>{details.name} has clicked {details.counter} times!!!</h1>
<button onClick={increaseCounter} >Press this button</button>





    </div>
  )
}

export default UseSObj