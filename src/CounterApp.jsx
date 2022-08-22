import { useState } from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export function CounterApp ({ value }) {
  const [counter, setCounter] = useState(value)
  const handleAdd = () => { setCounter(counter + 1) }
  const handleSubtract = () => { setCounter(counter - 1) }
  const handleReset = () => { setCounter(value) }

  return (
    <>
      <h1>Mi Contador</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button aria-label='reset' onClick={handleReset}>Reset</button>
    </>
  )
}

CounterApp.prototypes = { value: PropTypes.number }
