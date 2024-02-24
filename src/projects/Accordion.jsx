import { useState, useEffect } from 'react'
import { data } from '../util/data.js'

function Accordion() {
  const [click, setClick] = useState(0)
  const [multi, setMulti] = useState(false)
  const [multid, setMultid] = useState([])

  useEffect(() => {
    // // Log the current state after it has been updated
    // console.log('click:', click)
    // console.log('multid:', multid)
    // console.log('multi:', multi)
  }, [click, multid, multi])

  const handleClick = id => {
    setClick(click === id ? 0 : id)
    if (multi) {
      setMultid(prevMultid => {
        if (prevMultid.includes(id)) {
          // Remove the ID if it's already in the array
          return prevMultid.filter(itemId => itemId !== id)
        } else {
          // Add the ID if it's not in the array
          return [...prevMultid, id]
        }
      })
    }
  }
  const handleSwitch = () => {
    if (!multi) {
      setMultid([click])
      setClick(0)
    } else {
      let lastid = multid.pop()
      setMultid([])
      setClick(lastid)
    }
    setMulti(!multi)
  }

  return (
    <div className=' bg-gradient-to-r from-sky-400 to-green-300 h-screen '>
      <div className='flex flex-col gap-4 text-lg items-center justify-center p-8'>
        <div className='bg-yellow-500 p-4 rounded-full' onClick={() => handleSwitch()}>
          {multi ? 'Disable ' : 'Enable '}
          Multi Selection
        </div>
        {data && data.length > 0 ? (
          <div className='w-[40rem]'>
            {data.map(items => (
              <div
                key={items.id}
                className='mt-2 p-1 px-4 bg-amber-600 rounded  '
                onClick={() => handleClick(items.id)}
              >
                <div className='flex justify-between gap-4'>
                  <span>{items.question} </span>
                  <span className='text-right'>+</span>
                </div>
                <div className={`${(click === items.id && !multi) || multid.includes(items.id) ? 'block' : 'hidden'}`}>
                  {items.answer}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className=''>No Output</div>
        )}
      </div>
    </div>
  )
}

export default Accordion
