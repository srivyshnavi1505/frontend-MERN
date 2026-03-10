import React, {useContext} from 'react'
import { CounterContext } from '../contexts/CounterContext'
import { useTest } from '../store/TestStore.js'

function C() {

  const y = useTest(state => state.y)
  const incrementY = useTest(state => state.incrementY)

  const user = useTest(state => state.user)
  const updateUser = useTest(state => state.updateUser)

  let {counter1,changeCounter1} = useContext(CounterContext)

  console.log("c rendering")

  return (
   <div className='text-center shadow-2xl p-10'>
        <p className='text-3xl'>component C </p>

        <p>Counter1:{counter1}</p>

        <p>Y value: {y}</p>

        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>

        <button
          onClick={changeCounter1}
          className='bg-amber-200 text-blue-950 p-2 mt-2 rounded-2xl'>
          change counter
        </button>

        <button
          onClick={incrementY}
          className='bg-green-200 text-blue-950 p-2 mt-2 rounded-2xl'>
          change Y
        </button>
    </div>
  )
}

export default C