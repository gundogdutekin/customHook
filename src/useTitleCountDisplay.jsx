import {useEffect} from 'react'

function useTitleCountDisplay(count) {
    useEffect(() => {
        document.title = `You clicked ${count} times`
      }, [count])
}

export default useTitleCountDisplay