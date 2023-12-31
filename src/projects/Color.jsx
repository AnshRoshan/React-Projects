import { useState, useEffect } from 'react'

function Colr() {
  const [colorcode, setColorCode] = useState('#8877ff')
  const [type, setType] = useState('rgb')
  const [colorPalette, setColorPalette] = useState([])

  const generateRandomColor = () => {
    return type === 'rgb'
      ? `rgb(${getRand()}, ${getRand()}, ${getRand()})`
      : `#${(getRand() ** 3).toString(16)}`
  }

  const handleRgb = () => {
    setType('rgb')
    const newColor = generateRandomColor()
    setColorCode(newColor)
  }

  const handleHex = () => {
    setType('hex')
    const newColor = generateRandomColor()
    setColorCode(newColor)
  }

  useEffect(() => {
    console.log('colorcode:', colorcode)
    console.log('colorPalette:', colorPalette)
  }, [colorcode, colorPalette, type])

  return (
    // important note dynamic class in tailwind doesnot work
    // div className={`min-h-screen bg=[${colorCode}]`}>
    // this is not gona work no use inline css
    <div
      className={'min-h-screen flex  items-center justify-center'}
      style={{ backgroundColor: colorcode }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="text-9xl tracking-widest">{colorcode}</div>
        <div className="text-5xl mt-24">
          <button
            className="px-4 py-2  bg-white/40 backdrop-blur-md rounded-l-full  border-r"
            onClick={handleRgb}
          >
            Generate RGB code
          </button>
          <button
            className="px-4 py-2  bg-white/40 backdrop-blur-md rounded-r-full "
            onClick={handleHex}
          >
            Generate HEX code
          </button>
        </div>
        <div className="text-5xl mt-4">
          <button
            className="px-4 py-2 bg-white/40 backdrop-blur-md rounded-full mt-4"
            onClick={handleAddColor}
          >
            Add Color
          </button>
        </div>
      </div>
      <div className="flex min-w-60 flex-col gap-4 ml-8">
        {colorPalette.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color }}
            className="w-full h-16 rounded-md border border-gray-300 relative"
          >
            <button
              className="text-sm font-bold text-white bg-red-500 h-8 w-8 rounded-full absolute top-1 right-1"
              onClick={() =>
                setColorPalette((prevPalette) =>
                  prevPalette.filter((_, i) => i !== index)
                )
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function Color() {
  const [colorcode, setColorCode] = useState('#8877ff')
  const [type, setType] = useState('rgb')

  const getRand = () => {
    return Math.floor(Math.random() * 256)
  }

  const handleColor = (typecode) => {
    if (typecode === 'rgb') {
      setType('rgb')
      setColorCode(`rgb(${getRand()}, ${getRand()}, ${getRand()})`)
    } else {
      setType('hex')
      setColorCode(`#${(getRand() ** 3).toString(16)}`)
    }
  }

  const handleAddColor = () => {
    !prevPalette.includes(colorcode) &&
      setColorPalette((prevPalette) => [...prevPalette, colorcode])
  }

  useEffect(() => {
    // Log the current color code after it has been updated
    console.log('colorcode:', colorcode)
  }, [colorcode])

  return (
    // important note dynamic class in tailwind doesnot work
    // div className={`min-h-screen bg=[${colorCode}]`}>
    // this is not gona work no use inline css
    <div
      className={'min-h-screen flex flex-col items-center justify-center'}
      style={{ backgroundColor: colorcode }}
    >
      <div className="text-9xl tracking-widest">
        {type === 'rgb' ? '' : 'Hex-'}
        {colorcode}
      </div>
      <div className="text-5xl mt-24">
        <button
          className="px-4 py-2  bg-white/40 backdrop-blur-md rounded-l-full "
          onClick={() => handleColor('rgb')}
        >
          Generate RGB code
        </button>
        <button
          className="px-4 py-2  bg-white/40 backdrop-blur-md  border-x-4 "
          onClick={() => handleAddColor()}
        >
          Add Color
        </button>
        <button
          className="px-4 py-2  bg-white/40 backdrop-blur-md rounded-r-full "
          onClick={() => handleColor('hex')}
        >
          Generate HEX code
        </button>
      </div>
    </div>
  )
}

export default Color
