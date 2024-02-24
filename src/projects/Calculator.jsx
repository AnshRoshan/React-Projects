import React, { useState } from 'react'

function Calculator() {
  const box = ' h-16 w-16 text-white bg-white/10 shadow-cyan-500/80 shadow-inner font-bold text-2xl rounded-xl'
  const [expression, setExpression] = useState('0')
  const [result, setResult] = useState('0')
  const [calculated, setCalculated] = useState(false)

  function handleAllclear() {
    setExpression('0')
    setResult('0')
    setCalculated(false)
  }

  function handleDelete() {
    setExpression(prevExpression => {
      if (prevExpression === '0') {
        return prevExpression
      } else {
        return prevExpression.slice(0, -1) || '0'
      }
    })
  }

  function handleNumber(event) {
    const numberClicked = event.target.innerText
    if (calculated) {
      setExpression(numberClicked)
      setCalculated(false)
    } else {
      setExpression(prevExpression => {
        if (prevExpression === '0') {
          return numberClicked
        } else {
          return prevExpression + numberClicked
        }
      })
    }
  }

  function handleOperator(event) {
    const operatorClicked = event.target.innerText
    setExpression(prevExpression => {
      const lastCharacter = prevExpression.slice(-1)
      if (['+', '-', '*', '/'].includes(lastCharacter)) {
        return prevExpression.slice(0, -1) + operatorClicked
      } else {
        return prevExpression + operatorClicked
      }
    })
    setCalculated(false)
  }

  function handleEqual() {
    try {
      setResult(eval(expression).toString())
    } catch (error) {
      setResult('Error')
    }
    setCalculated(true)
  }

  return (
    <div className='bg-gradient-to-r from-indigo-500 from-30% via-sky-500 via-60% to-emerald-500 to-80% h-screen flex items-center justify-center gap-12'>
      <div className='rounded-xl bg-black p-4 shadow-inner '>
        <div className='h-24  bg-indigo-500/70 rounded-xl p-3 mb-4 text-right font-bold flex flex-col'>
          <div className=' underline underline-offset-2'>{expression}</div>
          <div className='min-h-40 w-full text-5xl  flex-grow'>{calculated ? result : expression}</div>
        </div>
        <div className=''>
          <div className='grid bg-gradient-to-r from-indigo-500 to-sky-500 backdrop-blur-2xl p-3 rounded-lg grid-cols-4 gap-4'>
            <button className={`${box}`}>{'<->'}</button>
            <button className={`${box}`}>%</button>
            <button className={`${box}`} onClick={handleAllclear}>
              AC
            </button>
            <button className={`${box}`} onClick={handleDelete}>
              C
            </button>
            <button className={`${box}`} onClick={handleNumber}>
              7
            </button>
            <button className={`${box}`} onClick={handleNumber}>
              8
            </button>
            <button className={`${box}`} onClick={handleNumber}>
              9
            </button>
            <button className={`${box}`} onClick={handleOperator}>
              /
            </button>
            <button className={`${box}`} onClick={handleNumber}>
              4
            </button>
            <button className={`${box}`} onClick={handleNumber}>
              5
            </button>
            <button className={`${box}`} onClick={handleNumber}>
              6
            </button>
            <button className={`${box}`} onClick={handleOperator}>
              *
            </button>
            <button className={`${box}`} onClick={handleNumber}>
              1
            </button>
            <button className={`${box}`} onClick={handleNumber}>
              2
            </button>
            <button className={`${box}`} onClick={handleNumber}>
              3
            </button>
            <button className={`${box}`} onClick={handleOperator}>
              -
            </button>
            <button className={`${box}`} onClick={handleNumber}>
              .
            </button>
            <button className={`${box}`} onClick={handleNumber}>
              0
            </button>
            <button className={`${box}`} onClick={handleEqual}>
              =
            </button>
            <button className={`${box}`} onClick={handleOperator}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
