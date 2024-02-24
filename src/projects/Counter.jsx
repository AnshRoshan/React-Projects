import { useState } from 'react'
import { GrAddCircle, GrPowerReset, GrSubtractCircle } from 'react-icons/gr'

function Counter() {
  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }
  const handleDecreament = () => {
    setCount(prevCount => prevCount - 1)
  }
  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className='flex h-screen items-center justify-center bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 text-3xl '>
      <div className='flex h-1/2 w-1/3 items-center justify-center rounded-3xl bg-sky-500'>
        <div className='flex h-2/3 min-w-[120%] flex-col items-center justify-around rounded-2xl bg-violet-900 p-4'>
          <p className='text-9xl font-bold italic text-white'>{count}</p>
          <div className='flex w-full gap-4 '>
            <button
              className='w-full rounded-lg bg-sky-500   py-1 shadow-lg '
              onClick={handleDecreament}>
              <GrSubtractCircle className='mx-auto text-white' />
            </button>
            <button
              className='w-full rounded-lg border-2 border-sky-500  py-1 shadow-lg '
              onClick={handleReset}>
              <GrPowerReset className='mx-auto text-sky-500' />
            </button>
            <button
              className='w-full rounded-lg bg-sky-500   py-1 shadow-lg '
              onClick={handleIncrement}>
              <GrAddCircle className='mx-auto text-white' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Counter
