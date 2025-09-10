import React from 'react'
import { useDispatch,useSelector } from "react-redux"
import { increment,dicrement } from './count/countSlice'


const Home = () => {
  let data = useSelector( (state )=> state.count.value)

  let dispatch = useDispatch()
  
  let handleIncriment = () => {
     dispatch(increment())
  }
  let handledicrement = () =>{
    dispatch(dicrement())
  }

  return (
    <section>
         <div>
            <h1 style={{textAlign: "center", color:"red",fontSize:"40px"}}>React Redux (Home Page) <div>{data}</div></h1>

            <div >
              <button onClick={handleIncriment}>+</button>
              <h1>{data}</h1>
              <button onClick={handledicrement}>-</button>
            </div>
         </div>
    </section>
  )
}

export default Home