import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button";
import { counterActions} from "../model/slices/CounterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

   export const Counter = () => {
    const dispatch = useDispatch()
  const increment = () => {
      dispatch(counterActions.increment())
  };

const counterValue =  useSelector(getCounterValue) 

  const decrement = () => { 
    dispatch(counterActions.decrement())
  };

  return (
    <>
    <h1 data-testid = 'value-title'>{counterValue}</h1>
      <Button onClick={increment}
      data-testid = 'increment'
      >Increment
       
      </Button> 
      <Button onClick={decrement}
      data-testid = 'decrement'
      >
        Decrement</Button> 
    </>
  );
};


