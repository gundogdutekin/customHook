import React from 'react'
import useTitleCountDisplay from './useTitleCountDisplay'
function useCounter() {
    const [count, setCount] = React.useState(0)
    const increment = () => setCount(a=>a+1)
    const decrement = () => setCount(a=>a-1)
    const reset = () => setCount(0)
    useTitleCountDisplay(count)

    return {count, increment, decrement, reset}
}
export default useCounter