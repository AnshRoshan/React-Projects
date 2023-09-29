import React, { useId } from "react"

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2'>
        <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>
          {label}
        </label>
        <input
          id={amountInputId}
          list='Multiple'
          className='outline-none w-full bg-transparent py-1.5'
          type='number'
          placeholder='Amount'
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
        <datalist id='Multiple' className='bg-teal-800/50'>
          <option value='100' className='bg-sky-800/50'>
            Hunderd
          </option>
          <option value='1000'>Grand</option>
          <option value='100000'>Lakh</option>
          <option value='10000000'>Crore</option>
          <option value='1000000000'>Billion/Arab</option>
        </datalist>
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select
          className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
