import React from 'react'
import { increment,decrement,reset } from './action'
import   {useDispatch, useSelector}  from 'react-redux'

const ReduxReducer = () => {
    const count =useSelector((state)=>state.counter.count);
    const dispatch=useDispatch();
  return (
    <div>
      <div>Counter:{count}</div>
      <button value={()=>dispatch(increment())}>Increment</button>
      <button value={()=>dispatch(decrement())}>Decrement</button>
      <button value={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default ReduxReducer;
