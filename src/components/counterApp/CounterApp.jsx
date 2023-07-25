import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slice/slice';

export default function CounterApp() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div style={{margin:'120px', fontSize:'20px'}}>
      <button  onClick={() => dispatch(increment())}>Increment</button>
      <span style={{margin:'20px'}}>{count}</span>
      <button  onClick={() => dispatch(decrement())}>Decrement</button><br/>
      {/* <button onClick={()=>dispatch(increment2())}>increment 2+</button> */}
    </div>
  )
}
