import React from 'react'
import { increment ,decrement } from './action'
import { useDispatch, useSelector } from 'react-redux'


const Redux = () => {
    const count=useSelector((state)=>state.counter.count);
    const dispatch=useDispatch();

  return (
    <div>
      <div>Counter:{count}</div>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Redux
