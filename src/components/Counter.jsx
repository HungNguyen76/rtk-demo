import React from 'react'
import { decrease, increase } from '../redux/countSlice'
// import countReducer,{initState} from '../redux/reducer'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    // const [count,dispatch]=useReducer(countReducer,initState)
    const count = useSelector(state => state.count)
    console.log("🚀 ~ file: Counter.jsx:9 ~ Counter ~ count:", count)
    const dispatch = useDispatch()
  return (
    <div>
        <h3>Counter</h3>
        <p>{count} </p>
        <button onClick={()=>dispatch(increase())}>Tang</button>
        <button onClick={()=>dispatch(decrease())}>Giam</button>
    </div>
  )
}
