import {useState} from 'react';
export default function StateExample()
{
    const[count,setCount]=useState(0);
    function buttonClick() 
    {
        setCount(count+1);
    }
   return ( <>
   <h1>State Example</h1>
   <button onClick={buttonClick}>
    visitor count={count}
   </button>
   </>);
}