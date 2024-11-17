import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)
    const handleCount = () => {
        const newCount = count + 1 ;
        setCount(newCount)
    }
    const handleCount1 = () => {
        const newCount1 = count - 1;
        setCount(newCount1)
    }
    return(
        <div style={{border : '2px solid tomato', padding: '10px', margin: '25px'}}>
            <h2>Count: {count}</h2>
            <button onClick={handleCount}>Add Number</button>
            <button onClick={handleCount1}>Reduce Number</button>
        </div>
    )
}