import React from 'react'

function useCounter() {
    const [count, setCount] = React.useState(0)
    const increment = () => setCount(a=>a+1)
    const decrement = () => setCount(a=>a-1)
    const reset = () => setCount(0)
   

    return {count, increment, decrement, reset}
}
export default useCounter