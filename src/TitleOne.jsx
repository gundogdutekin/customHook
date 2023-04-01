import {useState} from 'react'
import useTitleCountDisplay from './useTitleCountDisplay'

export default function TitleOne() {
    const [count, setCount] = useState(0)
    const increment = () => setCount(a=>a+1)
    const decrement = () => setCount(a=>a-1)
    const reset = () => setCount(0)

    useTitleCountDisplay(count)//useTitleCountDisplay is a custom hook
        
  return (
    <div>
      <h1>{count}</h1>
      <button className='btn btn-green' onClick={increment}>Artır</button>
      <button className='btn btn-red' onClick={decrement}>Azalt</button>
      <button className='btn btn-default' onClick={reset}>Sıfırla</button>
      </div>
  )
}
