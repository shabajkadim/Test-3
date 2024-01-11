import React, { createContext, useContext } from 'react'
import Counter, { myContext } from './Authcontext'



function Home() {
    const {state, dispatch} = useContext(myContext)
  return (
    <div>
    <div>Home</div>
    <h1>Counter : {state.Counter}</h1>
    <button onClick={()=>dispatch({type:'INCREMENT'})}>
      Increment
    </button>
    <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
    <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    </div>
  )
}

export default Home;
