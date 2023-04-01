
import useCounter from './useCounter'
import useTitleCountDisplay from "./useTitleCountDisplay";

export default function TitleOne() {
   
    const {count, increment, decrement, reset} = useCounter()
    useTitleCountDisplay(count)     
  return (
    <div>
      <h1>{count}</h1>
      <button className='btn btn-green' onClick={increment}>Artır</button>
      <button className='btn btn-red' onClick={decrement}>Azalt</button>
      <button className='btn btn-default' onClick={reset}>Sıfırla</button>
      </div>
  )
}
