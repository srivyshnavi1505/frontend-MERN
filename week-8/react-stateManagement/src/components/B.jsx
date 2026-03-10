import {useContext} from 'react'
import { CounterContext } from '../contexts/CounterContext'
import { UserContext } from '../contexts/UserContext'

import { useTest } from '../store/TestStore.js'

function B() {

  const {x,incrementX,decrementX} = useTest()

  const {counter1,changeCounter1} = useContext(CounterContext)

  const {user, updateUser} = useContext(UserContext)

  console.log("b rendering")

  const incAge = () => updateUser({age: user.age + 1})

  const setName = () => updateUser({name: 'Patel'})

  return (
    <div className='text-center shadow-2xl p-10'>
        <p className='text-3xl'>component B </p>

        <p>Counter1:{counter1}</p>

        <p>X Value:{x}</p>

        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>

        <button 
          onClick={changeCounter1} 
          className='bg-amber-200 text-blue-950 p-2 mt-2 rounded-2xl'>
          change counter
        </button>

        <button 
          onClick={incrementX} 
          className='ml-2 bg-blue-300 p-2 rounded'>
          increment X
        </button>

        <button 
          onClick={decrementX} 
          className='ml-2 bg-red-300 p-2 rounded'>
          decrement X
        </button>

        <button 
          onClick={incAge} 
          className='ml-2 bg-green-300 p-2 rounded'>
          inc age
        </button>

        <button 
          onClick={setName} 
          className='ml-2 bg-purple-300 p-2 rounded'>
          set name
        </button>
    </div>
  )
}

export default B