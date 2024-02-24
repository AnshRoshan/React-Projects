import React, { useState, useEffect } from 'react'

function Color() {
  const [colorcode, setColorCode] = useState('#8877ff')
  const [type, setType] = useState('rgb')
  const [colorPalette, setColorPalette] = useState([])

  const getRand = () => {
    return Math.floor(Math.random() * 256)
  }

  const handleColor = typecode => {
    if (typecode === 'rgb') {
      setType('rgb')
      setColorCode(`rgb(${getRand()}, ${getRand()}, ${getRand()})`)
    } else {
      setType('hex')
      setColorCode(`#${(getRand() ** 3).toString(16)}`)
    }
  }

  const handleAddColor = () => {
    if (!colorPalette.includes(colorcode)) {
      setColorPalette(prevPalette => [...prevPalette, colorcode])
    }
  }

  useEffect(() => {
    // Log the current color code after it has been updated
    console.log('colorcode:', colorcode)
  }, [colorcode])

  return (
    <div className={'min-h-screen flex flex-col items-center justify-center'} style={{ backgroundColor: colorcode }}>
      <div className='text-9xl tracking-widest'>
        {type === 'rgb' ? '' : 'Hex-'}
        {colorcode}
      </div>
      <div className='text-5xl mt-24'>
        <button className='px-4 py-2 bg-white/40 backdrop-blur-md rounded-l-full' onClick={() => handleColor('rgb')}>
          Generate RGB code
        </button>
        <button className='px-4 py-2 bg-white/40 backdrop-blur-md border-x-4' onClick={handleAddColor}>
          Add Color
        </button>
        <button className='px-4 py-2 bg-white/40 backdrop-blur-md rounded-r-full' onClick={() => handleColor('hex')}>
          Generate HEX code
        </button>
      </div>
      <div className='flex  gap-4 mt-8'>
        {colorPalette.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color }}
            className='w-20 h-12 rounded-md border border-gray-300 relative'
            onClick={() => {
              navigator.clipboard.writeText(color)
              return setColorCode(color)
            }}
          >
            <button
              className='text-sm font-bold text-white bg-red-500 h-8 w-8 rounded-full absolute top-[-1rem] right-[-1rem] z-10'
              onClick={() => setColorPalette(prevPalette => prevPalette.filter((_, i) => i !== index))}
            >
              X
            </button>
          </button>
        ))}
      </div>
      <div>
        <button
          className='px-4 py-2 bg-white/40 text-xl font-bold backdrop-blur-md rounded-s-full mt-8'
          onClick={() => setColorPalette([])}
        >
          Clear
        </button>
        {/* copy the color code to clipboard */}
        <button
          className='px-4 py-2 bg-white/40 text-xl font-bold backdrop-blur-md rounded-e-full mt-8'
          onClick={() => navigator.clipboard.writeText(colorPalette.join(','))}
        >
          {' '}
          copy
        </button>
      </div>
    </div>
  )
}

export default Color
