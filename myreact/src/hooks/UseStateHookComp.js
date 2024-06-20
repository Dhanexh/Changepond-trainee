import { Button } from '@mui/material';
import React, { useState } from 'react'

const UseStateHookComp = () => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("Dhanesh");

    const counterInc = ()=>{
        setCount(count+1);
    }

    return (
        <div>
            <h4>This is UseStatehook Component</h4>
            <p>Count Value is : <strong>{count}</strong></p>
            <Button variant='contained' onClick={()=>counterInc()}>Count++</Button>{" "}
            <Button variant='contained' onClick={()=>setCount(count+1)}>Count++</Button>{" "}
            <hr/>
            <p>the name is : <strong>{name}</strong></p>
            <Button variant='contained' onClick={()=>setName("Dhanesh Khan")}>Change</Button>
        </div>
    )
}

export default UseStateHookComp
