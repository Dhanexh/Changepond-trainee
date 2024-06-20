import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

const UseEffectHookComp = () => {
    const [count,setCount] = useState(0);
    const [salary,setSalary] = useState(95000);

    // case1: when no dependency value pass
    // useEffect(()=>{
    //     setCount(count+1)
    // })

    // case2: when pass dependancy value as blank array
    // useEffect(()=>{
    //     setCount(count+1)
    // },[])

    // case3: when pass dependancy value as state or props
    useEffect(()=>{
        setCount(count+1)
    },[salary])

    return (
        <div>
            <h4>This is UseEffecthook Component</h4>
            <p>Count Value is : <strong>{count}</strong></p>
            <p>Salary is is : <strong>{salary}</strong></p>
            <Button variant='contained' color='warning' onClick={()=>setSalary(salary+1000)}>Increase Salary</Button>
        </div>
    )
}

export default UseEffectHookComp
