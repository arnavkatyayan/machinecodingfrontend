// Machine Coding 1: Counter App (with constraints)
// Problem

// Build a counter with:

// Increment

// Decrement

// Reset

// Minimum value = 0

// Disable decrement at 0

// Expected Skills

// React state

// Event handling

// Conditional rendering

import React from "react";
import { useState } from "react";
function MachineCodingQues1() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prev)=>prev+1);
    }
    const handleDecrement = () => {
        setCount((prev)=>prev-1);
    }
    const handleReset = () => {
        setCount(0);
    }
    return (
        <div>
        <h1>Count:{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement} disabled={count < 0}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        </div>
    )

}
export default MachineCodingQues1;