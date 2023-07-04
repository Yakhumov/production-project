import React, { useState } from 'react'
import classes from './Counter.module.scss'

 const Counter = () => {

    const [state, setState] = useState(0)  
    

    const increment = ()=>{
       setState(state +1)
    }

    const decrement =()=>{
        setState(state-1)
    }

    const reset = () =>{
      setState(0)   
    }

  return (
    <>
     <h1>{state}</h1>
     <button className={classes.button} onClick={increment}>Увеличить</button>  
     <button disabled={state <= 0} onClick={decrement}>Уменьшить</button> 
     <button onClick={reset}> Сбросить</button> 
    </>
  )
}

export default Counter


