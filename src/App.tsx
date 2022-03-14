import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './conponents/ShowInfo'
import type { Product } from './types/product'
function App() {
  const [count, setCount] = useState<number>(0)
  const [info, setInfo] = useState<Product>({
    name: 'Hung',
    age: 22,
  })
  return (
    <div className="App">
      <button onClick={() => setCount(count - 1)}>-</button>{count} <button onClick={() => setCount(count + 1)}>+</button>
      <ShowInfo person={info} />
    </div>
  )
}

export default App
