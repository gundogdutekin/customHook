import {useState} from 'react'
import useTitleCountDisplay from './useTitleCountDisplay'

export default function TitleOne() {
    const [count, setCount] = useState(0)

    useTitleCountDisplay(count)//useTitleCountDisplay is a custom hook
        
  return (
    <div><button onClick={()=>{setCount(count+1)}}>Sayı = {count}</button></div>
  )
}
