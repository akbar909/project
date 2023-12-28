import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import { ordered, restoreApple } from '../features/appleSlice';

const AppleView=() => {
    const numOfApple = useSelector(state => state.apple.numOfApple)
    const dispatch = useDispatch();

  return (
    <>
        <div>Number Apple - {numOfApple}</div>
        <button onClick={()=> {dispatch(ordered())}}>Order Apple</button>
        <button onClick={()=> {dispatch(restoreApple())}}>Return Apple</button>
    </>
  )
}

export default AppleView