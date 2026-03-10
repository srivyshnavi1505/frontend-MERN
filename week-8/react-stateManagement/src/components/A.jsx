import {useContext, useEffect, useRef} from 'react'
import { CounterContext } from '../contexts/CounterContext'
import { UserContext } from '../contexts/UserContext'

function A() {

  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  const {counter1,changeCounter1} = useContext(CounterContext)
  const {user, updateUser} = useContext(UserContext)

  console.log("a rendering")

  const setName = () => updateUser({name: 'Ravi'})
  const incAge = () => updateUser({age: user.age + 1})

  return (
    <div className='text-center shadow-2xl p-10'>
        <p className='text-3xl'>component A</p>

        <p>Counter1:{counter1}</p>

        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>

        <button
          onClick={changeCounter1}
          className='bg-amber-200 text-blue-950 p-2 mt-2 rounded-2xl'>
          change counter
        </button>

        <button
          onClick={setName}
          className='ml-2 bg-green-300 p-2 rounded'>
          set name
        </button>

        <button
          onClick={incAge}
          className='ml-2 bg-purple-300 p-2 rounded'>
          age++
        </button>

        <input
          ref={inputRef}
          type="text"
          placeholder="type something here"
          className="border mt-3 p-2"
        />

    </div>
  )
}

export default A