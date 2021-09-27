import React from 'react';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(4);

    const decrementCount = function() {
        return setCount(count - 1);
    }

    const incrementCount = function() {
        return setCount(count + 1);
    }

    // const decrementCount = () => setCount(count - 1)
    // const incrementCount = () => setCount(count + 1)

    return (
        <React.Fragment>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </React.Fragment>
    )
}

export default Counter;